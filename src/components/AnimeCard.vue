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
    <b-card-text>
      {{ description }}
      <br />
      Release date: {{ releaseDate | date }}
      <br />
      Episodes: {{ episodes !== null ? episodes : 'unknown' }}
    </b-card-text>
    <footer>
      <b-button variant="outline-primary">Button</b-button>
    </footer>
    <br />
  </b-card>
</template>

<script>
import moment from "moment";

export default {
  props: {
    name: String,
    description: String,
    releaseDate: String,
    episodes: Number,
    img: String
  },
  data() {
    return {};
  },
  filters: {
    date(value) {
      return moment(value).format("DD/MM/YYYY");
    }
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