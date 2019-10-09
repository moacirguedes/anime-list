<template>
  <div>
    <b-spinner v-if="loading" label="Loading..."></b-spinner>

    <b-container v-else>
      <b-jumbotron :header="anime.title" :lead="anime.synopsis">
        <div>
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="3">
                <b-card-img :src="anime.image_url" img-width="225" img-height="350"></b-card-img>
              </b-col>
              <b-col>
                <b-card-body>
                  <b-card-text>
                    <p>English title: {{ anime.title_english }}</p>
                    <p>Status: {{ anime.status }}</p>
                    <p>Aired: {{ anime.aired.string }}</p>
                    <p>Episodes: {{ anime.episodes !== null ? anime.episodes : 'unknown' }}</p>
                    <p>Duration: {{ anime.duration }}</p>
                    <p>
                      Genres:
                      <span v-for="(genre, index) in anime.genres" v-bind:key="genre.mal_id">
                        <span v-if="index !== last">{{ genre.name + ", "}}</span>
                        <span v-else>{{ genre.name }}</span>
                      </span>
                    </p>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
import * as AnimeService from "../services/AnimeService";

export default {
  data() {
    return {
      anime: [],
      animePictures: [],
      animeVideos: [],
      loading: true
    };
  },
  computed: {
    last() {
      return Object.keys(this.anime.genres).length - 1;
    }
  },
  mounted() {
    AnimeService.getAnime(this.$route.params.id).then(response => {
      if (response === undefined) this.$router.push("/");
      this.anime = response;
    });

    AnimeService.getAnimePictures(this.$route.params.id).then(response => {
      this.animePictures = response;
    });

    AnimeService.getAnimeVideos(this.$route.params.id).then(response => {
      this.animeVideos = response;
    });

    this.loading = false;
  }
};
</script>