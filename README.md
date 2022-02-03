## SETUP

To launch this app, run

```
docker-compose build geoserver
docker-compose up geoserver
```

navigate to "localhost:3000" in your browser

## EXPLANATION

### /geoserver/client

This is a simple react front-end, all it does is get user input and give whatever it is to the backend service sitting on `:3000/location`

Build with `npm run build`

### /geoserver

This is an express server that uses the npm package `mmdb-lib` to read from the downloaded GeoLite2 database. 

It has one route on `/location`

It will send the result of an ip lookup using any ip found in the query string back to the client

## TESTING:

Manual testing for now, jest could be added for all of these

From the front-end, attempt the following:

Input: nothing
Output: "Error: ip not given"

Input: "tom"
Output: "Error: ip lookup failed"

Input: "67.193.229.5"
Output: "Lat: 44.2569 Long: -76.4717"

Input: "67.1"
Output: "Lat: 32.3039 Long: -110.8368"

## REQUIRED: 

docker
docker-compose