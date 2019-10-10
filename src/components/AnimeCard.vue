<template>
  <b-card
    body-class="heightSize"
    :title="anime.title"
    :img-src="anime.image_url"
    img-top
    class="mb-2"
    img-height="350"
    img-width="225"
  >
    <b-card-body>
      <b-card-text>{{ anime.synopsis }}</b-card-text>
    </b-card-body>
    <template v-slot:footer>
      <router-link :to="{ name: 'AnimePage', params: { id: anime.mal_id } }" target="_blank">
        <b-button>More info</b-button>
      </router-link>
    </template>
    <br />
  </b-card>
</template>

<script>

export default {
  props: {
    anime: Object
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