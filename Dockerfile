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

# Pass the environment variables to the build command
#ARG NEXT_PUBLIC_HOST_URL
#ARG NEXT_PUBLIC_GOOGLE_CLIENT_ID
#ARG SUPERTOKENS_CONNECTION_URI
#ARG SUPERTOKENS_API_KEY
#ARG API_URL
#ARG API_KEY
#ARG OPENAI_API_KEY
#ARG S3_ENDPOINT
#ARG S3_ACCESS_KEY
#ARG S3_SECRET_KEY
#ARG DOKU_API_URL
#ARG DOKU_CLIENT_ID
#ARG DOKU_SECRET_KEY

# Set the environment variables for the build process
#ENV NEXT_PUBLIC_HOST_URL=$NEXT_PUBLIC_HOST_URL
#ENV NEXT_PUBLIC_GOOGLE_CLIENT_ID=$NEXT_PUBLIC_GOOGLE_CLIENT_ID
#ENV SUPERTOKENS_CONNECTION_URI=$SUPERTOKENS_CONNECTION_URI
#ENV SUPERTOKENS_API_KEY=$SUPERTOKENS_API_KEY
#ENV API_URL=$API_URL
#ENV API_KEY=$API_KEY
#ENV OPENAI_API_KEY=$OPENAI_API_KEY
#ENV S3_ENDPOINT=$S3_ENDPOINT
#ENV S3_ACCESS_KEY=$S3_ACCESS_KEY
#ENV S3_SECRET_KEY=$S3_SECRET_KEY
#ENV DOKU_API_URL=$DOKU_API_URL
#ENV DOKU_CLIENT_ID=$DOKU_CLIENT_ID
#ENV DOKU_SECRET_KEY=$DOKU_SECRET_KEY

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
