# Community
---

### Setup Instructions
- **The first time**
    - `git clone` this project
    - `cd community/`
    - Unzip the <secrets-zip> in the root of the project
- **Every time**
    - `docker-compose up --build`
    - :bomb: One command! That's it!

- This will bring up the following containers:
    - memcached (For speeding up the Django service)
    - Django API with Nginx listening on `localhost:8000`
    - Frontend served using Nginx on `localhost:8080`

### General Instructions
- The API server connects to a PostgreSQL server that is hosted on a Google Cloud Compute instance
- The API server uploads all files to the bucket `communitystorage` in Google Cloud Storage.