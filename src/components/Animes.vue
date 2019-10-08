<template>
  <div>
    <b-container>
      <span>Year: {{ year }}</span>
      <b-form-input v-model="year" type="range" min="1997" max="2019" v-on:change="getAnimes"></b-form-input>
      <b-form-select v-model="season" :options="seasonOptions" v-on:change="getAnimes"></b-form-select>
      <br />
      <br />
    </b-container>

    <b-spinner v-if="loading" label="Loading..."></b-spinner>

    <b-container v-else>
      <b-row>
        <b-col sm="4" v-for="anime in animes" v-bind:key="anime.mal_id">
          <AnimeCard
            :name="anime.title"
            :description="anime.synopsis"
            :img="anime.image_url"
            :releaseDate="anime.airing_start"
            :episodes="anime.episodes"
          />
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
      animes: [],
      loading: true,
      year: "2019",
      season: "summer",
      seasonOptions: [
        { value: "summer", text: "Summer" },
        { value: "spring", text: "Spring" },
        { value: "fall", text: "Fall" },
        { value: "winter", text: "Winter" }
      ]
    };
  },
  methods: {
    getAnimes() {
      this.loading = true;
      AnimeService.getSeason(this.year, this.season).then(result => {
        this.animes = result.anime;
        this.loading = false;
      });
    }
  },
  mounted() {
    this.getAnimes();
  }
};
</script>
