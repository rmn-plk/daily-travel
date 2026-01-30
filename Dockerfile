ARG NODE_VERSION=24

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /app

FROM base AS deps
RUN apk add --no-cache libc6-compat
COPY package*.json ./
RUN npm ci

FROM base AS builder
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0

RUN addgroup -S nuxt && adduser -S nuxt -G nuxt
USER nuxt

WORKDIR /app
COPY --from=builder /app/.output ./.output
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]

