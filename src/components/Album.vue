<template>
  <b-card-body>
    <b-col md="6">
      <img :src="item.artworkUrl60" alt="Card image" class="mb-3 book">
    </b-col>
    <b-col md="6">
      <b-card-text>
        <h3>{{item.collectionName}}</h3>
        <p>Artist: {{item.artistName}}</p>
        <div v-if="showExtra">
        <p>Track Count: {{item.trackCount}}</p>
        <p v-if="item.contentAdvisoryRating">Rating: {{item.contentAdvisoryRating}}</p>
        <p v-if="item.primaryGenreName">Genre: {{item.primaryGenreName}}</p>
        </div>
      </b-card-text>
    </b-col>
  </b-card-body>
</template>


<script>
import {Album} from "../models/LibraryItems";

export default {
  name: "Album",
  props: {
    item: Album,
    showExtra: {
      type: Boolean,
      default: true,
    }
  },
}
</script>

<style scoped>

</style>