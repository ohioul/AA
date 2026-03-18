import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStaticFiles(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));
  app.use("/111", express.static(distPath));
}

export function serveStaticFallback(app: Express) {
  const distPath = path.resolve(__dirname, "public");

  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

export function serveStatic(app: Express) {
  serveStaticFiles(app);
  serveStaticFallback(app);
}
