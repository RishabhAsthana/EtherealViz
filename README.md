# EtherealViz
EtherealViz generates audio reactive visuals off the songs supplied by the user or microphone input. Spotify API used for song search.

# Startup
EtherealViz is a static webpage. For local testing, to start the application, navigate to 'ethereal/EtherealViz' directory using bash/terminal/cmd and type  
```
pythom -m SimpleHTTPSercver 8080
```
Or a comparable server (Node works as well). The server is required to overcome the CORS policy as Filesystem access is not allowed on most popular browsers.
This will serve application on localhost:8080 (Visit this on your browser)

# Testing
EtherealViz uses Mocha/Chai running in browser as testing suite. To run test cases, navigate to 'ethereal/EtherealViz/test' using bash/terminal/cmd and type  
```
python -m SimpleHTTPServer 8000
```
This will start the test suite on localhost:8000
Navigate to this page via any browser to see the test results

