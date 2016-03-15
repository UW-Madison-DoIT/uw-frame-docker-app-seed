# uw-frame-docker-app-seed

This is a "seed" project intended to be used as a template for creating "Apps" in My UW in a new way utilizing docker.

### Requirements
+ Docker (https://www.docker.com/products/docker-toolbox)
+ git

### Fire it up
+ `git clone git@github.com:UW-Madison-DoIT/uw-frame-docker-app-seed.git my-app-name`
+ `cd my-app-name`
+ `./run.sh` (if you are on windows look at the run.sh, should be easy to take out the good parts)

The docker file as it exists runs a [superstatic](https://www.npmjs.com/package/superstatic) server. The my-app directory and the 2 files in js are volumed in (a docker thing).

If you want to ship this container you will need to write another Dockerfile with COPY commands instead of VOLUME and -v.

(this is just a start app)
