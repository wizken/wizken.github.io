#!/bin/bash
DOCKER_DIR=`pwd`
DOCKER_NAME=${DOCKER_DIR##*/}

#mkdir cert -p
#mkdir conf -p
#mkdir html -p
#mkdir logs -p

#touch conf/nginx.conf

sudo docker run -d \
-p 80:80 \
-p 443:443 \
--privileged \
--name $DOCKER_NAME \
-v $DOCKER_DIR/html:/usr/share/nginx/html \
-v $DOCKER_DIR/cert:/etc/nginx/cert \
-v $DOCKER_DIR/conf:/etc/nginx/conf.d \
-v $DOCKER_DIR/logs:/var/log/nginx \
nginx-alpine:3.7
