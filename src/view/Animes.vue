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
            :anime="anime"
          />
          <br />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AnimeCard from "../components/AnimeCard";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    AnimeCard
  },
  data() {
    return {
      seasonOptions: [
        { value: "summer", text: "Summer" },
        { value: "spring", text: "Spring" },
        { value: "fall", text: "Fall" },
        { value: "winter", text: "Winter" }
      ]
    };
  },
  computed: {
    year: {
      get() {
        return this.$store.state.year;
      },
      set(value) {
        this.setYear(value);
      }
    },
    season: {
      get() {
        return this.$store.state.season;
      },
      set(value) {
        this.setSeason(value);
      }
    },
    ...mapGetters(["animes", "loading"])
  },
  methods: {
    ...mapActions(["getAnimes", "setYear", "setSeason"])
  },
  mounted() {
    this.getAnimes();
  }
};
</script>
