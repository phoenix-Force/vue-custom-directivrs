import Vue from 'vue'
import App from './App.vue'

Vue.directive('dox', {
  bind(el, binding, vnode) {
    el.style.color = 'white';
    el.style.backgroundColor = 'black';
    el.style.textAlign = 'center';
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
})
