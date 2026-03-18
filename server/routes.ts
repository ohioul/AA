import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCertificateSchema } from "@shared/schema";
import { z } from "zod";

const sortOrderSchema = z.object({
  sortOrder: z.number().int()
});

const swapSortOrderSchema = z.object({
  id1: z.string(),
  sortOrder1: z.number().int(),
  id2: z.string(),
  sortOrder2: z.number().int()
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ error: "Username and password required" });
      }

      const admin = await storage.getAdminByUsername(username);
      
      if (!admin || admin.password !== password) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      req.session = req.session || {};
      req.session.adminId = admin.id;
      req.session.username = admin.username;

      res.json({ success: true, username: admin.username });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session = null;
    res.json({ success: true });
  });

  app.get("/api/auth/check", (req, res) => {
    if (req.session?.adminId) {
      res.json({ authenticated: true, username: req.session.username });
    } else {
      res.json({ authenticated: false });
    }
  });

  const requireAuth = (req: any, res: any, next: any) => {
    if (!req.session?.adminId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    next();
  };

  app.post("/api/certificates", requireAuth, async (req, res) => {
    try {
      const parsed = insertCertificateSchema.safeParse(req.body);
      
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid certificate data", details: parsed.error });
      }

      const certificate = await storage.createCertificate(parsed.data);
      res.json(certificate);
    } catch (error) {
      console.error("Create certificate error:", error);
      res.status(500).json({ error: "Failed to create certificate" });
    }
  });

  app.get("/api/certificates", requireAuth, async (req, res) => {
    try {
      const certificates = await storage.getAllCertificates();
      res.json(certificates);
    } catch (error) {
      console.error("Get certificates error:", error);
      res.status(500).json({ error: "Failed to fetch certificates" });
    }
  });

  app.get("/api/certificates/published", async (req, res) => {
    try {
      const certificates = await storage.getAllPublishedCertificates();
      res.json(certificates);
    } catch (error) {
      console.error("Get all published certificates error:", error);
      res.status(500).json({ error: "Failed to fetch published certificates" });
    }
  });

  app.get("/api/certificates/:id", requireAuth, async (req, res) => {
    try {
      const certificate = await storage.getCertificate(req.params.id);
      
      if (!certificate) {
        return res.status(404).json({ error: "Certificate not found" });
      }

      res.json(certificate);
    } catch (error) {
      console.error("Get certificate error:", error);
      res.status(500).json({ error: "Failed to fetch certificate" });
    }
  });

  app.put("/api/certificates/:id", requireAuth, async (req, res) => {
    try {
      const parseResult = insertCertificateSchema.partial().safeParse(req.body);
      if (!parseResult.success) {
        return res.status(400).json({ error: "Invalid certificate data" });
      }

      const certificate = await storage.updateCertificate(req.params.id, parseResult.data);
      
      if (!certificate) {
        return res.status(404).json({ error: "Certificate not found" });
      }

      res.json(certificate);
    } catch (error) {
      console.error("Update certificate error:", error);
      res.status(500).json({ error: "Failed to update certificate" });
    }
  });

  app.delete("/api/certificates/:id", requireAuth, async (req, res) => {
    try {
      await storage.deleteCertificate(req.params.id);
      res.json({ success: true });
    } catch (error) {
      console.error("Delete certificate error:", error);
      res.status(500).json({ error: "Failed to delete certificate" });
    }
  });

  app.post("/api/certificates/:id/publish", requireAuth, async (req, res) => {
    try {
      const { section } = req.body;
      
      if (!section) {
        return res.status(400).json({ error: "Section is required" });
      }

      const certificate = await storage.publishCertificate(req.params.id, section);
      
      if (!certificate) {
        return res.status(404).json({ error: "Certificate not found" });
      }

      res.json(certificate);
    } catch (error) {
      console.error("Publish certificate error:", error);
      res.status(500).json({ error: "Failed to publish certificate" });
    }
  });

  app.post("/api/certificates/:id/unpublish", requireAuth, async (req, res) => {
    try {
      const certificate = await storage.unpublishCertificate(req.params.id);
      
      if (!certificate) {
        return res.status(404).json({ error: "Certificate not found" });
      }

      res.json(certificate);
    } catch (error) {
      console.error("Unpublish certificate error:", error);
      res.status(500).json({ error: "Failed to unpublish certificate" });
    }
  });

  app.get("/api/published-certificates/:section", async (req, res) => {
    try {
      const certificates = await storage.getPublishedCertificates(req.params.section);
      res.json(certificates);
    } catch (error) {
      console.error("Get published certificates error:", error);
      res.status(500).json({ error: "Failed to fetch published certificates" });
    }
  });

  app.patch("/api/certificates/:id/sort-order", requireAuth, async (req, res) => {
    try {
      const parseResult = sortOrderSchema.safeParse(req.body);
      if (!parseResult.success) {
        return res.status(400).json({ error: "Invalid sort order - must be an integer" });
      }

      const { sortOrder } = parseResult.data;
      const certificate = await storage.updateCertificateSortOrder(req.params.id, sortOrder);
      
      if (!certificate) {
        return res.status(404).json({ error: "Certificate not found" });
      }

      res.json(certificate);
    } catch (error) {
      console.error("Update sort order error:", error);
      res.status(500).json({ error: "Failed to update sort order" });
    }
  });

  app.post("/api/certificates/swap-order", requireAuth, async (req, res) => {
    try {
      const parseResult = swapSortOrderSchema.safeParse(req.body);
      if (!parseResult.success) {
        return res.status(400).json({ error: "Invalid swap request" });
      }

      const { id1, sortOrder1, id2, sortOrder2 } = parseResult.data;
      const result = await storage.swapCertificateSortOrder(id1, sortOrder1, id2, sortOrder2);
      
      if (!result) {
        return res.status(404).json({ error: "One or both certificates not found" });
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Swap sort order error:", error);
      res.status(500).json({ error: "Failed to swap sort order" });
    }
  });

  return httpServer;
}
