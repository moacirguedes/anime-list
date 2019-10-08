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
    <b-card-text>{{ description }}</b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    img: String
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