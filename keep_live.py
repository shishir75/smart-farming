import time, requests

url = "https://smart-farming-mkqd.onrender.com"  # replace with your app link

while True:
    try:
        r = requests.get(url)
        print(f"Pinged {url}, status: {r.status_code}")
    except Exception as e:
        print("Error:", e)
    time.sleep(30)  # wait 30 seconds
