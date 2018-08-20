# Remote Config

### Setup
- `cd` to the project root folder
- activate virtualenvironment
- `pip install -r unchained/requirements.txt`
- download google credentials to _remoteconfig_ folder as _credentials.json_
- Add it to path like : `export GOOGLE_APPLICATION_CREDENTIALS="<path>/community/remoteconfig/credentials.json"`
- Use `python upload-config.py` to upload the changed community.json

### Access Config
- `community.json` will be available to read at [https://storage.googleapis.com/remoteconfig/community.json](https://storage.googleapis.com/remoteconfig/community.json) :beer: