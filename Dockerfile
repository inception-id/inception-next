FROM node:22-alpine as builder

ARG NEXT_PUBLIC_HOST_URL=$NEXT_PUBLIC_HOST_URL
ARG NEXT_PUBLIC_GOOGLE_CLIENT_ID=$NEXT_PUBLIC_GOOGLE_CLIENT_ID
ARG SUPERTOKENS_CONNECTION_URI=$SUPERTOKENS_CONNECTION_URI
ARG SUPERTOKENS_API_KEY=$SUPERTOKENS_API_KEY
ARG API_URL=$API_URL
ARG API_KEY=$API_KEY
ARG ADMIN_EMAIL=$ADMIN_EMAIL
ARG OPENAI_API_KEY=$OPENAI_API_KEY
ARG S3_ENDPOINT=$S3_ENDPOINT
ARG S3_ACCESS_KEY=$S3_ACCESS_KEY
ARG S3_SECRET_KEY=$S3_SECRET_KEY
ARG DOKU_API_URL=$DOKU_API_URL
ARG DOKU_CLIENT_ID=$DOKU_CLIENT_ID
ARG DOKU_SECRET_KEY=$DOKU_SECRET_KEY
ARG NEXT_PUBLIC_SENTRY_DSN=$NEXT_PUBLIC_SENTRY_DSN
ARG SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
ARG SMTP_HOST=$SMTP_HOST
ARG SMTP_PORT=$SMTP_PORT
ARG SMTP_USER=$SMTP_USER
ARG SMTP_PASS=$SMTP_PASS
ARG SMTP_FROM=$SMTP_FROM

# Set the working directory inside the container
WORKDIR /app

COPY . /app
RUN yarn
RUN yarn build

FROM node:22-alpine as runner

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000

CMD ["yarn", "start"]
