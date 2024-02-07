/* ¡Escribe tus comandos en este archivo! */

const ejercicio02 = 'SELECT * FROM movies WHERE duration > 90;';

const ejercicio03 = 'SELECT count(*) movies WHERE year >= 1930 AND year <= 1940;';
const ejercicio032 = 'SELECT count(*) movies WHERE year BETWEEN 1930 AND 1940;';

const ejercicio04 = "SELECT title FROM movies WHERE title LIKE '%til%';";

const ejercicio05 = 'SELECT title FROM movies WHERE ARRAY_LENGTH(actors, 1) = 1;';
const ejercicio052 = 'SELECT title FROM movies WHERE cardinality(actors) = 1;';

// title, [1, 5]
const queryIntermedia = 'SELECT title, UNNEST(ratings) AS val FROM movies'

// title, 1
// title, 5
const ejercicio06 = 'SELECT title, AVG(val) FROM (SELECT title, UNNEST(ratings) AS val FROM movies JOIN genre.name) sub GROUP BY title;';
// const EJEMPLO = 'SELECT title, AVG(val)'
// 'FROM (SELECT title, UNNEST(ratings), genre.name as nameG AS val FROM movies JOIN genre.name) as subQuery'
// 'sub GROUP BY title AND subQuery.nameG;';
const ejercicio062 = 'SELECT title, FLOOR(AVG(r)) FROM movies, unnest(ratings) r GROUP BY title';

const ejercicio07 = "SELECT title, actors FROM movies WHERE title LIKE '%Fast and%' AND year = 2016;";

// title, year, id
// movieId, genreId
// id, name
// pelicula, 2024, 1, 1, 5, 5, action
const peliculasDeAccion = 'SELECT title FROM movies' +
'INNER JOIN movie_genre ON movies.id = movie_genre."movieId"' + 
'INNER JOIN genres ON genres.id = movie_genre."genreId"' +
'WHERE genres.id=3;'

// movies / genres
// SELECT * FROM movies JOIN genres ON movies.genreId = genre.id // 
// SELECT * FROM movies INNER JOIN genres ON movies.genreId = genre.id // 
// SELECT * FROM movies LEFT JOIN genres ON movies.genreId = genre.id // movies
// SELECT * FROM movies RIGTH JOIN genres ON movies.genreId = genre.id // genre

module.exports = {
   ejercicio02,
   ejercicio03,
   ejercicio04,
   ejercicio05,
   ejercicio06,
   ejercicio07,
};
