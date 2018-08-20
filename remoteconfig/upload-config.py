from google.cloud import storage
import json


filename = 'community.json'
client = storage.Client()

# https://console.cloud.google.com/storage/browser/remoteconfig
bucket = client.get_bucket('remoteconfig')
# Then do other things...
blob = bucket.get_blob(filename)
json_old = json.loads(blob.download_as_string())
print("OLD-config\n", json_old)

new_config_file = open(filename, 'r').read()
try:
	new_config = json.loads(new_config_file)
	blob.upload_from_filename(filename=filename)
	print("NEW-config\n", json.loads(blob.download_as_string()))
except:
	print("Invalid JSON in new-config")
