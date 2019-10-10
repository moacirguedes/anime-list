import Vue from 'vue'
import Vuex from 'vuex'
import * as AnimeService from "./services/AnimeService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    animes: [],
    loading: true,
    year: '2019',
    season: 'winter',
    favorites: [],
    loadingFavorites: true
  },
  mutations: {
    getAnimes(state) {
      state.loading = true;
      AnimeService.getSeason(state.year, state.season).then(result => {
        state.animes = result.anime;
        state.loading = false;
      });
    },
    setYear(state, payload) {
      state.year = payload;
    },
    setSeason(state, payload) {
      state.season = payload;
    },
    getFavorites(state) {
      state.loadingFavorites = true;
      AnimeService.getFavorites().then(result => {
        state.favorites = result;
        state.loadingFavorites = false;
      });
    }
  },
  getters: {
    animes: state => state.animes,
    loading: state => state.loading,
    year: state => state.year,
    season: state => state.season,
    favorites: state => state.favorites,
    loadingFavorites: state => state.loadingFavorites
  },
  actions: {
    getAnimes: ({
      commit
    }) => commit('getAnimes'),
    setYear: ({
      commit
    }, payload) => commit('setYear', payload),
    setSeason: ({
      commit
    }, payload) => commit('setSeason', payload),
    getFavorites: ({
      commit
    }) => commit('getFavorites')
  }
})