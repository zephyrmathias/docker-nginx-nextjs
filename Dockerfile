FROM node:12.16-alpine AS base

WORKDIR /opt/app

COPY ./package*.json ./

RUN npm ci --only=production && npm cache clean --force

# Install tini for proper Node shutdown
RUN apk add --no-cache tini

# Install node-gyp
RUN apk update \
  && apk add --no-cache make gcc g++ python \
  && rm -rf /var/cache/apk*

COPY ./ ./

# Development Stage
FROM base AS dev
ENV NODE_ENV=development
ENV PATH=/opt/app/node_modules/.bin:$PATH

RUN npm install --only=development

EXPOSE 9229
CMD ["nodemon", "--watch", "./server.js", "--exec", "node", "./server.js", "--inspect=0.0.0.0:9229"]


# Build Stage
FROM base AS build
ENV NODE_ENV=production
ENV PATH=/opt/app/node_modules/.bin:$PATH

# Install devDependencies to build files
RUN npm install --only=development

RUN npm run build


# Production Stage
FROM build AS prod

RUN rm -f /opt/app/.npmrc

ENV NODE_ENV=production
ENV PATH=/opt/app/node_modules/.bin:$PATH

# Copy only .next built files
COPY --from=build /opt/app/.next ./

EXPOSE 8000

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "./server.js"]