<template>
  <div class="card">
    <div class="card-body">
      <component :is="typeOfItem" :item="item"></component>
    </div>
    <div class="card-footer">
      <button class="btn btn-danger" @click="removeFromCartFunction(item)">Remove</button>
    </div>
  </div>
</template>

<script>
import Book from "./Book";
import Movie from "./Movie";
import Album from "./Album";

export default {
  name: "BagItem",
  components: {
    Book,
    Movie,
    Album
  },
  props: {
    item: Object,
    removeFromCartFunction: Function,
  },
  computed: {
    typeOfItem(){
      return this.item.constructor.name;
    }
  },
}
</script>

<style scoped>

</style>