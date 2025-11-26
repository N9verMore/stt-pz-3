const rest = require('rest');
const mime = require('rest/interceptor/mime');

const request = rest.wrap(mime);

const getListOfRestEndPoint = () => request(`https://www.anapioficeandfire.com/api`)
const getBooks = () => request(`https://www.anapioficeandfire.com/api/books`)
const getHouses = () => request(`https://www.anapioficeandfire.com/api/houses`)
const getHouseAllyrion = () => request(`https://www.anapioficeandfire.com/api/houses/7`)

export {getListOfRestEndPoint, getBooks, getHouses, getHouseAllyrion}
