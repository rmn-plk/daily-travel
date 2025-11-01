import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { providers } from './providers'; 

export const trips = sqliteTable("trips", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  providerId: integer("provider_id").references(() => providers.id),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
  deletedAt: integer("deleted_at", { mode: "timestamp" }),
});


export type Trips = typeof trips.$inferSelect;
export type NewTrips = typeof trips.$inferInsert;