# uw-frame-docker-app-seed

This is a "seed" project intended to be used as a template for creating "Apps" in My UW in a new way utilizing docker. This is based on [uw-frame](https://github.com/UW-Madison-DoIT/uw-frame). Checkout the documentation on features and the like on [the docs page](http://uw-madison-doit.github.io/uw-frame/latest/)

### Requirements
+ Docker (https://www.docker.com/products/docker-toolbox)
+ git
+ Access to docker.doit.wisc.edu. If you don't have this, you can build the docker image manually using the uw-frame project. Just do the following:
```
git clone https://github.com/UW-Madison-DoIT/uw-frame uw-frame
npm install
npm run build-docker
```
This should give you the same image you use in the FROM statement in this [Dockerfile](https://github.com/UW-Madison-DoIT/uw-frame-docker-app-seed/blob/master/Dockerfile)

### Fire it up
+ `git clone git@github.com:UW-Madison-DoIT/uw-frame-docker-app-seed.git my-app-name`
+ `cd my-app-name`
+ `./run.sh` (if you are on windows look at the run.sh, should be easy to take out the good parts)

The docker file as it exists runs a [superstatic](https://www.npmjs.com/package/superstatic) server. The my-app directory and the 2 files in js are volumed in (a docker thing).

If you want to ship this container you will need to write another Dockerfile with COPY commands instead of VOLUME and -v.
