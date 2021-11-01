<template>
  <b-card-body>
    <b-col md="6">
      <img :src="item.artworkUrl60" alt="Card image" class="mb-3 book">
    </b-col>
    <b-col md="6">
      <b-card-text>
        <h3>{{item.trackName}}</h3>
        <p>Season: {{item.collectionName}}</p>
        <div v-if="showExtra">
          <p v-if="item.primaryGenreName">Genre: {{item.primaryGenreName}}</p>
          <p v-if="item.contentAdvisoryRating">Rating: {{item.contentAdvisoryRating}}</p>
          <p v-if="item.longDescription">Description: {{item.longDescription}}</p>
          <audio :src="item.previewUrl" type="audio/x-m4a" controls ></audio>
        </div>
      </b-card-text>
    </b-col>
  </b-card-body>
</template>

<script>
import {TVShow} from "../models/LibraryItems";

export default {
  name: "TVShow",
  props: {
    item: TVShow,
    showExtra: {
      type: Boolean,
      default: true,
    }
  },
}
</script>

<style scoped>

</style>