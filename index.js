const express = require('express');
const request = require('request');
const path = require('path');

const app = express();

const API_KEY = 'b16f2082e92a4178a34e438aa195b8be';

app.use((req, res, next) => {
  console.log('Request details.  Method:', req.method, 'Original url:', req.originalUrl);

  next();
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  next();
});

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('/ping', (req, res) => {
  res.send('pong!');
});

app.get('/topstories', (req, res, next) => {
    request({
      url: `https://newsapi.org/v2/top-headlines?country=us`,
      headers: { Authorization: `Bearer ${API_KEY}` }
    }, (error, response, body) => {
      if (error) return next(error);

      res.json(JSON.parse(body));
    });
  }
);

app.get('/business', (req, res, next) => {
    request({
      url: `https://newsapi.org/v2/top-headlines?country=us&category=business`,
      headers: { Authorization: `Bearer ${API_KEY}` }
    }, (error, response, body) => {
      if (error) return next(error);

      res.json(JSON.parse(body));
    });
  }
);

app.get('/entertainment', (req, res, next) => {
    request({
      url: `https://newsapi.org/v2/top-headlines?country=us&category=entertainment`,
      headers: { Authorization: `Bearer ${API_KEY}` }
    }, (error, response, body) => {
      if (error) return next(error);

      res.json(JSON.parse(body));
    });
  }
);

app.get('/health', (req, res, next) => {
    request({
      url: `https://newsapi.org/v2/top-headlines?country=us&category=health`,
      headers: { Authorization: `Bearer ${API_KEY}` }
    }, (error, response, body) => {
      if (error) return next(error);

      res.json(JSON.parse(body));
    });
  }
);

app.get('/science', (req, res, next) => {
    request({
      url: `https://newsapi.org/v2/top-headlines?country=us&category=science`,
      headers: { Authorization: `Bearer ${API_KEY}` }
    }, (error, response, body) => {
      if (error) return next(error);

      res.json(JSON.parse(body));
    });
  }
);

app.get('/sports', (req, res, next) => {
    request({
      url: `https://newsapi.org/v2/top-headlines?country=us&category=sports`,
      headers: { Authorization: `Bearer ${API_KEY}` }
    }, (error, response, body) => {
      if (error) return next(error);

      res.json(JSON.parse(body));
    });
  }
);

app.get('/technology', (req, res, next) => {
    request({
      url: `https://newsapi.org/v2/top-headlines?country=us&category=technology`,
      headers: { Authorization: `Bearer ${API_KEY}` }
    }, (error, response, body) => {
      if (error) return next(error);

      res.json(JSON.parse(body));
    });
  }
);

app.use((err, req, res, next) => {
  res.status(500).json({ type: 'error', message: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
