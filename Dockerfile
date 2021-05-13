FROM node:lts-slim

WORKDIR /app/src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

#Copy all artifacts to the image
COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]