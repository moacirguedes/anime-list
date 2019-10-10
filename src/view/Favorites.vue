<template>
  <div>
    <b-spinner v-if="loadingFavorites" label="Loading..."></b-spinner>

    <b-container v-else-if="favorites.length > 0">
      <b-row>
        <b-col sm="4" v-for="anime in favorites" v-bind:key="anime.mal_id">
          <AnimeCard
            :anime="anime"
          />
          <br />
        </b-col>
      </b-row>
    </b-container>

    <h1 v-else>Empty</h1>
  </div>
</template>

<script>
import AnimeCard from "../components/AnimeCard";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    AnimeCard
  },
  computed: {
    ...mapGetters(["favorites", "loadingFavorites"])
  },
  methods: {
    ...mapActions(["getFavorites"])
  },
  mounted() {
    this.getFavorites();
  }
};
</script>
