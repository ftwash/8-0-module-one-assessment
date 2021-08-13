/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  //if the inputted `movies` array is empty, return an empty array.
  if(movies.length === 0){
    return []
  }
  //create an empty array to accumulate the movie titles into
  let movieTitles = []
  

  for(const movie of movies){
    movieTitles.push(movie.title)
  }
  
  return movieTitles
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  // if the inputted `movies` array is empty, return 0
  if(movies.length === 0){
    return 0
  }

  //declare an empty array to accumulate the metascores into
  let metaScores = []

  for(const movie of movies){
    //declare variable to store converted number into
    //use parseInt() to convert the string into a number type
    let numConversion = parseInt(movie.metascore)
    metaScores.push(numConversion)
  }
  //declare variable to store the highest metascore.
  //use Math.max() method to find the largest number in the array
  let highestScore = Math.max(...metaScores)
  
  return highestScore
}
/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  //if the inputted `movies` array is empty, return 0
  if(movies.length === 0){
    return 0
  }

  //declare empty array to accumulate imdb ratings into
  let imdbRatings = []

  for(const movie of movies){
    let numConversion = parseFloat(movie.imdbRating)
    imdbRatings.push(numConversion)
  }

  //add all of the numbers in the imdbRatings array up.
  let sum = 0
  for(const num of imdbRatings){
    sum += num
  }

  let average = sum / imdbRatings.length

  return average

}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  // You’re going to need a structure that changes based on the rating types within the given object. 
  // At the end, you’ll return an object with only the rating types (and their counts) which are included in the inputted object. 

  //if the inputted `movies` array is empty, return an empty object.
  if(movies.length === 0){
    return {}
  }

  //loop through the array of movies, and update the count for that type of rating as you go through the array.

  //create a number type variable for each of the rating categories, to be updated as we go through the array.
  
  let gRated = 0
  let pgRated = 0
  let pg13 = 0


  for(const movie of movies){
    if(movie.rated === "G"){
      gRated += 1
    }else if(movie.rated === "PG"){
      pgRated += 1
    }else if(movie.rated === "PG-13"){
      pg13 += 1
    }
  }

  let accumulatorObj = {}
  if(movies.includes(gRated)){
    accumulatorObj.push
  }


  return {G: gRated, PG: pgRated, "PG-13": pg13}
  
  
}
//console.log(countByRating(movies))
/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  //create an empty array to store the imdbIDs
  let imdbIDs = []
  //loop through the movies array to access the imdbIDs
  for(const movie of movies){
    imdbIDs.push(movie.imdbID)
  }

  //if the inputted `movies` array is empty OR the ID does not many any movie, return null
  if(movies.length === 0 || (!imdbIDs.includes(id))){
    return null
  }
  
  for(let i = 0; i< movies.length; i++){
    if(movies[i].imdbID === id){
      return movies[i]
    }
  }
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  //create an empty array where movies that contain the inputted genre can be accumulated
  let matchingMovies = []

  //loop through the array, making sure to run the .toLowerCase() method on the genres from the object, and the inputted genre
  for(const movie of movies){
    if(movie.genre.toLowerCase().includes(genre.toLowerCase())){
      matchingMovies.push(movie)
    }
  }
  return matchingMovies

}
/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  //the release date format in `movies` array is as follows: "03 Nov 2015"
  //the plan is to convert it to an array of strings, then convert the third element into a number. 
  

  let yearsList = []

  for(const movie of movies){
    let arr = movie.releasedOnDVD.split(' ')
    let releaseYear = parseInt(arr[2])
    yearsList.push(releaseYear)
  }

  let matchingMovies = []

  for(let i = 0; i < yearsList.length; i++){
    if(yearsList[i] <= year){
      matchingMovies.push(movies[i])
    }
  }
  return matchingMovies
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies){
  if(!movies.length){
    return null
  }
  let boxOfficeNumbers = []
  for(const movie of movies){
    let conversion = parseFloat(movie.boxOffice)
    boxOfficeNumbers.push(conversion)
  }
}
// getBiggestBoxOfficeMovie(movies)


// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
