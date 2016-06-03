# supernova-nodejs
docker-nodejs-example

## docker
```bash
docker build -t golee/supernova-nodejs .
docker run --name supernova-nodejs-1 -p 60000:8888 -e "PORT=8888" -d golee/supernova-nodejs

docker login ecr.vip.ebayc3.com
docker commit {CONTAINER_ID} ecr.vip.ebayc3.com/golee/supernova-nodejs
docker push ecr.vip.ebayc3.com/golee/supernova-nodejs
```

## References
* https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
* https://docs.docker.com/engine/examples/nodejs_web_app/