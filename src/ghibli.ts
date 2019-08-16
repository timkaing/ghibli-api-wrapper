/** API CONNECTIONS */

/** Imports 'got' (npm), a human-friendly and powerful HTTP request library */
const got = require('got');

/** GET Request to obtain all of the films from the API in JSON format */
async function getFilms() {
    try {
        const filmJSON = await got('https://ghibliapi.herokuapp.com/films')
        return (JSON.parse(filmJSON.body.toString()))
    } catch (error) {
        console.log(error.response.body);
    }
}

/** HELPER FUNCTIONS */

/**
 * Capitalizes the first letter of a string
 * 
 * @param {string} string The string to be manipulated
 * @returns {string} The string with the first character capitalized
 */
const capitalizeFirstLetter = (string: string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

/**
 * Converts a string into titlecase
 * 
 * @param {string} string The string to be manipulated
 * @returns {string} The string in titlecase
 */
const titleCase = (string: string) => {
    return string.split(" ").map(x => capitalizeFirstLetter(x)).join(" ");
}

/** CORE FUNCTIONS */

/**
 * Filters all films based on a given director.
 * 
 * @param {number} director The director of the film
 * @returns {object} The film(s) directed by the given director
 */
export const filterDirector = async (director: string): Promise<any> => {
    director = titleCase(director)
    const filmJSON = await getFilms()
    console.log(filmJSON.filter((film) => {
        return film.director === director
    }))
}

/**
 * Filters all films based on a given producer.
 * 
 * @param {number} producer The producer of the film
 * @returns {object} The film(s) produced by the given producer
 */
 export const filterProducer = async (producer: string): Promise<any> => {
    producer = titleCase(producer)
    const filmJSON = await getFilms()
    return filmJSON.filter((film) => {
        return film.producer === producer
    })
}

/**
 * Filters all films based on the year it was released.
 * 
 * @param {string} releaseDate The year the film was released
 * @returns {object} The film(s) released in the given year
 */
 export const filterRelease = async (releaseDate: string): Promise<any> => {
    const filmJSON = await getFilms()
    console.log(filmJSON.filter((film) => {
        return film.release_date === releaseDate
    }))
}

/**
 * Filters all films that are atleast a a given rating (out of 100).
 * 
 * @param {string} rt_score The minimum score of a film to return
 * @returns {object} The film(s) that have a score of at least rt_score
 */
 export const filterRanking = async (rt_score: string): Promise<any> => {
    const filmJSON = await getFilms()
    console.log(typeof((filmJSON.filter((film) => {
        return film.rt_score >= rt_score
    }))))
    console.log(filmJSON.filter((film) => {
        return film.rt_score >= rt_score
    }))
}

// filterProducer("Hayao Miyazaki").then((arr)=>console.log(arr))