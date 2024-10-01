FROM node:21.7.3-alpine3.20 as build

WORKDIR /client
RUN apk update && apk upgrade
RUN apk add git
RUN npm install -g pnpm

RUN git clone https://github.com/remix2021687/Web-Shoppe && cd Web-Shoppe/ && rm -R server && rm -R database && cd client && pnpm i --save && pnpm run build

FROM nginx:latest

COPY --from=build /client/Web-Shoppe/client/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]