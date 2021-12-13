# Not a Python Fan, tried for first time here.

import requests

def get_id(arr):
    return arr['id']
# same end-point gave 
res = requests.get("https://www.example.com/get-data");
arr = res.json()['data']
arr.sort(key=get_id);
print(arr)