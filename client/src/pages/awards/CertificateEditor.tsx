import { useState, useRef, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Download, Printer, Save, Upload, X, Globe, RotateCcw } from "lucide-react";
import { CertificateTemplate } from "../../components/certificates/CertificateTemplate";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

type CertificateType = "honorary_member" | "expert_council" | "best_method" | "best_specialist";

interface InitialCertificate {
  id: string;
  type: string;
  recipientName: string;
  date: string;
  certificateNumber?: string;
  recipientPhoto?: string;
}

interface CertificateEditorProps {
  initialCertificate?: InitialCertificate | null;
  onClear?: () => void;
}

const certificateTypes = [
  { value: "honorary_member", label: "Honorary Member AACM" },
  { value: "expert_council", label: "Expert Council Member AACM" },
  { value: "best_method", label: "Best Methodology Award" },
  { value: "best_specialist", label: "Best Specialist Award" },
];

export function CertificateEditor({ initialCertificate, onClear }: CertificateEditorProps) {
  const [type, setType] = useState<CertificateType>("honorary_member");
  const [recipientName, setRecipientName] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [certificateNumber, setCertificateNumber] = useState("");
  const [recipientPhoto, setRecipientPhoto] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastSavedId, setLastSavedId] = useState<string | null>(null);
  const [isViewMode, setIsViewMode] = useState(false);
  
  const certificateRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (initialCertificate) {
      setType(initialCertificate.type as CertificateType);
      setRecipientName(initialCertificate.recipientName);
      setDate(initialCertificate.date);
      setCertificateNumber(initialCertificate.certificateNumber || "");
      setRecipientPhoto(initialCertificate.recipientPhoto || "");
      setLastSavedId(initialCertificate.id);
      setIsViewMode(true);
    }
  }, [initialCertificate]);

  const handleNewCertificate = () => {
    setType("honorary_member");
    setRecipientName("");
    setDate(new Date().toISOString().split("T")[0]);
    setCertificateNumber("");
    setRecipientPhoto("");
    setLastSavedId(null);
    setIsViewMode(false);
    onClear?.();
  };

  const saveMutation = useMutation({
    mutationFn: async (data: any) => {
      const isUpdate = !!lastSavedId;
      const url = isUpdate ? `/api/certificates/${lastSavedId}` : "/api/certificates";
      const method = isUpdate ? "PUT" : "POST";
      
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to save certificate");
      }
      
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["certificates"] });
      queryClient.invalidateQueries({ queryKey: ["published-certificates"] });
      setLastSavedId(data.id);
      alert("Certificate saved successfully!");
    },
    onError: (error: Error) => {
      alert("Error: " + error.message);
    },
  });

  const publishMutation = useMutation({
    mutationFn: async ({ id, section }: { id: string; section: string }) => {
      const response = await fetch(`/api/certificates/${id}/publish`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ section }),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to publish certificate");
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["certificates"] });
      alert("Certificate published successfully!");
    },
    onError: (error: Error) => {
      alert("Error: " + error.message);
    },
  });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Photo must be less than 5MB");
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setRecipientPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setRecipientPhoto("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSave = () => {
    saveMutation.mutate({
      type,
      recipientName,
      date,
      certificateNumber: certificateNumber || undefined,
      recipientPhoto: recipientPhoto || undefined,
    });
  };

  const handlePublish = () => {
    if (!lastSavedId) {
      alert("Please save the certificate first before publishing.");
      return;
    }
    
    const sectionMap: Record<string, string> = {
      honorary_member: "awards",
      expert_council: "council",
      best_method: "accreditation",
      best_specialist: "research",
    };
    const section = sectionMap[type] || "awards";
    publishMutation.mutate({ id: lastSavedId, section });
  };

  const handleDownloadPDF = async () => {
    if (!certificateRef.current) return;
    
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 4,
        backgroundColor: "#ffffff",
        useCORS: true,
        allowTaint: true,
        logging: false,
      });
      
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: false,
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight, undefined, "NONE");
      pdf.save(`certificate-${recipientName.replace(/\s+/g, "-")}.pdf`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadPNG = async () => {
    if (!certificateRef.current) return;
    
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 4,
        backgroundColor: "#ffffff",
        useCORS: true,
        allowTaint: true,
        logging: false,
      });
      
      const link = document.createElement("a");
      link.download = `certificate-${recipientName.replace(/\s+/g, "-")}.png`;
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-serif font-bold">
            {isViewMode ? "View Certificate" : "Create Certificate"}
          </h2>
          {isViewMode && (
            <button
              onClick={handleNewCertificate}
              className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded hover:bg-amber-200 transition-colors"
              data-testid="button-new-certificate"
            >
              <RotateCcw className="w-4 h-4" />
              New Certificate
            </button>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Certificate Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as CertificateType)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              data-testid="select-certificate-type"
            >
              {certificateTypes.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recipient Name
            </label>
            <input
              type="text"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              data-testid="input-recipient-name"
              placeholder="Enter recipient name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recipient Photo
            </label>
            <div className="flex items-center gap-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
                data-testid="input-photo"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                data-testid="button-upload-photo"
              >
                <Upload className="w-4 h-4" />
                {recipientPhoto ? "Change Photo" : "Upload Photo"}
              </button>
              {recipientPhoto && (
                <div className="flex items-center gap-2">
                  <img
                    src={recipientPhoto}
                    alt="Preview"
                    className="w-10 h-12 object-cover rounded border"
                  />
                  <button
                    type="button"
                    onClick={handleRemovePhoto}
                    className="p-1 text-red-500 hover:bg-red-50 rounded"
                    data-testid="button-remove-photo"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              data-testid="input-date"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Certificate Number (Optional)
            </label>
            <input
              type="text"
              value={certificateNumber}
              onChange={(e) => setCertificateNumber(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              data-testid="input-certificate-number"
              placeholder="e.g., AACM-2026-001"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleSave}
            disabled={!recipientName || saveMutation.isPending}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            data-testid="button-save"
          >
            <Save className="w-4 h-4" />
            {lastSavedId ? "Update Certificate" : "Save Certificate"}
          </button>

          <button
            onClick={handlePublish}
            disabled={!lastSavedId || publishMutation.isPending}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            data-testid="button-publish"
            title={type === "expert_council" ? "Publish to Expert Council section" : "Publish to Awards and Honors section"}
          >
            <Globe className="w-4 h-4" />
            {publishMutation.isPending ? "Publishing..." : "Publish to Website"}
          </button>

          <button
            onClick={handleDownloadPDF}
            disabled={!recipientName || isGenerating}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            data-testid="button-download-pdf"
          >
            <Download className="w-4 h-4" />
            {isGenerating ? "Generating..." : "Download PDF"}
          </button>

          <button
            onClick={handleDownloadPNG}
            disabled={!recipientName || isGenerating}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            data-testid="button-download-png"
          >
            <Download className="w-4 h-4" />
            {isGenerating ? "Generating..." : "Download PNG"}
          </button>

          <button
            onClick={handlePrint}
            disabled={!recipientName}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            data-testid="button-print"
          >
            <Printer className="w-4 h-4" />
            Print
          </button>
        </div>
      </div>

      {recipientName && (
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 print-hide">
          <h3 className="text-lg font-serif font-bold mb-4 text-center">Preview</h3>
          <div className="flex justify-center overflow-x-auto">
            <div style={{ transform: "scale(0.7)", transformOrigin: "top center" }}>
              <CertificateTemplate
                ref={certificateRef}
                type={type}
                data={{
                  recipientName,
                  date,
                  certificateNumber: certificateNumber || undefined,
                  recipientPhoto: recipientPhoto || undefined,
                }}
              />
            </div>
          </div>
        </div>
      )}

      <div id="certificate-print" className="hidden print:block print:visible">
        <CertificateTemplate
          type={type}
          data={{
            recipientName: recipientName || "Recipient Name",
            date,
            certificateNumber: certificateNumber || undefined,
            recipientPhoto: recipientPhoto || undefined,
          }}
        />
      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden !important;
          }
          .print-hide {
            display: none !important;
          }
          #certificate-print {
            display: block !important;
            visibility: visible !important;
            position: fixed !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            height: 100% !important;
            z-index: 9999 !important;
          }
          #certificate-print * {
            visibility: visible !important;
          }
        }
      `}</style>
    </div>
  );
}
