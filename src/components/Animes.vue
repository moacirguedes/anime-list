<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <AnimeCard />
        </b-col>
        <b-col>
          <AnimeCard />
        </b-col>
        <b-col>
          <AnimeCard />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AnimeCard from "./AnimeCard";

export default {
  components: {
    AnimeCard
  }
};
</script>

<style>
</style>