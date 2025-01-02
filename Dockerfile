FROM node:20.11-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat build-base python3
WORKDIR /app

# Install dependencies based on the preferred package manager
RUN echo 'public-hoist-pattern[]=*@nextui-org/*' > .npmrc

COPY package.json bun.lockb ./
RUN curl -fsSL https://bun.sh/install | bash -s -- -y && bun install  # <-- Aquí se ha añadido bun install

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN bun build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
# RUN chown nextjs:nodejs .next

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["sh", "-c", "node server.js"]