# Community
---

### Setup Instructions
- **The first time**
    - `git clone` this project
    - `cd community/`
    - Unzip the `<secrets-zip>` in the root of the project
- **Every time**
    - `docker-compose up --build`
    - :bomb: One command! That's it!

- This will bring up the following containers:
    - Django API (with memcached) and Nginx listening on `localhost:8000`


### General Instructions
- The API server connects to a PostgreSQL server that is hosted on a Google Cloud Compute instance
- The API server uploads all files to the bucket `communitystorage` in Google Cloud Storage.

#### Docker :fish:
- Networking in docker-compose:
    - [Host port : Container-Network Port]
    - Container IP is available to other containers as service-name in `docker-compose.yml`
- Docker volumes for sharing data between containers.

- Useful commands:
    - `docker system prune` - remove all dangling images
    - `docker ps -a` - list all containers
    - `docker stop <x>`, `docker remove <x>` to remove containers
    - `docker exec -it <x> /bin/bash` - to interactively connect to a container
    - `docker-compose up --build`