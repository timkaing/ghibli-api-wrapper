const ghibli = require('./esm/index.js')

/** FILTER BY PRODUCER */
ghibli.filterDirector('Hayao Miyazaki').then((arrOfFilms) => console.log(arrOfFilms))
/** FILTER BY PRODUCER */
ghibli.filterProducer('Isao Takahata').then((arrOfFilms) => console.log(arrOfFilms))
/** FILTER BY YEAR RELEASED */
ghibli.filterRelease('1986').then((arrOfFilms) => console.log(arrOfFilms))
/** FILTER BY MINIMUM RANK */
ghibli.filterRanking('93').then((arrOfFilms) => console.log(arrOfFilms))
