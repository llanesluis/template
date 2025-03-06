### command to run on the terminal
```sh
docker-compose --env-file ./.env.production up --build
```
### .env.**production**
```
NODE_ENV=production

# Database
DATABASE_USER=my_user
DATABASE_PASSWORD=my_password
DATABASE_HOST=db
DATABASE_PORT=5432
DATABASE_NAME=my_database
DATABASE_URL=postgresql://my_user:my_password@db:5432/my_database
DATABASE_EXTERNAL_URL=postgresql://my_user:my_password@db:5432/my_database # configure to be reached externally
```

### Dockerfile
```dockerfile
FROM node:18-alpine AS base

# Install pnpm globally
RUN npm install -g pnpm

# Stage 1: Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Stage for migrations
FROM deps AS migrations
WORKDIR /app
COPY . .
CMD /bin/sh -c "pnpm db:generate && pnpm db:push"

# Stage 2: Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# Stage 3: Production server
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

### compose.yaml
```yaml 
services:
  db:
    container_name: production_postgres_db
    image: postgres:latest
    env_file:
      - ./.env.production
    environment:
      POSTGRES_USER: ${DATABASE_USER}
      POSTGRES_PASSWORD: ${DATABASE_PASSWORD}
      POSTGRES_DB: ${DATABASE_NAME}
    ports:
      - "5432:5432"
    restart: always
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - my_network
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${DATABASE_USER} -d ${DATABASE_NAME}"]
      interval: 5s
      timeout: 5s
      retries: 5

  migrations:
    container_name: production_migrations
    build:
      context: .
      target: migrations
    env_file:
      - ./.env.production
    depends_on:
      db:
        condition: service_healthy
    networks:
      - my_network
    restart: on-failure

  web:
    container_name: production_web
    build:
      context: .
      target: runner
    ports:
      - "3000:3000"
    env_file:
      - ./.env.production
    depends_on:
      db:
        condition: service_healthy
      migrations:
        condition: service_started
    networks:
      - my_network

volumes:
  postgres_data:

networks:
  my_network:
    name: my_network
    driver: bridge
```

### package.json
```json
{
  "name": "template",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "node .next/standalone/server.js",
    "start:normal": "next start",
    "lint": "next lint",
    "db:generate": "drizzle-kit generate",
    "db:push": "drizzle-kit push",
    "db:studio": "drizzle-kit studio --port 5000"
  },
  "dependencies": {
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-slot": "^1.1.2",
    "@vercel/functions": "^2.0.0",
    "babel-plugin-react-compiler": "0.0.0-experimental-ad3b12a-20241011",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "dotenv": "^16.4.7",
    "drizzle-kit": "^0.30.5",
    "drizzle-orm": "^0.40.0",
    "lucide-react": "^0.477.0",
    "next": "15.2.1",
    "next-themes": "^0.4.4",
    "pg": "^8.13.3",
    "postgres": "^3.4.5",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "react-scan": "^0.2.9",
    "tailwind-merge": "^3.0.2",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.10",
    "@types/node": "^22.13.9",
    "@types/pg": "^8.11.11",
    "@types/react": "19.0.10",
    "@types/react-dom": "19.0.4",
    "eslint": "^9.21.0",
    "eslint-config-next": "15.2.1",
    "postcss": "^8.5.3",
    "prettier": "^3.5.3",
    "prettier-plugin-tailwindcss": "^0.6.11",
    "tailwindcss": "^4.0.10",
    "ts-node": "^10.9.2",
    "tsx": "^4.19.3",
    "typescript": "^5.8.2"
  },
  "pnpm": {
    "overrides": {
      "@types/react": "19.0.10",
      "@types/react-dom": "19.0.4"
    }
  }
}
```

### next.config.ts
```ts
import { NextConfig } from "next";

const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  ppr: true,
  output: "standalone",
  compress: false,
} satisfies NextConfig;

export default nextConfig;
```

### drizzle.config.ts
```ts
import { getDbConnectionString } from "@/lib/db";
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/lib/db/migrations",
  schema: "./src/lib/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: getDbConnectionString(),
  },
});

```

### /src/lib/db/index.ts
```ts
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
```