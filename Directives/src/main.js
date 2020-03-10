import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {   //// global registration
  bind(el, binding, vnode) {
    var delayed = 0;
    if(binding.modifiers['delayed']) {
      delayed = 3000;
    }
    setTimeout(() => {
      if(binding.arg == 'background')
      el.style.backgroundColor = binding.value;
      else
      el.style.color = binding.value;
    }, delayed);
  },
  inserted(el, binding, vnode, oldVnode) {

  },
  update(el, binding, vnode, oldVnode) {

  },
  componentUpdated(el, binding, vnode, oldVnode){

  },
  unbind(el, binding, vnode, oldVnode){

  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
