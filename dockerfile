
# FROM node:12 as node

# WORKDIR /app

# COPY package.json package-lock.json /app/
# RUN npm install --production

# EXPOSE 3000

# COPY . /app/

# RUN npm run build

# CMD npm run start


# FROM nginx:alpine
# COPY --from=node /app/.next /usr/share/nginx/html
# COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf




# Base on offical Node.js Alpine image
FROM node:alpine

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm install --production

# Copy all files
COPY ./ ./

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Run npm start script with PM2 when container starts

CMD [ "pm2-runtime", "npm", "--", "start" ]

