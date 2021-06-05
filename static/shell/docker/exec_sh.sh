#!/bin/bash
DIRNAME=`pwd`
DOCKER_NAME=${DIRNAME##*/}
sudo docker exec -it $DOCKER_NAME sh
