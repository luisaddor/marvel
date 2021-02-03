import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

const urlBaseMarvel = 'https://gateway.marvel.com/v1/public/';
const apiKey = 'bd24bf30aee611c1041483ffce19cfe5';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: null,
  },
  getters: {
    GET_CHARACTERS(state) {
      return state.characters;
    },
  },
  mutations: {
    CHARACTERS(state, res) {
      console.log('mutation');
      state.characters = res;
    },
  },
  actions: {
    UPDATE_CHARACTERS: ({ commit }, e) => {
      console.log('action');

      const urlComics = `${urlBaseMarvel}characters?apikey=${apiKey}&limit=${e.limit}`;

      axios.get(urlComics)
        .then((comics) => {
          console.log(comics.data.data.results);

          commit('CHARACTERS', comics.data.data.results);
        }, (error) => {
          console.log(error);
        });
    },
  },
});
