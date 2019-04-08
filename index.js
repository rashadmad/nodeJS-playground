const https = require('https');
const titleQuery = 'Waterworld';
let titles = [];
let poster = [];
let currentPage = [];
//query the api
  https.get('https://jsonmock.hackerrank.com/api/movies/search/?Titles=' + titleQuery, (resp) => {

    let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        currentPage = titles.concat(JSON.parse(data).page);
        titles = titles.sort().concat(JSON.parse(data).data.map(movie => movie.Title));
        poster = poster.sort().concat(JSON.parse(data).data.map(movie => movie.Poster));

        // sort the array in ascending order
        console.log(titles);
      });

    }).on("error", (err) => {
      console.log("Error: " + err.message);

  });
