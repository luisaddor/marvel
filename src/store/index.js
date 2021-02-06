import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

const urlBaseMarvel = 'https://gateway.marvel.com/v1/public/';
const apiKey = 'bd24bf30aee611c1041483ffce19cfe5';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: null,
    character: null,
  },
  getters: {
    GET_CHARACTERS(state) {
      return state.characters;
    },
    GET_CHARACTER(state) {
      return state.character;
    },
  },
  mutations: {
    CHARACTERS(state, res) {
      state.characters = res;
    },
    CHARACTER(state, res) {
      state.character = res;
    },
  },
  actions: {
    UPDATE_CHARACTERS: ({ commit }, e) => {
      const urlCharacters = `${urlBaseMarvel}characters?apikey=${apiKey}&offset=10&limit=${e.limit}`;

      axios.get(urlCharacters)
        .then((characters) => {
          commit('CHARACTERS', characters.data.data.results);
        }, (error) => {
          console.log(error);
        });
    },
    UPDATE_CHARACTER: ({ commit }, e) => {
      const urlCharacter = `${urlBaseMarvel}characters/${e.id}?apikey=${apiKey}`;

      axios.get(urlCharacter)
        .then((character) => {
          console.log(character);

          commit('CHARACTER', ...character.data.data.results);
        }, (error) => {
          console.log(error);
        });
    },
  },
});
