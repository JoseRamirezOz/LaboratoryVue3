const vm = Vue.createApp({
    data() {
      return {
        message: 'Experimentos con VUE3',
        counter:0
      }
    },
    methods:{
        increment(){
          this.counter++
        }
    },
    template:
      `
        <h1>{{message}}</h1>
        <button v-on:click="increment">{{counter}}</button>
      `
}).mount('#app')