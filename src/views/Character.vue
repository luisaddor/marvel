<template>
  <div class="about" :v-if="character">
    <b-jumbotron
      :class="'jumbotron--hero'"
      :header="character.name"
      text-variant="light"
    >
      <p>{{character.description}}</p>

      <img class="jumbotron__bg" src="https://comicvine1.cbsistatic.com/uploads/original/13/139366/2692226-avenge_all.jpg" alt="bakcground marvel x dc comics" />
    </b-jumbotron>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Character',
  computed: {
    ...mapGetters({
      character: 'GET_CHARACTER',
    }),
  },
  created() {
    const route = this.$route;

    this.$store.dispatch({
      type: 'UPDATE_CHARACTER',
      id: route.params.id,
    });
  },
};
</script>
