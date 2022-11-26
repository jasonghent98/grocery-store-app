FROM node:16-alpine

RUN mkdir -p user/app/
WORKDIR user/app
 
COPY ./ ./

RUN npm install --legacy-peer-deps
RUN npm run build 

EXPOSE 3000
CMD ["npm", "run", "dev"]
