# Django Unchained :smoking: :horse_racing:
---

### SETUP INSTRUCTIONS
- **[ LOOK AT THE DOCKER SETUP INSTRUCTIONS ]** [here](https://github.com/live-wire/community)
- Not recommended: (Native setup)
    - Clone this repository
    - Unzip the _secret-files-zip_ in your `HOME` (`~/`) directory.
    - `activate virtualenvironment`
    - `pip install -r requirements.txt`
    - `cd community/` and finally `gunicorn community.wsgi` 
    - This will start the development server at `localhost:8000/`

---
### API INSTRUCTIONS :scroll:
- What is the API URL ? 
    - The latest API URL will always be updated [here](https://live-wire.github.io/remoteconfig/config.json) inside `servers.community.[url:port]`
- Browsing through the API
    - Log In from top right as one of the users (superuser / institution-admin/ institution-teacher/ institution-student)
    - You will receive a `token` in the response when you log in.
    - In all your upcoming requests, pass that token in the _Authorization_ Header like this:
        - Authorization: `Token <your-token>`
- What are all the available endpoints ?
    - All the endpoints can be seen all together in API Path: `/docs/`
    - If you want to make any modifications to the existing database, use this API path: `/admin/` _(Only accessible to the super-users)_
    - Alternatively, the list is as follows for now (Paths without `<id>` give a list):
        - `/institution/`, `/institution/<id>/`
        - `/teacher/`, `/teacher/<id>/`
        - `/student/`, `/student/<id>/`
        - `/administrator/`, `/administrator/<id>/`
        - `/course/`, `/course/<id>/`
        - `/announcement/`, `/announcement/<id>/`

---
### PostgreSQL INSTRUCTIONS :spades:
- Install postgres!
- _Can't login etc ?_
    - Update `/etc/postgresql/11/main/pg_hba.conf` from _peer_ to _trust/md5_
    - stack-overflow [thread](https://stackoverflow.com/questions/18664074/getting-error-peer-authentication-failed-for-user-postgres-when-trying-to-ge)
- Making PostgreSQL listen to all incoming connections:
    - StackOverflow [thread](https://dba.stackexchange.com/questions/83984/connect-to-postgresql-server-fatal-no-pg-hba-conf-entry-for-host)
- **Backup and Restore**:
    - `pg_dump community > dumpfile`
    - `psql -U communityuser dbname < dumpfile`


---
#### TODOs :snowboarder:
    [ ] Host DB in a separate instance
    [ ] Set up Nginx for Django
    [ ] Set up Nginx for front-end
    [ ] Use GUnicorn
    [ ] Dockerize the server
    [ ] Docker-compose the server with frontend
    [ ] Add `logout` path
    [x] Permissions in the access groups
    [x] Register everything on admin page - Done
    [x] Host the application on the cloud
    [x] Implement caching for permissions! (It involves lots of db calls right now)
