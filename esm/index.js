/** API CONNECTIONS */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;
exports.__esModule = true;
/** Imports 'got' (npm), a human-friendly and powerful HTTP request library */
var got = require('got');
/** GET Request to obtain all of the films from the API in JSON format */
function getFilms() {
    return __awaiter(this, void 0, void 0, function () {
        var filmJSON, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, got('https://ghibliapi.herokuapp.com/films')];
                case 1:
                    filmJSON = _a.sent();
                    return [2 /*return*/, (JSON.parse(filmJSON.body.toString()))];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1.response.body);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
/** HELPER FUNCTIONS */
/**
 * Capitalizes the first letter of a string
 *
 * @param {string} string The string to be manipulated
 * @returns {string} The string with the first character capitalized
 */
var capitalizeFirstLetter = function (string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
};
/**
 * Convers a string into titlecase
 *
 * @param {string} string The string to be manipulated
 * @returns {string} The string in titlecase
 */
var titleCase = function (string) {
    return string.split(" ").map(function (x) { return capitalizeFirstLetter(x); }).join(" ");
};
/** CORE FUNCTIONS */
/**
 * Filters all films based on a given director.
 *
 * @param {number} director The director of the film
 * @returns {object} The film(s) directed by the given director
 */
exports.filterDirector = function (director) { return __awaiter(_this, void 0, void 0, function () {
    var filmJSON;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                director = titleCase(director);
                return [4 /*yield*/, getFilms()];
            case 1:
                filmJSON = _a.sent();
                console.log(filmJSON.filter(function (film) {
                    return film.director === director;
                }));
                return [2 /*return*/];
        }
    });
}); };
/**
 * Filters all films based on a given producer.
 *
 * @param {number} producer The producer of the film
 * @returns {object} The film(s) produced by the given producer
 */
exports.filterProducer = function (producer) { return __awaiter(_this, void 0, void 0, function () {
    var filmJSON;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                producer = titleCase(producer);
                return [4 /*yield*/, getFilms()];
            case 1:
                filmJSON = _a.sent();
                return [2 /*return*/, filmJSON.filter(function (film) {
                        return film.producer === producer;
                    })];
        }
    });
}); };
/**
 * Filters all films based on the year it was released.
 *
 * @param {string} releaseDate The year the film was released
 * @returns {object} The film(s) released in the given year
 */
exports.filterRelease = function (releaseDate) { return __awaiter(_this, void 0, void 0, function () {
    var filmJSON;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getFilms()];
            case 1:
                filmJSON = _a.sent();
                console.log(filmJSON.filter(function (film) {
                    return film.release_date === releaseDate;
                }));
                return [2 /*return*/];
        }
    });
}); };
/**
 * Filters all films that are atleast a a given rating (out of 100).
 *
 * @param {string} rt_score The minimum score of a film to return
 * @returns {object} The film(s) that have a score of at least rt_score
 */
exports.filterRanking = function (rt_score) { return __awaiter(_this, void 0, void 0, function () {
    var filmJSON;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getFilms()];
            case 1:
                filmJSON = _a.sent();
                console.log(typeof ((filmJSON.filter(function (film) {
                    return film.rt_score >= rt_score;
                }))));
                console.log(filmJSON.filter(function (film) {
                    return film.rt_score >= rt_score;
                }));
                return [2 /*return*/];
        }
    });
}); };
// filterProducer("Hayao Miyazaki").then((arr)=>console.log(arr))
