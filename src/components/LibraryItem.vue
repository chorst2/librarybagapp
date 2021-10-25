<template>
  <div class="card">
    <div class="card-body">
      <component :is="typeOfItem" :item="item"></component>
    </div>
    <div class="card-footer">
      <button class="btn btn-secondary" v-if="item.isAvailable()" @click="item.checkOut()">Check Out</button>
      <button class="btn btn-secondary" v-else @click="item.checkIn()">Check In</button>
      <button class="btn btn-secondary" @click="addCartFunction(item)">Add to Cart</button>
      <button class="btn btn-danger" @click="removeFunction(item)">Remove</button>
    </div>
  </div>
</template>

<script>
import Book from "./Book";
import Movie from "./Movie";
import Album from "./Album";

export default {
  name: "LibraryItem",
  components: {
    Book,
    Movie,
    Album
  },
  props: {
    item: Object,
    removeFunction: Function,
    addCartFunction: Function,
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