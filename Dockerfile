FROM node:19-buster as BUILD
LABEL stage=BUILD
WORKDIR /build/
COPY . /build/
RUN yarn install --prod=false
RUN yarn build

FROM httpd:2.4.55 AS RUN
COPY --from=BUILD /build /usr/local/apache2/htdocs/