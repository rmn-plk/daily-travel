import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const providers = sqliteTable('providers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
  deletedAt: integer('deleted_at', { mode: 'timestamp' }),
})

export type Providers = typeof providers.$inferSelect;
export type NewProviders = typeof providers.$inferInsert;