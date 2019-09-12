<template>
  <div id="app">
    <h2 v-dox>Hawk</h2>
    <input v-paradox:bold="'blue'" v-model = "txt" type = "text" name="" id="">
    <h2>{{txt | doxy}}</h2>
    <ul>
      <li :key = "index" v-for = "(p,index) in ftxt" >{{p}}</li>

    </ul>

  </div>
</template>

<script>

export default {
  data:()=>{
    return{
      txt:'hey',
      arr:['Apple','mango','berry','banana']
    }
  },

  directives:{
    paradox(el,binding,vnode){
      // el.style.color="red";
      el.style.color = binding.value;
      if(binding.arg=='bold'){
        el.style.fontWeight='bold';
      }
      // if(binding.modifiers == '')
    }
  },
  filters:{
    doxy(value){
      return value.toUpperCase();
    },
    computed:{
      ftxt:function(){
        return (this.arr.filter((element)=>{
          return (element.match(this.txt));
        }));

      }
    }
  }


}
</script>

<style lang="scss">

</style>
