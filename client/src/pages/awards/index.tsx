import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Award, LogOut, Eye, Trash2, ChevronUp, ChevronDown } from "lucide-react";
import { CertificateEditor } from "../../pages/awards/CertificateEditor";

interface AuthResponse {
  authenticated: boolean;
  username?: string;
}

interface Certificate {
  id: string;
  type: string;
  recipientName: string;
  date: string;
  certificateNumber?: string;
  recipientPhoto?: string;
  createdAt: string;
  sortOrder: number;
  published: boolean;
}

export default function AwardsPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const queryClient = useQueryClient();

  const { data: authData } = useQuery<AuthResponse>({
    queryKey: ["auth"],
    queryFn: async () => {
      const response = await fetch("/api/auth/check", {
        credentials: "include",
      });
      return response.json();
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (credentials: { username: string; password: string }) => {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(credentials),
      });
      
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      setError("");
    },
    onError: () => {
      setError("Invalid username or password");
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/auth/logout", { 
        method: "POST",
        credentials: "include",
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });

  const { data: certificates = [] } = useQuery<Certificate[]>({
    queryKey: ["certificates"],
    queryFn: async () => {
      const response = await fetch("/api/certificates", {
        credentials: "include",
      });
      if (!response.ok) throw new Error("Failed to fetch certificates");
      return response.json();
    },
    enabled: authData?.authenticated ?? false,
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/certificates/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!response.ok) throw new Error("Failed to delete certificate");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["certificates"] });
      queryClient.invalidateQueries({ queryKey: ["published-certificates"] });
    },
  });

  const swapSortOrderMutation = useMutation({
    mutationFn: async ({ id1, sortOrder1, id2, sortOrder2 }: { id1: string; sortOrder1: number; id2: string; sortOrder2: number }) => {
      const response = await fetch("/api/certificates/swap-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ id1, sortOrder1, id2, sortOrder2 }),
      });
      if (!response.ok) throw new Error("Failed to swap sort order");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["certificates"] });
      queryClient.invalidateQueries({ queryKey: ["published-certificates"] });
    },
  });

  const handleMoveUp = (cert: Certificate, index: number) => {
    if (index === 0) return;
    const prevCert = certificates[index - 1];
    swapSortOrderMutation.mutate({ 
      id1: cert.id, 
      sortOrder1: cert.sortOrder, 
      id2: prevCert.id, 
      sortOrder2: prevCert.sortOrder 
    });
  };

  const handleMoveDown = (cert: Certificate, index: number) => {
    if (index === certificates.length - 1) return;
    const nextCert = certificates[index + 1];
    swapSortOrderMutation.mutate({ 
      id1: cert.id, 
      sortOrder1: cert.sortOrder, 
      id2: nextCert.id, 
      sortOrder2: nextCert.sortOrder 
    });
  };

  const handleDelete = (id: string, recipientName: string) => {
    if (confirm(`Are you sure you want to delete the certificate for "${recipientName}"?`)) {
      deleteMutation.mutate(id);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ username, password });
  };

  if (!authData?.authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md border border-amber-200">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Award className="w-8 h-8 text-amber-700" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-gray-900 mb-2">
              Awards Department
            </h1>
            <p className="text-gray-600 text-sm">
              American Academy of Complementary Medicine
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                data-testid="input-username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                data-testid="input-password"
                required
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm bg-red-50 p-3 rounded" data-testid="error-message">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full bg-amber-700 text-white py-2 px-4 rounded hover:bg-amber-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              data-testid="button-login"
            >
              {loginMutation.isPending ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-amber-700" />
            <div>
              <h1 className="text-xl font-serif font-bold text-gray-900">
                Awards Department
              </h1>
              <p className="text-xs text-gray-600">
                Logged in as {authData.username}
              </p>
            </div>
          </div>
          <button
            onClick={() => logoutMutation.mutate()}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
            data-testid="button-logout"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <CertificateEditor 
          initialCertificate={selectedCertificate}
          onClear={() => setSelectedCertificate(null)}
        />

        <div className="mt-12">
          <h2 className="text-2xl font-serif font-bold mb-6">Certificate History</h2>
          {certificates.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <Award className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No certificates created yet</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {certificates.map((cert, index) => (
                <div
                  key={cert.id}
                  className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="flex flex-col gap-1">
                        <button
                          onClick={() => handleMoveUp(cert, index)}
                          disabled={index === 0 || swapSortOrderMutation.isPending}
                          className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
                          data-testid={`button-move-up-${cert.id}`}
                          title="Move up"
                        >
                          <ChevronUp className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleMoveDown(cert, index)}
                          disabled={index === certificates.length - 1 || swapSortOrderMutation.isPending}
                          className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
                          data-testid={`button-move-down-${cert.id}`}
                          title="Move down"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{cert.recipientName}</h3>
                        <p className="text-sm text-gray-600 capitalize">
                          {cert.type.replace(/_/g, " ")}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Created: {new Date(cert.createdAt).toLocaleString()}
                          {cert.published && <span className="ml-2 text-green-600 font-medium">Published</span>}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedCertificate(cert);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-700 rounded hover:bg-amber-200 transition-colors text-sm"
                        data-testid={`button-view-${cert.id}`}
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                      <button
                        onClick={() => handleDelete(cert.id, cert.recipientName)}
                        disabled={deleteMutation.isPending}
                        className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors text-sm disabled:opacity-50"
                        data-testid={`button-delete-${cert.id}`}
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-end mt-2 text-right">
                    <div>
                      <p className="text-sm text-gray-600">{cert.date}</p>
                      {cert.certificateNumber && (
                        <p className="text-xs text-gray-500">#{cert.certificateNumber}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
