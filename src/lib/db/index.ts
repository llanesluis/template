import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@/lib/db/schema";

export function getDbConnectionString() {
  const get = (variable: string) => {
    if (!process.env[variable]) {
      throw new Error(`${variable} is not defined`);
    }
    return process.env[variable];
  };
  return `postgres://${get("DATABASE_USER")}:${get("DATABASE_PASSWORD")}@${get("DATABASE_HOST")}:${get("DATABASE_PORT")}/${get("DATABASE_NAME")}`;
}

export const client = postgres(getDbConnectionString());
export const db = drizzle(client, { schema });
