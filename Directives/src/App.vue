<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <div v-text="'Some text'"></div>
        <div v-html="'<strong>Some Strong text</strong>'"></div>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <div v-highlight="'green'">Custom Directive with value</div>
        <div v-highlight:background="'green'">Custom directive with value & argument</div>
        <div v-highlight:background.delayed="'red'">Custom directive with value & argument & Modifier</div>
        <hr>
        <div v-local-highlight:background.delayed="'red'">Custom Local directive with value & argument & Modifier</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {     ///// local registration
    "local-highlight": {
      bind(el, binding, vnode) {
        var delayed = 0;
        if (binding.modifiers["delayed"]) {
          delayed = 3000;
        }
        setTimeout(() => {
          if (binding.arg == "background")
            el.style.backgroundColor = binding.value;
          else el.style.color = binding.value;
        }, delayed);
      }
    }
  }
};
</script>

<style>
</style>
