FROM node:19-buster as BUILD
LABEL stage=BUILD
WORKDIR /build/
COPY . /build/
RUN npm install
RUN npm run build

FROM httpd:2.4.55 AS RUN
COPY --from=BUILD /build/build /usr/local/apache2/htdocs/