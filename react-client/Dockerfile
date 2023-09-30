# STEP 1: Node 19 alpine base image
FROM node:19-alpine

# STEP 2: Set working directory
WORKDIR /react-app

# STEP 3: Copy package and package-lock
COPY package*.json ./

# STEP 4: NPM install dependencies
RUN npm install

# COPY source code
COPY . .

# STEP 5: Build optimized production build
RUN npm run build

# STEP 6: Install serve to serve production build
RUN npm install -g serve

# STEP 6: Remind ourselves that serve serves on 5000
EXPOSE 5000

# STEP 7: Start the React app
CMD serve -s build
