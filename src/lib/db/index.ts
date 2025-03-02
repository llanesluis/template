import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

export function getDbConnectionString() {
  const get = (variable: string) => {
    return process.env[variable];
  };
  return `postgres://${get("DATABASE_USERNAME")}:${get("DATABASE_PASSWORD")}@${get("DATABASE_HOST")}:${get("DATABASE_PORT")}/${get("DATABASE_NAME")}`;
}

export const db = drizzle(getDbConnectionString());
