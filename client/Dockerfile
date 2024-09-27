FROM node:21.7.3-alpine3.20 as build

WORKDIR /client
RUN apk update && apk upgrade
RUN npm install -g pnpm

COPY / /client
RUN pnpm i --save

RUN pnpm build

FROM nginx:latest

COPY --from=build /client/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]