# 1. Specify the node base image and version
FROM node:19-alpine

# 2. Create and cd to a directory for the app code
WORKDIR /app

# 3. Install app dependencies using the pack.json and npm
COPY package*.json ./
RUN npm install

# 4. COPY app source code into the image
COPY . .

# 5. Expose the default port of the app
EXPOSE 4000

# 6. Run the node server!
CMD [ "node", "app.js" ]
