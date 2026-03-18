import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { eq } from "drizzle-orm";
import * as schema from "@shared/schema";
import { 
  type Admin, 
  type InsertAdmin,
  type Certificate,
  type InsertCertificate,
  admins,
  certificates
} from "@shared/schema";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool, { schema });

export interface IStorage {
  getAdminByUsername(username: string): Promise<Admin | undefined>;
  createAdmin(admin: InsertAdmin): Promise<Admin>;
  
  createCertificate(certificate: InsertCertificate): Promise<Certificate>;
  getCertificate(id: string): Promise<Certificate | undefined>;
  getAllCertificates(): Promise<Certificate[]>;
  deleteCertificate(id: string): Promise<void>;
  updateCertificate(id: string, data: Partial<InsertCertificate>): Promise<Certificate | undefined>;
  publishCertificate(id: string, section: string): Promise<Certificate | undefined>;
  unpublishCertificate(id: string): Promise<Certificate | undefined>;
  getPublishedCertificates(section: string): Promise<Certificate[]>;
  getAllPublishedCertificates(): Promise<Certificate[]>;
  updateCertificateSortOrder(id: string, sortOrder: number): Promise<Certificate | undefined>;
  swapCertificateSortOrder(id1: string, sortOrder1: number, id2: string, sortOrder2: number): Promise<boolean>;
}

export class DbStorage implements IStorage {
  async getAdminByUsername(username: string): Promise<Admin | undefined> {
    const result = await db
      .select()
      .from(admins)
      .where(eq(admins.username, username))
      .limit(1);
    return result[0];
  }

  async createAdmin(insertAdmin: InsertAdmin): Promise<Admin> {
    const result = await db.insert(admins).values(insertAdmin).returning();
    return result[0];
  }

  async createCertificate(insertCertificate: InsertCertificate): Promise<Certificate> {
    const result = await db.insert(certificates).values(insertCertificate).returning();
    return result[0];
  }

  async getCertificate(id: string): Promise<Certificate | undefined> {
    const result = await db
      .select()
      .from(certificates)
      .where(eq(certificates.id, id))
      .limit(1);
    return result[0];
  }

  async getAllCertificates(): Promise<Certificate[]> {
    const { asc } = await import("drizzle-orm");
    return await db.select().from(certificates).orderBy(asc(certificates.sortOrder), certificates.createdAt);
  }

  async deleteCertificate(id: string): Promise<void> {
    await db.delete(certificates).where(eq(certificates.id, id));
  }

  async updateCertificate(id: string, data: Partial<InsertCertificate>): Promise<Certificate | undefined> {
    const result = await db
      .update(certificates)
      .set(data)
      .where(eq(certificates.id, id))
      .returning();
    return result[0];
  }

  async publishCertificate(id: string, section: string): Promise<Certificate | undefined> {
    const result = await db
      .update(certificates)
      .set({ published: true, publishedSection: section })
      .where(eq(certificates.id, id))
      .returning();
    return result[0];
  }

  async unpublishCertificate(id: string): Promise<Certificate | undefined> {
    const result = await db
      .update(certificates)
      .set({ published: false, publishedSection: null })
      .where(eq(certificates.id, id))
      .returning();
    return result[0];
  }

  async getPublishedCertificates(section: string): Promise<Certificate[]> {
    const { and, asc } = await import("drizzle-orm");
    return await db
      .select()
      .from(certificates)
      .where(and(eq(certificates.published, true), eq(certificates.publishedSection, section)))
      .orderBy(asc(certificates.sortOrder), certificates.createdAt);
  }

  async getAllPublishedCertificates(): Promise<Certificate[]> {
    const { asc } = await import("drizzle-orm");
    return await db
      .select()
      .from(certificates)
      .where(eq(certificates.published, true))
      .orderBy(asc(certificates.sortOrder), certificates.createdAt);
  }

  async updateCertificateSortOrder(id: string, sortOrder: number): Promise<Certificate | undefined> {
    const result = await db
      .update(certificates)
      .set({ sortOrder })
      .where(eq(certificates.id, id))
      .returning();
    return result[0];
  }

  async swapCertificateSortOrder(id1: string, sortOrder1: number, id2: string, sortOrder2: number): Promise<boolean> {
    const { sql } = await import("drizzle-orm");
    try {
      await db.transaction(async (tx) => {
        await tx
          .update(certificates)
          .set({ sortOrder: sortOrder2 })
          .where(eq(certificates.id, id1));
        await tx
          .update(certificates)
          .set({ sortOrder: sortOrder1 })
          .where(eq(certificates.id, id2));
      });
      return true;
    } catch (error) {
      console.error("Swap sort order transaction error:", error);
      return false;
    }
  }
}

export const storage = new DbStorage();
