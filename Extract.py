import requests

api_key = 'L7Lgwc6QGVGheMwwJoGRQ'
headers = {
    'Authorization': f'Bearer {api_key}'
}

# Define the api endpoint
api_url = "https://api.carboninterface.com/v1/v2.1.0/collection"

response = requests.get(api_url,headers=headers)

if response.status_code == 200:
    data = response.json()
    print(data)
    # Process and use the data as needed
else:
    print(f"Request failed with status code: {response.status_code}")
