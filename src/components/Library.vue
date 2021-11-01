<template>
  <div>
    <search :add-results-method="addResults" :clear-library-method="clearLibrary"></search>

    <b-button class="justify-content-sm-end" id="show-cart" v-b-modal="'cart-modal'">Cart</b-button>

<!--    TODO: fix the alert - does not display, no errors in console-->
    <b-row class="justify-content-sm-center my-4">
      <b-col sm="6">
        <b-alert
            :show="dismissCountDown"
            dismissible
            fade
            variant="warning"
            @dismiss-count-down="countDownChanged"
        >
          Item added to cart!
        </b-alert>
      </b-col>
    </b-row>

<!--    <div class="card-columns">-->
      <library-item
          v-for="item in library"
          :item="item"
          :remove-function="(item) => library.removeItem(item)"
          :add-cart-function="(item) => libraryBag.addToCart(item)"
          :show-cart-message-function="showAlert"
          :key="item.id">
      </library-item>

      <p>Checked Out: {{library.checkedOutItems().length}}</p>
<!--    </div>-->

    <library-bag :model="libraryBag"></library-bag>

  </div>
</template>

<script>
import LibraryCollection from "../models/LibraryCollection";
import {TVShow, Album, MusicVideo, Song, Movie, Book} from "../models/LibraryItems";
import LibraryItem from "./LibraryItem";
import LibraryBag from "./LibraryBag";
import LibraryBagModel from "../models/LibraryBag";
import Search from "./Search";

export default {
  name: "Library",
  components: {
    LibraryItem,
    LibraryBag,
    Search,
  },
  data() {
    return {

      library: new LibraryCollection(),

      libraryBag: new LibraryBagModel(),

      dismissSecs: 3,
      dismissCountDown: 0,

    }
  },
  methods: {

    addResults(searchResults) {
      for(let i = 0; i < searchResults.length; i++){
          if(searchResults[i].kind === 'tv-episode'){
            this.library.addItem(Object.assign(new TVShow, searchResults[i]))
          }
          else if(searchResults[i].kind === 'album'){
            this.library.addItem(Object.assign(new Album, searchResults[i]))
          }
          else if(searchResults[i].kind === 'music-video'){
            this.library.addItem(Object.assign(new MusicVideo, searchResults[i]))
          }
          else if(searchResults[i].kind === 'song'){
            this.library.addItem(Object.assign(new Song, searchResults[i]))
          }
          else if(searchResults[i].kind === 'feature-movie'){
            this.library.addItem(Object.assign(new Movie, searchResults[i]))
          }
          else if(searchResults[i].kind === 'book' || searchResults[i].kind === 'ebook'){
            this.library.addItem(Object.assign(new Book, searchResults[i]))
          }
      }
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },

    clearLibrary(){
      this.library.splice(0);
    }
  }

}
</script>

<style scoped>

</style>