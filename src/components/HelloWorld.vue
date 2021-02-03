<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div v-if="characters">
          <b-card
            v-for="(character, i) in characters"
            :key="i"
            :title="character.name"
            :img-src="`${character.thumbnail.path}/portrait_large.jpg`"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Some quick example.
              {{ character.name }}
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      comics: null,
    };
  },
  created() {
    this.$store.dispatch({
      type: 'UPDATE_CHARACTERS',
      limit: 10,
    });

    // this.comics = MarvelApi.getAllComics(10);

    // this.characters = MarvelApi.getAllCharacters(10);
  },
  computed: {
    ...mapGetters({
      characters: 'GET_CHARACTERS',
    }),
  },
  methods: {
    getImagem(quadrinho) {
      let test = '';

      test = `${quadrinho.thumbnail.path}/portrait_small.jpg`;

      return test;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.card img {
  max-width: 320px;
  margin: 0 auto;
  height: auto;
}
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
</style>
