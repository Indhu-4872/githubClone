import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: 'complex',
    user: {

    },
    repos: [{

    }]
  },
  getters: {
    getUserState (state) {
      return state.user
    },
    getReposState (state) {
      return state.repos
    },
    getUsernameState (state) {
      return state.username
    }
  },
  mutations: {
    setSearchInput (state, username) {
      state.username = username
    }
  },
  actions: {
    getUser ({ state }) {
      // const self = this
      console.log('userprofile')
      //   this.username = this.searchInput
      axios.get('https://api.github.com/users/' + state.username)
        .then(function (response) {
          console.log('profile details')
          state.user = response.data
          console.log(response.data)
        })
    },
    getRepos ({ state }) {
      // const self = this
      console.log('repossss')
      axios.get('https://api.github.com/users/' + state.username + '/repos')
        .then(function (response) {
          state.repos = response.data
          console.log(response.data)
        })
    }
  },
  modules: {
  }
})
