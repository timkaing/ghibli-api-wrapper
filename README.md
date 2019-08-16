# Ghibli API Wrapper
A simple API wrapper that allows one to easy filter through all of the ghibli films

Powered by janaipakos' [Studio Ghibli API](https://github.com/janaipakos/ghibliapi)

# Installation

Run the Following command in your project's directory:
```
npm install 'npm i ghibli-wrapper' --save
```
Once installed, require it on the top of your applications main point of entry (index.js):
```
require('ghibli-wrapper')
```

# Functions

This API can filter Ghibli Film's in four ways:
1. Filter by Director
2. Filter by Producer
3. Filter by Year Released
4. Filter by Rank

# Examples

## Filter by Director
Filters all films based on a given director.
```javascript
// use ghibli.filterDirector() to obtain the promise, which is then logged
ghibli.filterDirector('Hayao Miyazaki').then((arrOfFilms) => console.log(arrOfFilms))
```

## Filter by Producer
Filters all films based on a given producer.
```javascript
// use ghibli.filterProducer() to obtain the promise, which is then logged
ghibli.filterProducer('Isao Takahata').then((arrOfFilms) => console.log(arrOfFilms))
```
## Filter by Year Released
Filters all films based on the year it was released.
```javascript
// use ghibli.filterRelease() to obtain the promise, which is then logged
ghibli.filterRelease('1986').then((arrOfFilms) => console.log(arrOfFilms))
```
## Filter by Rank
Filters all films that are atleast a a given rating (out of 100).
```javascript
// use ghibli.filterRanking() to obtain the promise, which is then logged
ghibli.filterRanking('93').then((arrOfFilms) => console.log(arrOfFilms))
```