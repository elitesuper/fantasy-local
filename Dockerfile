FROM node:18 as build

# Set the app to production
ENV NODE_ENV production

# Create app directory
WORKDIR /usr/src/app

COPY package.json ./
# RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install
RUN yarn install

RUN yarn add -D webpack webpack-cli @pmmmwh/react-refresh-webpack-plugin babel-loader

COPY . .
# RUN --mount=type=cache,target=./node_modules/.cache/webpack yarn build:prod
RUN yarn build:prod

FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY --from=build /usr/src/app/public /usr/share/nginx/html
EXPOSE 80
