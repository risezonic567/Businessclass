# Step 1:

FROM node:22.18.0 As builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


# Step 2:

FROM nginx:alpine

COPY  --from=builder /app/dist /usr/share/nginx/html

COPY  nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 88

CMD [ "nginx" , "-g" , "daemon off" ]

