<template>
  <div>
    <b-form @submit.prevent="searchMedia()">
      <b-row style="padding: 20px">
      <b-form-input size="sm" class="mr-sm-2" type="text" style="width: 25%"
                    placeholder="Search ITunes Music" v-model="searchTerm"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit" style="width: 5%; padding: 10px">Submit</b-button>
      </b-row>
    </b-form>

    <b-row v-if="searching" class="justify-content-sm-center my-4">
      <b-col sm="6">
        <b-alert show variant="warning">Searching...</b-alert>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import LibraryCollection from "../models/LibraryCollection";
// import Library from "./Library";

export default {
  name: "Search",
  data() {
    return {
      searchTerm: '',
      searching: false,
    }
  },
  props: {
    addResultsMethod: Function,
    clearLibraryMethod: Function,
  },

  // TODO: cards do not pop up for any new searches

  methods: {
    searchMedia() {
      // prepare and perform search
      if(this.searchTerm){
        // clear results
        this.searchResults = new LibraryCollection();
        this.clearLibraryMethod();

        // display message
        this.searching = true;

        // build request arguments
        let url = 'https://itunes.apple.com/search';
        let config = {
          params: {
            term: this.searchTerm,
            limit: 10,

          },
        }


        // execute ajax request using promises
        axios.get(url, config)
            .then((response) => {
              //response is headers and data
              console.log('AJAX RESPONSE', response);

              //store the results in my custom collection (array decorator) in my app
              //response.data.items is the path to get to the info (found in console)
              this.searchResults = response.data.results;

            })
            .catch((error) => {
              console.error('AJAX ERROR', error.message);


            })
            .finally(() => {
              //this will hide the searching message
              this.searching = false;

              this.addResultsMethod(this.searchResults);
            })
      }
    },
  }
}
</script>

<style scoped>

</style>