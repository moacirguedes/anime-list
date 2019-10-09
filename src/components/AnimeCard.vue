<template>
  <b-card
    body-class="heightSize"
    :title="name"
    :img-src="img"
    img-top
    class="mb-2"
    img-height="350"
    img-width="225"
  >
    <b-card-body>
      <b-card-text>{{ description }}</b-card-text>
    </b-card-body>
    <template v-slot:footer>
      <router-link :to="{ name: 'AnimePage', params: { id: id } }" target="_blank">
        <b-button>More info</b-button>
      </router-link>
    </template>
    <br />
  </b-card>
</template>

<script>
import moment from "moment";

export default {
  props: {
    name: String,
    description: String,
    img: String,
    id: Number
  },
  data() {
    return {};
  }
};
</script>

<style>
.heightSize {
  min-height: 250px;
  max-height: 250px;
  overflow: auto;
}
</style>