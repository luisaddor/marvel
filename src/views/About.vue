<template>
  <div class="about">
    <h1>This is an about page</h1>

    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        Some quick example.
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>

    <b-button>Teste</b-button>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>
