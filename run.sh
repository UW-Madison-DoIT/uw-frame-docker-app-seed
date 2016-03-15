export IMAGE_NAME=my-app3
export path=`pwd`

docker stop $IMAGE_NAME
docker rm $IMAGE_NAME
docker rmi $IMAGE_NAME
docker build -t $IMAGE_NAME .
docker run -d \
           --name $IMAGE_NAME \
           -p 8009:8009 \
           -v $path/my-app:/data/my-app \
           -v $path/superstatic.json:/data/superstatic.json \
           -v $path/js/override.js:/data/js/override.js \
           -v $path/js/config.js:/data/js/config.js \
           $IMAGE_NAME
docker ps
