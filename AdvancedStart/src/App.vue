<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="componentSelected = 'appNew'">New</button>
        <button @click="componentSelected = 'appQuote'">Quote</button>
        <button @click="componentSelected = 'appAuthor'">Author</button>
        <keep-alive>
          <component :is="componentSelected">
            <p>{{ quoteTitle }}</p>
          </component>
        </keep-alive>
        <!-- <app-quote>
                   <h2 slot="title">The Quote</h2>
                   <p>A Wonderful Quote!</p>
        </app-quote>-->
      </div>
    </div>
  </div>
</template>

<script>
import Author from "./components/Author.vue";
import New from "./components/New.vue";
import Quote from "./components/Quote.vue";
export default {
  data() {
    return {
      quoteTitle: "A Wonderful Quote!",
      componentSelected: "appQuote"
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style>
</style>
