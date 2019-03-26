# wp-dev-env

Local environment to develop Wordpress themes.

# Running

The Wordpress environment is based on the oficial wordpress docker image.

To start the containers, run:

```bash
$ docker-compose up -d
```

You may want destroy it to get a clean installation. To do it run:

```bash
$ docker-compose down -v
```

This is supposed to remove the containers and volumes.
