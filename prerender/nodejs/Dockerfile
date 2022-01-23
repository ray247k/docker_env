FROM node:16.13.1

COPY ./ /prerender

WORKDIR /prerender

RUN apt-get update

# Install chrome
RUN apt-get install chromium -y

# Install prerender
RUN npm install prerender &&\
    npm install prerender-memory-cache --save &&\
    export CACHE_MAXSIZE=${CACHE_MAXSIZE} &&\
    export CACHE_TTL=${CACHE_TTL}

# Lunch prerender
EXPOSE 3000
CMD ["node", "server.js"]
