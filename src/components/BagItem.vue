<template>
<!--   <div>-->
    <b-card>
      <component :is="typeOfItem" :item="item" :showExtra="false"></component>
      <b-card-footer>
        <button class="btn btn-danger" @click="removeFromCartFunction(item)">Remove</button>
      </b-card-footer>
    </b-card>
<!--  </div>-->
</template>

<script>
import Book from "./Book";
import Movie from "./Movie";
import Album from "./Album";
import MusicVideo from "./MusicVideo";
import Song from "./Song";
import TVShow from "./TVShow";

export default {
  name: "BagItem",
  components: {
    Book,
    Movie,
    Album,
    TVShow,
    MusicVideo,
    Song,
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