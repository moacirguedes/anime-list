<template>
  <div>
    <b-container>
      <b-row>
        <b-col sm="4" v-for="anime in animes" v-bind:key="anime.mal_id">
          <AnimeCard :name="anime.title" :description="anime.synopsis" :img="anime.image_url" />
          <br />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AnimeCard from "./AnimeCard";
import * as AnimeService from "../services/AnimeService";

export default {
  components: {
    AnimeCard
  },
  data() {
    return {
      animes: []
    };
  },
  mounted() {
    AnimeService.getSeason("2019", "fall").then(result => {
      this.animes = result.anime;
    });
  }
};
</script>
