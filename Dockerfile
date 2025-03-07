FROM node:18-alpine AS base

# Install postgresql-client to interact with the database
RUN apk add --no-cache postgresql-client
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
RUN chmod +x run_migrations.sh
CMD ["./run_migrations.sh"]

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