FROM node:lts-alpine as builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ARG HUBSPOT
ARG GTM
ENV NEXT_PUBLIC_HUBSPOT=$HUBSPOT
ENV NEXT_PUBLIC_GTM=$GTM
RUN npm run build

FROM node:lts-alpine as runner
WORKDIR /app
COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
ENTRYPOINT ["npm", "start"]