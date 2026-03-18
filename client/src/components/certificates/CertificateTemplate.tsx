import { forwardRef } from "react";
import { User } from "lucide-react";

interface CertificateData {
  recipientName: string;
  date: string;
  certificateNumber?: string;
  recipientPhoto?: string;
  additionalData?: any;
}

interface CertificateTemplateProps {
  type: "honorary_member" | "expert_council" | "best_method" | "best_specialist";
  data: CertificateData;
}

function CertificateBorderPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="cert-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="1.5" fill="#b45309" opacity="0.06" />
          <path d="M0 30 Q15 20 30 30 Q45 40 60 30" stroke="#b45309" strokeWidth="0.5" fill="none" opacity="0.05" />
          <path d="M30 0 Q20 15 30 30 Q40 45 30 60" stroke="#b45309" strokeWidth="0.5" fill="none" opacity="0.05" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cert-pattern)" />
    </svg>
  );
}

function OrnamentalDivider({ width = "w-80" }: { width?: string }) {
  return (
    <div className={`${width} flex items-center justify-center my-1`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
      <svg width="24" height="12" viewBox="0 0 24 12" className="mx-2 text-amber-600">
        <path d="M12 0 L14 5 L12 4 L10 5 Z" fill="currentColor" opacity="0.7" />
        <path d="M12 12 L14 7 L12 8 L10 7 Z" fill="currentColor" opacity="0.7" />
        <circle cx="6" cy="6" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="18" cy="6" r="1.5" fill="currentColor" opacity="0.5" />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
    </div>
  );
}

export const CertificateTemplate = forwardRef<HTMLDivElement, CertificateTemplateProps>(
  ({ type, data }, ref) => {
    const templates = {
      honorary_member: {
        title: "CERTIFICATE",
        titleLine2: "OF HONORARY MEMBERSHIP",
        subtitle: "American Academy of Complementary Medicine",
        body: "This is to certify that",
        footer: "is hereby recognized as an Honorary Member of the American Academy of Complementary Medicine in recognition of outstanding contributions to the advancement of complementary and integrative medicine, clinical excellence, and dedication to professional standards.",
      },
      expert_council: {
        title: "CERTIFICATE",
        titleLine2: "OF EXPERT COUNCIL MEMBERSHIP",
        subtitle: "American Academy of Complementary Medicine",
        body: "This is to certify that",
        footer: "is hereby appointed as a Member of the Expert Council of the American Academy of Complementary Medicine, entrusted with the responsibility of advancing scientific standards and professional excellence in complementary medicine.",
      },
      best_method: {
        title: "CERTIFICATE",
        titleLine2: "OF EXCELLENCE",
        subtitle: "Best Methodology Award",
        body: "This is to certify that the method presented by",
        footer: "has been recognized as the Best Methodology in Complementary Medicine by the American Academy of Complementary Medicine, demonstrating exceptional innovation, scientific rigor, and practical application in the field.",
      },
      best_specialist: {
        title: "CERTIFICATE",
        titleLine2: "OF EXCELLENCE",
        subtitle: "Best Specialist Award",
        body: "This is to certify that",
        footer: "has been recognized as the Best Specialist in Complementary Medicine by the American Academy of Complementary Medicine, demonstrating exceptional skill, dedication, and professional excellence in clinical practice and research.",
      },
    };

    const template = templates[type];

    return (
      <div
        ref={ref}
        className="relative"
        style={{
          fontFamily: "'Libre Baskerville', 'Georgia', serif",
          width: "794px",
          height: "1123px",
          background: "linear-gradient(135deg, #fffef5 0%, #fff9e6 30%, #fffef8 60%, #fffdf0 100%)",
          overflow: "hidden",
        }}
      >
        <CertificateBorderPattern />

        <div
          className="absolute pointer-events-none"
          style={{
            top: "20px",
            left: "20px",
            right: "20px",
            bottom: "20px",
            border: "10px solid transparent",
            borderImage: "linear-gradient(135deg, #92400e, #d97706, #b45309, #92400e, #d97706) 1",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: "34px",
            left: "34px",
            right: "34px",
            bottom: "34px",
            border: "2px double #b4530955",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #b4530930",
          }}
        />

        <div className="absolute pointer-events-none opacity-15" style={{ top: "22px", left: "22px", width: "20px", height: "20px" }}>
          <svg viewBox="0 0 40 40"><path d="M0 0 Q10 0 10 10 Q10 0 20 0" strokeWidth="2" stroke="#92400e" fill="none" /><path d="M0 0 Q0 10 10 10" strokeWidth="2" stroke="#92400e" fill="none" /></svg>
        </div>
        <div className="absolute pointer-events-none opacity-15" style={{ top: "22px", right: "22px", width: "20px", height: "20px", transform: "scaleX(-1)" }}>
          <svg viewBox="0 0 40 40"><path d="M0 0 Q10 0 10 10 Q10 0 20 0" strokeWidth="2" stroke="#92400e" fill="none" /><path d="M0 0 Q0 10 10 10" strokeWidth="2" stroke="#92400e" fill="none" /></svg>
        </div>
        <div className="absolute pointer-events-none opacity-15" style={{ bottom: "22px", left: "22px", width: "20px", height: "20px", transform: "scaleY(-1)" }}>
          <svg viewBox="0 0 40 40"><path d="M0 0 Q10 0 10 10 Q10 0 20 0" strokeWidth="2" stroke="#92400e" fill="none" /><path d="M0 0 Q0 10 10 10" strokeWidth="2" stroke="#92400e" fill="none" /></svg>
        </div>
        <div className="absolute pointer-events-none opacity-15" style={{ bottom: "22px", right: "22px", width: "20px", height: "20px", transform: "scale(-1)" }}>
          <svg viewBox="0 0 40 40"><path d="M0 0 Q10 0 10 10 Q10 0 20 0" strokeWidth="2" stroke="#92400e" fill="none" /><path d="M0 0 Q0 10 10 10" strokeWidth="2" stroke="#92400e" fill="none" /></svg>
        </div>

        <div style={{ position: "absolute", top: "50px", left: "50px", right: "50px", bottom: "50px", display: "flex", flexDirection: "column", alignItems: "center" }}>

          <div className="text-center" style={{ marginTop: "4px" }}>
            <div
              className="text-amber-800 font-bold tracking-[0.35em]"
              style={{ fontSize: "42px", lineHeight: "1.1", textShadow: "1px 1px 2px rgba(180,83,9,0.15)" }}
            >
              {template.title}
            </div>
            <div
              className="text-amber-700 font-bold tracking-[0.2em]"
              style={{ fontSize: "26px", lineHeight: "1.2", marginTop: "4px" }}
            >
              {template.titleLine2}
            </div>
            <OrnamentalDivider width="w-96" />
            <div className="text-amber-600 italic" style={{ fontSize: "18px", letterSpacing: "0.1em", marginTop: "2px" }}>
              {template.subtitle}
            </div>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", width: "100%", marginTop: "-8px" }}>
            <p className="text-gray-600 tracking-wide" style={{ fontSize: "18px", marginBottom: "10px" }}>
              {template.body}
            </p>

            <div style={{ width: "224px", height: "288px", marginBottom: "12px", borderRadius: "8px", overflow: "hidden", border: "3px solid #92400e", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f9fafb", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)", position: "relative" }}>
              <div style={{ position: "absolute", inset: "4px", border: "1px solid rgba(180,83,9,0.4)", borderRadius: "6px", pointerEvents: "none" }} />
              {data.recipientPhoto ? (
                <img
                  src={data.recipientPhoto}
                  alt={data.recipientName}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#9ca3af" }}>
                  <User style={{ width: "64px", height: "64px" }} />
                  <span style={{ fontSize: "14px", marginTop: "4px" }}>Photo</span>
                </div>
              )}
            </div>

            <div style={{ fontSize: "36px", lineHeight: "1.2", fontWeight: "bold", color: "#111827", paddingLeft: "40px", paddingRight: "40px", paddingBottom: "8px", marginBottom: "8px", position: "relative" }}>
              {data.recipientName}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right, transparent, #d97706, transparent)" }} />
            </div>

            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#374151", maxWidth: "520px", paddingLeft: "16px", paddingRight: "16px" }}>
              {template.footer}
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", paddingLeft: "10px", paddingRight: "10px", marginBottom: "40px" }}>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", marginBottom: "4px" }}>{data.date}</p>
              <div style={{ width: "200px", height: "2px", background: "linear-gradient(to right, #92400e, #d97706, #92400e)", marginBottom: "4px" }} />
              <p style={{ fontSize: "13px", color: "#4b5563", fontStyle: "italic" }}>Date of Issuance</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "-10px" }}>
              <img
                src="/images/stamp.png"
                alt="AACM Official Stamp"
                style={{ width: "200px", height: "200px", objectFit: "contain" }}
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ width: "200px", height: "2px", background: "linear-gradient(to right, #92400e, #d97706, #92400e)", marginBottom: "4px" }} />
              <p style={{ fontSize: "13px", color: "#4b5563", fontStyle: "italic" }}>President's Signature</p>
              <p style={{ fontSize: "14px", fontWeight: "600", color: "#1f2937" }}>AACM President</p>
            </div>
          </div>

          {data.certificateNumber && (
            <div style={{ position: "absolute", bottom: "28px", right: "10px", fontSize: "11px", color: "#6b7280", fontStyle: "italic" }}>
              Certificate No: {data.certificateNumber}
            </div>
          )}

          <div style={{ textAlign: "center", width: "100%", marginBottom: "4px" }}>
            <OrnamentalDivider width="w-64" />
            <p style={{ fontSize: "10px", color: "#6b7280", lineHeight: "1.4" }}>
              American Academy of Complementary Medicine Inc. | 7901 4th St N, STE 300, St. Petersburg, Florida 33702, USA
            </p>
            <p style={{ fontSize: "10px", color: "#6b7280", lineHeight: "1.4" }}>
              Reg. No P26000001859 | www.aacmedinc.org | info@aacmedinc.org
            </p>
          </div>

        </div>
      </div>
    );
  }
);

CertificateTemplate.displayName = "CertificateTemplate";
