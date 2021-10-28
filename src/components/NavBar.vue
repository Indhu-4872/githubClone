<template>
  <section class="nav-wrapper">
      <div class="nav">
          <h1>GITHUB CLONE</h1>
      </div>
        <div class="searchGo">
            <input class="search" type="text" placeholder="Search" v-model="searchInput" >
            <button class="goBtn" @click="onGoClick">Go</button>
        </div>
  </section>
</template>
<script>
// import axios from 'axios'
// import Card from './Card.vue'
import { mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'NavBar',
  data () {
    return {
      searchInput: ''
    }
  },
  computed: {
    ...mapGetters(['getUsernameState'])
  },
  methods: {
    ...mapActions(['getUser', 'getRepos']),
    ...mapMutations(['setSearchInput']),

    onGoClick (e) {
      console.log('Go Button Clicked')
      this.setSearchInput(this.searchInput)
      this.getUser()
      this.getRepos()
      console.log(this.getUsernameState)
      //   self.setSearchInput = self.searchInput
    //   console.log(this.setSearchInput)
    //   self.getUserState()
    //   self.getReposState()
    //   // const self = this
      //   axios.get('https://api.github.com/users/' + this.searchInput + '/repos')
      // .then(function (response) {
      //   console.log(response.data)
      //   self.searchInput = response.data
      //   console.log('getting response from button1')
      // })
    //   alert('method is called')
    }
  }
}
</script>

<style>
.nav-wrapper {
        background-color:palevioletred;
        display: flex;
        padding: 0 20px;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        color: white;
        margin:0;
}
h1{
    color:grey;
}
.searchGo{
    justify-content: space-around;
}
.search{
    border-radius: 5px;
    border:none;
    padding: 10px;
    margin-right: 16px;
    width: 60%;
}
.goBtn{
    background-color:rgb(43, 184, 43);
    color:white;
    border:none;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px 15px;
}
</style>
