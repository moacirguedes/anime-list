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
                    <br />
                    <br />
                    <br />
                    <h5>
                      <p
                        v-if="anime.title_english !== null"
                      >English title: {{ anime.title_english }}</p>
                      <p>Status: {{ anime.status }}</p>
                      <p>Aired: {{ anime.aired.string }}</p>
                      <p>Episodes: {{ anime.episodes !== null ? anime.episodes : 'unknown' }}</p>
                      <p>Duration: {{ anime.duration }}</p>
                      <p>
                        Genres:
                        <span
                          v-for="(genre, index) in anime.genres"
                          v-bind:key="genre.mal_id"
                        >
                          <span v-if="index !== last">{{ genre.name + ", "}}</span>
                          <span v-else>{{ genre.name }}</span>
                        </span>
                      </p>
                    </h5>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
          <div class="image-container">
            <div
              class="image-item"
              v-for="(picture, index) in animePictures.pictures"
              v-bind:key="index"
            >
              <b-img :src="picture.small"></b-img>
            </div>
          </div>
        </div>
        <br />
        <br />
        <b-form-checkbox
          v-model="checked"
          switch
          size="lg"
          :disabled="updatingFav"
          @change="update"
        >Favorite</b-form-checkbox>
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
      loading: true,
      checked: "",
      id: "",
      updatingFav: false
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

      AnimeService.getFavorites().then(response => {
        const id = response.findIndex(f => f.mal_id == this.$route.params.id);
        if (id != -1) {
          this.checked = true;
          this.id = id;
        }
      });
    });

    AnimeService.getAnimePictures(this.$route.params.id).then(response => {
      this.animePictures = response;
    });
    this.loading = false;
  },
  methods: {
    update() {
      this.updatingFav = true;
      if (this.checked) {
        //MONTAR O OBJETO AQUI E ADD
      } else {
        //MANDAR O DELETAO AQUI
      }
      this.updatingFav = false;
    }
  }
};
</script>

<style>
.image-container {
  height: 330px;
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
}

.image-item {
  position: relative;
  display: inline-block;
  margin: 10px 70px;
  box-shadow: 2px 2px 4px #bbb;
  border-top-right-radius: 4px;
  width: 116px;
  height: 158px;
  vertical-align: bottom;
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
}

.image-item:first-of-type {
  margin-left: -10px;
}
</style>