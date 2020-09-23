const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);


const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

console.log(personalMovieDB);

const lastMovie = prompt("Один из последних просмотренных фильмов?", ""),
      yourScore = prompt("На сколько оцените его?", ""),
      lastMovieTwo = prompt("Один из последних просмотренных фильмов?", ""),
      yourScoreTwo = prompt("На сколько оцените его?", "");
console.log(lastMovie);
console.log(yourScore);
console.log(lastMovieTwo);
console.log(yourScoreTwo);

personalMovieDB.movies[lastMovie] = yourScore;
personalMovieDB.movies[lastMovieTwo] = yourScoreTwo;

console.log(personalMovieDB.movies);

