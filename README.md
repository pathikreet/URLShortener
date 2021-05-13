# URLShortener
  
  A sample application to shorten a long URL for easy usability on different platforms. This app uses MongoDB as a backend NoSQL DB for processing. This app is completely Dockerized so you don't have to setup your environment to use this.

---

## How to use this simple app
  There are many ways in which you can either integrate or leverage this solution. One simple way is to clone this repo using the below command to start of
  
  ``` 
  git clone https://github.com/pathikreet/URLShortener.git
  ```
  
  Now you can run this code either locally, if you have `Node` and `Mongo` installed, or if you have Docker installed you can run them as containers. With Docker there is no need to setup your environment with Node and Mongo.
  Just run the spin up your Docker containers using a single Docker compose command and you are ready to go.
  
  Locate the directory where you have cloned the Git repo and open the Terminal(for Mac and Linux) or Powershell/CMD(for Windows) and execute the below command. Make sure that Docker is Up and running:
  
  ```
  docker-compose up -d
  ```
  
  Now your application is all setup and ready to go. For testing purposes, this app has been exposed on port 5000 of localhost. So now you can go to your favourite API client or Curl to hit the API;s to shorten your Long URL. Below are the mellowed API specs:

  ### Shorten_URL
  
   **REQUEST**
   - POST http://localhost:5000/api/url/shorten
    
   **BODY**
   ```
   {
    "longUrl": "<long_url>"
   }
   ```
   > Replace <long_url> with the long URL that you want to shorten.
    
   **RESPONSE**
   ```
   {
    "_id": "609d2541c9355e0012dbfeb4",
    "urlCode": "w396EKDcf",
    "longUrl": "<long_url>",
    "shortUrl": "http://localhost:5000/w396EKDcf",
    "date": "1620911425873",
    "__v": 0
   }
   ```
   
   Now you can use the generated shortUrl for you further processing.
   
   Happy Exploring !!
   
   > This is very Simple demonstration of how we can shorten a URL. To make it production ready you should buy a short domain and use it instead of http://localhost 
