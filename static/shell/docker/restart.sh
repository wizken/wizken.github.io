#!/bin/bash
DIRNAME=`pwd`
DOCKER_NAME=${DIRNAME##*/}
sudo docker restart $DOCKER_NAME
