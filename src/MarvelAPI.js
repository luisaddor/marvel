import axios from 'axios';

const urlBaseMarvel = 'https://gateway.marvel.com/v1/public/';
const apiKey = 'bd24bf30aee611c1041483ffce19cfe5';

export default {
  getAllComics: (limit) => {
    const urlComics = `${urlBaseMarvel}comics?apikey=${apiKey}&limit=${limit}`;

    axios.get(urlComics)
      .then((comics) => {
        console.log(comics.data.data.results);

        return comics.data.data.results;
      }, (error) => {
        console.log(error);
      });
  },

  getAllCharacters: (limit) => {
    const urlCharacters = `${urlBaseMarvel}characters?apikey=${apiKey}&limit=${limit}`;

    axios.get(urlCharacters)
      .then((characters) => {
        console.log(characters.data.data.results);

        return characters.data.data.results;
      }, (error) => {
        console.log(error);
      });
  },
};
