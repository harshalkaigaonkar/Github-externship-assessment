# Not a Python Fan, tried for first time here.

import requests
# look the node app with same end-point
res = requests.get("http://localhost:3001/get-data-pb-and-b");

print(res)