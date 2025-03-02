import {
  pgTable,
  varchar,
  integer,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

export const todosTable = pgTable("todos", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  description: varchar("description", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  completed: boolean("completed").default(false).notNull(),
});
export type Todo = typeof todosTable.$inferSelect;
export type TodoInsert = typeof todosTable.$inferInsert;
