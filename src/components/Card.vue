<template>
<main class="mainCls">
        <article class="article1">
                <div class="cardColumn">
                <div class="icon">
                    <img class="iconimg" :src="getUserState.avatar_url" alt="">
                </div>
                </div>
                <ul class="ulstyle">
                            <li class="licls">NAME: <span class="spancls">{{getUserState.name}}</span></li>
                            <li class="licls">EMAIL: <span class="spancls">{{getUserState.email}}</span></li>
                            <li class="licls">followers: <span class="spancls">{{getUserState.followers}}</span></li>
                            <li class="licls">following: <span class="spancls">{{getUserState.following}}</span></li>
                            <li class="licls">company: <span class="spancls">{{getUserState.company}}</span></li>
                            <li class="licls">location: <span class="spancls">{{getUserState.location}}</span></li>
                            <li class="licls">bio: <span class="spancls">{{getUserState.bio}}</span></li>
                        </ul>
        </article>
        <article class="article2">
            <section class="section1">
                <h2>REPOS</h2>
                <!-- <input type="text" v-model="searchInput"> -->
                <!-- <button @click="onClick"> go</button> -->
            </section>
            <section class="section2">
                    <div class="container" v-for="repo in getReposState" :key="repo.id">
                        <h6 class="heading6">{{repo.name}}</h6>
                        <p class="para">{{repo.description}}</p>
                        <ul class="ulstyle">
                            <li>language: <span class="spancls">{{repo.language}}</span></li>
                            <li>size: <span class="spancls">{{repo.size}}</span></li>
                            <li>watchers: <span class="spancls">{{repo.watchers}}</span></li>
                            <li>forks: <span class="spancls">{{repo.forks}}</span></li>
                            <li>licence: <span class="spancls">{{repo.licence}}</span></li>
                        </ul>
                    </div>
                    <!-- <div class="container">
                        <h6 class="heading6">Repo name</h6>
                        <p class="para">description</p>
                        <ul class="ulstyle">
                            <li>language: <span class="spancls">JAVA</span></li>
                            <li>size: <span class="spancls">10kb</span></li>
                            <li>watchers: <span class="spancls">30</span></li>
                            <li>forks: <span class="spancls">30</span></li>
                            <li>licence: <span class="spancls">null</span></li>
                        </ul>
                    </div><div class="container">
                        <h6 class="heading6">Repo name</h6>
                        <p class="para">description</p>
                        <ul class="ulstyle">
                            <li>language: <span class="spancls">JAVA</span></li>
                            <li>size: <span class="spancls">10kb</span></li>
                            <li>watchers: <span class="spancls">30</span></li>
                            <li>forks: <span class="spancls">30</span></li>
                            <li>licence: <span class="spancls">null</span></li>
                        </ul>
                    </div><div class="container">
                        <h6 class="heading6">Repo name</h6>
                        <p class="para">description</p>
                        <ul class="ulstyle">
                            <li>language: <span class="spancls">JAVA</span></li>
                            <li>size: <span class="spancls">10kb</span></li>
                            <li>watchers: <span class="spancls">30</span></li>
                            <li>forks: <span class="spancls">30</span></li>
                            <li>licence: <span class="spancls">null</span></li>
                        </ul>
                    </div><div class="container">
                        <h6 class="heading6">Repo name</h6>
                        <p class="para">description</p>
                        <ul class="ulstyle">
                            <li>language: <span class="spancls">JAVA</span></li>
                            <li>size: <span class="spancls">10kb</span></li>
                            <li>watchers: <span class="spancls">30</span></li>
                            <li>forks: <span class="spancls">30</span></li>
                            <li>licence: <span class="spancls">null</span></li>
                        </ul>
                    </div><div class="container">
                        <h6 class="heading6">Repo name</h6>
                        <p class="para">description</p>
                        <ul class="ulstyle">
                            <li>language: <span class="spancls">JAVA</span></li>
                            <li>size: <span class="spancls">10kb</span></li>
                            <li>watchers: <span class="spancls">30</span></li>
                            <li>forks: <span class="spancls">30</span></li>
                            <li>licence: <span class="spancls">null</span></li>
                        </ul>
                    </div> -->
            </section>
        </article>
    </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import axios from 'axios'
export default {
  data () {
    return {
    //   user: {

      //   },
      //   repos: [{
      //   }
      //   ],
      //   username: 'viveksenthil3',
    //   searchInput: ''
    }
  },
  created () {
    this.getUser()
    this.getRepos()
    //  ...mapActions(['getUser']),
    // this.getUser()
    // this.getRepos()
  },
  computed: {
    ...mapGetters(['getUserState', 'getReposState'])
  },
  methods: {
    ...mapActions(['getUser', 'getRepos'])
  }
}
</script>

<style>
.mainCls{
    display: flex;
}
.article1{
    width: 25%;
    height: 600px;
    padding: 25px 40px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    border-radius: 15px;
    box-shadow: 5px 5px 15px rgb(0,0,0,.3);
    /* overflow: hidden; */
}
.icon{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color:#DCDCDC;
    display: flex;
    justify-content: center;
    align-items: center;
    /* transition: all .8s; */
}
.iconimg{
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
.cardColumn{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
.licls{
    margin: 10px 0px;
}
.article2{
    flex-direction: row;
    width: 90%;
    height: 600px;
    padding: 25px 50px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: fit-content;
    /* border-radius: 15px; */
    /* box-shadow: 5px 5px 15px rgb(0,0,0,.3); */
    /* overflow: hidden; */
}
.section1{
    padding: 10px;
    text-align: left;
}
.section2{
    display: flex;
    flex-wrap: wrap;
    /* background-color: DodgerBlue; */
    justify-content: space-evenly;
    /* padding: 20px; */
    /* display: flex; */
    /* justify-content: center; */
    /* flex-direction: column; */
    /* background-color:red; */
    /* flex-wrap: wrap; */
    /* height: 100%; */
}
.heading6{
    margin: 3px;
    color:palevioletred;
}
.para{
    margin: 2px;
    font-size: 16px;
    color: grey;
}
.ulstyle{
    list-style: none;
    font-size: 15px;
    padding-inline-start: 0px;
    font-weight: bold;
    /* text-align: left; */
    /* margin: 0px; */
}
.spancls{
    color: grey;
}
/* .container{
    width: 100%;
    display: flex;
    flex-direction: row;
} */
.section2 > div {
    background-color: white;
    padding-left: 15px;
  width: 250px;
  margin: 10px;
  /* text-align: center; */
  /* line-height: 75px; */
  font-size: 30px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgb(0,0,0,.3);

}
</style>
