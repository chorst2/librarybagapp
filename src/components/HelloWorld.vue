<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{book.title}}</p>
    <book-component :item="book"></book-component>
  </div>
</template>

<script>
import {Book as BookModel} from "../models/LibraryItems";
import BookComponent from "./Book";

export default {
  name: 'HelloWorld',
  components: {
    BookComponent
  },
  data(){
    return {
      book: new BookModel('After', 'Romance', 250),
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
