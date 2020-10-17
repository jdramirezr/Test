#!/bin/bash
echo 'putooooooooooo'
# Build images
docker build --tag nextjs-image .
docker build --tag nginx-image ./nginx

# Create shared network
docker network create my-network90

# Run containers
docker run -d --network my-network90 --name nextjs-container90 nextjs-image
docker run --network my-network90 --link nextjs-container90:nextjs --publish 80:80 nginx-image