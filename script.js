const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

if (personalMovieDB.count < 10)
{
    console.log('просмотренно мало фильмов');
}
else if ((personalMovieDB.count >= 10) && (personalMovieDB.count < 30)) 
{
    console.log('вы классический зритель');
}
else if (personalMovieDB.count >= 30)
{
    console.log('вы киноман');
}
else 
{
    console.log('Ошибка');
}


console.log(personalMovieDB);


for (let i =0; i < 2; i++)
    {
   
      const a = prompt("Один из последних просмотренных фильмов?", "");   
      const b = prompt("На сколько оцените его?", "");
      if (a != null && b != null && a != '' && b != '' && a.length < 50)
        {
          personalMovieDB.movies[a] = b;
         console.log('done');     
        }
     else 
        {
          console.log('error');
          i--;
        }

     }

// ------------------1--------------
// let i =0; 
// while (i < 2) {
//     i++;
//     const a = prompt("Один из последних просмотренных фильмов?", "");   
//     const b = prompt("На сколько оцените его?", "");
//           if (a != null && b != null && a != '' && b != '' && a.length < 50)
//           {personalMovieDB.movies[a] = b;
//           console.log('done');     
//         }
//         else {
//             console.log('error');
//             i--;
//         }
// }
// -----------------------------


//---------------------2----------
// let i =0;

// do {
//     i++;
//     const a = prompt("Один из последних просмотренных фильмов?", "");   
//     const b = prompt("На сколько оцените его?", "");
//           if (a != null && b != null && a != '' && b != '' && a.length < 50)
//           {personalMovieDB.movies[a] = b;
//           console.log('done');     
//         }
//         else {
//             console.log('error');
//             i--;}

// } while(i<2);
// ---------------------------------------



console.log(personalMovieDB.movies);

