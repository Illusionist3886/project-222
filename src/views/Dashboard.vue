<template>

  <section class="login">
    <div id="app">
      <p>{{info}}</p>
      <div v-if="status">
        <div v-for="item in info" :key="item.asset_id" class="card" style="width: 18rem;" >
        <!-- <img class="card-img-top" :src="'https://media.wax.io/'+item.data.img" alt="Card image cap"> -->
        <img class="card-img-top" :src="getImgUrl(item.data.img)">
        <div class="card-body">
          <h5 class="card-title card-tx">{{item.data.name}}</h5>
          <small>{{item.data.album}}</small>
          <p class="card-text card-tx">{{item.data.legal}}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
      <div v-else></div>
    </div>
  </section>

</template>

<script lang="js">
import axios from 'axios'
import router from '../router'

export default {
  name: 'login',
  data () {
    return {
      info: null,
      status: false
    }
  },
  mounted () {
    if(!localStorage.getItem('wax_user')) {
        router.push('/login')
    }
    axios
      .get(`https://wax.api.atomicassets.io/atomicassets/v1/assets?owner=${localStorage.getItem('wax_user')}&page=1&limit=10000&order=desc`)
      .then(response => {
        let res = response['data']
        if(res['success']) {
          this.info = res['data']
          this.status = true
        } else {
          this.info = []
          this.status = false
        }
        
      })
  },
  methods: {
    getImgUrl(pet) {
        // var images = require.context('https://media.wax.io/', false, /\.png$/)
        // return images('./' + pet + ".png")
        return 'https://media.wax.io/' + pet;
    }
  }

}
</script>

<style scoped>
.card-tx{
  color: #000;
}

</style>
