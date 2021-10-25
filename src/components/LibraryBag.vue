<template>
<b-modal id="cart-modal" ok-title="Check Out" title="Your Cart">
  <template v-for="item in model" >
    <bag-item
        :item="item"
        :key="item.id"
        :remove-from-cart-function="(item) => model.removeFromCart(item)"
        >
    </bag-item>

  </template>
  <template #modal-footer>
  <b-button @click="model.checkOutBag()">Check Out</b-button>
  </template>
</b-modal>

</template>

<script>
import LibraryBag from "../models/LibraryBag";
import BagItem from "./BagItem";

export default {
  name: "LibraryBag",
  components: {
    BagItem
  },
  props:{
    model:{
      type: Array,
      required: true,
    }

  },
  data() {
    return {
      libraryBag: new LibraryBag()

    }
  },
}
</script>

<style scoped>

</style>