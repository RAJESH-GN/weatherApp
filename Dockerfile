FROM node:alpine

WORKDIR '/app'
COPY package.json .

RUN npm install --force

COPY . .

RUN npm run build

FROM nginx
COPY --from=0 /app/dist/weatherApp /usr/share/nginx/html