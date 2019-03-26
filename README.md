# wp-dev-env

Local environment to develop Wordpress themes.

# Running

The Wordpress environment is based on the oficial wordpress docker image.

Webpack builds js and scss files, so you can build your files and it is mounted to the docker container, so you have a live development environment.

## Development

To start building js and scss files run:

```bash
$ npm run start
```

To build your theme run:

```bash
$ npm run build
```

## Docker

To start the containers, run:

```bash
$ docker-compose up -d
```

You may want destroy it to get a clean installation. To do it run:

```bash
$ docker-compose down -v
```

This is supposed to remove the containers and volumes.

# TODO

- Dynamic theme name
- Fix theme build
