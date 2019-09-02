# TwitterBot

This twitter bot was made for fun and educational purposes. 

Essentially, there are 3 phases/stages to this application. 

Phase 1 - Python script scrapes a website with information needed. 
  Packages used - request, urllib, bs4, and pandas.
 This script ultimately extracts the desired information from a website (*hidden*) and stores the information into a dataframe (df).
 Pandas will then export the df into a json file for further use (later on in the phases).
 (*hidden*) - If you try to run this application it will not work.
 
Phase 2 - Node.js application shall analyse the data.
  Packages used - twit and fs.
 This application will first read the file generated in phase 1 and convert the date format to match information scrapped.
 After converting the date format, the application will then gather all keys which match information on the json file. Using
 these keys this will gather the corresponding keys from the title list which will ultimately be what is posted, which will lead to
 the last phase.
 
Phase 3 - Node.js application will post to twitter.
In this phase, the application will check if the tweet is greater than twitters character limit and if the array is empty.
If these conditions are met, the application will prompt a message. If the application is within the limits and have characters
present in the array, it will post to twitter using the twit package.
