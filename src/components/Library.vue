<template>
  <div>

<!--    this is the button to display your cart-->
  <b-button class="float-right" id="show-cart" v-b-modal="'cart-modal'">Cart</b-button>

    <div class="card-columns">
      <library-item
          v-for="item in library"
          :item="item"
          :remove-function="(item) => library.removeItem(item)"
          :add-cart-function="(item) => libraryBag.addToCart(item)"
          :key="item.id">
      </library-item>

      <p>Checked Out: {{library.checkedOutItems().length}}</p>
    </div>

  <library-bag :model="libraryBag"></library-bag>

  </div>
</template>

<script>
import LibraryCollection from "../models/LibraryCollection";
import {Book, Movie, Album} from "../models/LibraryItems";
import LibraryItem from "./LibraryItem";
import LibraryBag from "./LibraryBag";
import LibraryBagModel from "../models/LibraryBag";

export default {
  name: "Library",
  //this is where you list the components that you are using in the template
  components: {
    LibraryItem,
    LibraryBag
  },
  data() {
    return {
      library: new LibraryCollection()
          .addItem(new Movie('Star Wars1', 'Space Opera', 345))
          .addItem(new Movie('Star Wars2', 'Space Opera', 345))
          .addItem(new Book('After', 'Romance', 500))
          .addItem(new Book('Goosebumps','Mystery',100))
          .addItem(new Album('Better Dayz', '2Pac', 26))
          .addItem(new Album('Curtain Call', 'Eminem', 24)),

      libraryBag: new LibraryBagModel()

    }
  },

}
</script>

<style scoped>

</style>