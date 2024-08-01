const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
  ];
  

 const dec70 = starWarsMovies.filter(movie => movie.releaseYear >= 1970 && movie.releaseYear < 1980);
 const dec80 = starWarsMovies.filter(movie => movie.releaseYear >= 1980 && movie.releaseYear < 1990);
 const dec90 = starWarsMovies.filter(movie => movie.releaseYear >= 1990 && movie.releaseYear < 2000);
 const dec00 = starWarsMovies.filter(movie => movie.releaseYear >= 2000 && movie.releaseYear < 2010);
 const dec10 = starWarsMovies.filter(movie => movie.releaseYear >= 2010 && movie.releaseYear < 2020);

 console.log("Decada de los 70'"+ dec70)
 console.log("Decada de los 80'"+ dec80)
 console.log("Decada de los 90'"+ dec90)
 console.log("Decada de los 00'"+ dec00)
 console.log("Decada de los 10'"+ dec10)
  