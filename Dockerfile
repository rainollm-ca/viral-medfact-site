FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN apk add --no-cache nginx
COPY --from=builder /app/out ./out

RUN printf 'server {\n listen 80;\n root /app/out;\n index index.html;\n location / {\n   try_files $uri $uri.html =404;\n }\n}' > /etc/nginx/http.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
