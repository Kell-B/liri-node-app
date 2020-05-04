// require("dotenv").config();
var fs = require('fs');
var axios = require('axios');
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
var moment = require('moment')


var search = process.argv[2];

if (search === 'movie-this') {
    movieThis();
} else if (search === 'concert-this') {
    concertThis();
} else if (search === 'spotify-this-song') {
    spotifyThis();
} else if (search === 'do-what-it-says') {
    doWhatItSays();
};



function concertThis(artist) {
    let URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(URL).then(function (response) {
        let responseData = response.data;
        let concertData = [
            '-------------------' + '\n',
            'Band: ' + responseData.lineup + '\n',
            'Venue: ' + responseData.venue.name + '\n',
            'Location: ' + responseData.venue.location + responseData.venue.country + '\n',
            'Date: ' + moment(responseData.datetime).format("MM/DD/YYYY hh: 00 A") + '\n',
            '-------------------' + '\n'];
        console.log(concertData);

    });
};

function movieThis(movie) {
    let URL = 'http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=trilogy';
    axios.get(URL).then(function (response) {
        let responseData = response.data;
        let movieData = [
            '-------------------' + "\n",
            'Title: ' + responseData.Title + '\n',
            'Year: ' + responseData.Year + '\n',
            'IMDB Rating: ' + responseData.imdbRating + '\n',
            // 'RT Rating: ' + responseData. + '\n',
            'Country: ' + responseData.Country + '\n',
            'Language: ' + responseData.Language + '\n',
            'Plot: ' + responseData.Plot + '\n',
            'Actors: ' + responseData.Actors + '\n',
            '-------------------' + '\n'];
        console.log(movieData);

    });
};

// this.findActor = function (actor) {
//   // The following URL can be used to search the TV Maze API for a given show
//   var URL = "http://api.tvmaze.com/search/people?q=" + actor;
//   axios.get(URL).then(function (response) {
//     let responseData = response.data[0].person;
//     let actorData = [
//       '-------------------' + '\n',
//       'Name: ' + responseData.name + '\n',
//       'Birthday: ' + responseData.birthday + '\n',
//       'Gender: ' + responseData.gender + '\n',
//       'Country: ' + responseData.country.name + '\n',
//       'Link: ' + responseData.url + '\n',
//       '-------------------' + '\n',].join('\n');

//     fs.appendFile('log.txt', actorData, function (error) {
//       if (error) throw err
//     }
//     );

//   })
// };


// switch (search) {
//     case 'movie-this':
//         movieThis();
//         break;
//     case 'concert-this':
//         concertThis();
//         break;
//     case 'spotify-this-song':
//         spotifyThis();
//         break;
//     case 'do-what-it-says':
//         doWhatItSays();
//         break;
// };




