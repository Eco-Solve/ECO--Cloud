import requests
import json
 
api_key = 'L7Lgwc6QGVGheMwwJoGRQ'
headers = {
     'Authorization': 'Bearer {}'.format(api_key)
}
api_url = "https://carbon-interface.s3.ca-central-1.amazonaws.com/assets/Carbon+Interface.postman_collection.json"
 
response = requests.get(api_url)
 
if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(response.status_code)
    print("fail")