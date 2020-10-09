'use strict';


const personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    
    },

    rememberMyFilms: function() {
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

    },
        
    detectPersonalLevel: function() {
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
    },

    showMyDB: function(hidden) {
            if (!hidden) {
       console.log(personalMovieDB);
        }
       
    }, 
    writeYourGenres: function() {
        for (let i =1; i < 4; i++){
            
               let a = prompt(`Ваш любимый жанр под номером ${i}`);

            if (a != null && a != '') { 
                personalMovieDB.genres[i-1] = a;
            }
            else {i--;}
            }
            personalMovieDB.genres.forEach(function(item, i) {
               console.log (`Любимый жанр под номером ${i+1} - это ${item}`);
            });
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false; 
        } else {
             personalMovieDB.privat = true;
        } 
               
    }
    
};

//  







// Тут до этого была функция, которая 2 раза спрашивала вопрос, и делала проверку. Потом ее засунули в метод обьекта.
// function rememberMyFilms() {
//     for (let i =0; i < 2; i++)
//     {
   
//       const a = prompt("Один из последних просмотренных фильмов?", "");   
//       const b = prompt("На сколько оцените его?", "");
//       if (a != null && b != null && a != '' && b != '' && a.length < 50)
//         {
//           personalMovieDB.movies[a] = b;
//          console.log('done');     
//         }
//      else 
//         {
//           console.log('error');
//           i--;
//         }

//      }
// }

// // rememberMyFilms();


// Тут до этого была функция, которая выявляла уровень зрителя. Потом ее засунули в метод обьекта.
// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10)
//     {
//         console.log('просмотренно мало фильмов');
//     }
//     else if ((personalMovieDB.count >= 10) && (personalMovieDB.count < 30)) 
//     {
//         console.log('вы классический зритель');
//     }
//     else if (personalMovieDB.count >= 30)
//     {
//         console.log('вы киноман');
//     }
//     else 
//     {
//         console.log('Ошибка');
//     }
// }

// // detectPersonalLevel();

// Тут была функция, которая меняла метод обьекта PRIVAT на true. Потом ее засунули в метод обьекта
// function showMyDB(hidden){
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
//     }
    
// // showMyDB(personalMovieDB.privat);

// function writeYourGenres(){
// for (let i =1; i < 4; i++){
//   personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
//   }     
// };

// writeYourGenres();





// ------------------1-------------- Переписывали циклы разными способами
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


