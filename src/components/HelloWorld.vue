<template>
  <div>
    <b-jumbotron
      :class="'jumbotron--hero'"
      header="Marvel App"
      text-variant="light"
    >
      <p>Faça o login e escolha seus Heróis favoritos!</p>

      <b-button variant="primary" href="#">Cadastre-se</b-button>

      <img class="jumbotron__bg" src="https://comicvine1.cbsistatic.com/uploads/original/13/139366/2692226-avenge_all.jpg" alt="bakcground marvel x dc comics" />
    </b-jumbotron>

    <div class="container">
      <div class="row mt-4">
        <div class="col-12">
          <div v-if="characters" class="characters-wrapper">
            <b-card
              v-for="(character, i) in characters"
              :key="i"
              :title="character.name"
              :img-src="`${character.thumbnail.path}/portrait_large.jpg`"
              img-alt="Image"
              img-left
              tag="article"
              class="character-card"
            >
              <b-card-text v-if="character.description">
                {{ character.description }}
              </b-card-text>

              <b-button :to="`/character/${character.id}`" variant="primary">Ver mais</b-button>
            </b-card>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="overflow-auto">
            <b-pagination-nav
              :link-gen="linkGen"
              :number-of-pages="10"
              use-router>
            </b-pagination-nav>
          </div>
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
  },
  computed: {
    ...mapGetters({
      characters: 'GET_CHARACTERS',
    }),
  },
  methods: {
    getImagem(quadrinho) {
      const imgUrl = `${quadrinho.thumbnail.path}/portrait_small.jpg`;

      return imgUrl;
    },
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.card img {
  height: 100%;
  margin: 0 auto;
  height: auto;
}

.card {
  background-color: rgba(255, 255, 255, .7) !important;
}

.characters-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.character-card {
  width: 48%;
  margin: 1%;
}

.jumbotron__bg {
  position: absolute;
  width: 100%;
  z-index: -1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
