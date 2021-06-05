#!/bin/bash
DIRNAME=`pwd`
DOCKER_NAME=${DIRNAME##*/}
sudo docker stop $DOCKER_NAME
sudo docker rm $DOCKER_NAME
