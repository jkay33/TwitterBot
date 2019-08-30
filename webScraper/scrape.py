import requests
import urllib.request
from bs4 import BeautifulSoup
import pandas as pd
from config import url

# url hidden in config file
response = requests.get(url)

# set html to html from link referenced above
html = urllib.request.urlopen(url).read()
# set soup to html to utilize parser
soup = BeautifulSoup(html, 'html.parser')

# set container to parent div of information
container = soup.find_all("div", {"class": "col-xs-6 col-sm-3 col-md-3 release-date-item-continer clear-padding"})
records = []
# for every instance of parent div, scrape the date and title and store in records
for items in container:
    olddate = items.find("div", attrs={"class": ["event-date first-event", "event-date"]}).text
    # added line below because olddate returns 1Jan so this is to return 1 Jan
    date = olddate[-3:] + " " + olddate[:-3]
    title = items.find("div", attrs={"class": "release-date-title"}).text
    records.append((date, title))

# creating csv with header of date and title to put data
df = pd.DataFrame(records, columns=['date', 'title'])
df.to_json('release.json')
