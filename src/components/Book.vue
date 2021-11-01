<template>
  <b-card-body>
    <b-col md="6">
      <img :src="item.artworkUrl60" alt="Card image" class="mb-3 book">
    </b-col>
    <b-col md="6">
      <b-card-text>
        <h3>{{item.trackName}}</h3>
        <p>Author: {{item.artistName}}</p>
        <div v-if="showExtra">
        <p v-if="item.description">Description: {{item.description}}</p>
        </div>
      </b-card-text>
    </b-col>
  </b-card-body>
</template>

<script>
import {Book} from "../models/LibraryItems";

export default {
  name: "Book",
  props: {
    item: Book,
    showExtra: {
      type: Boolean,
      default: true,
    }
  },
}
</script>

<style scoped>

</style>