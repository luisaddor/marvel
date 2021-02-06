<template>
  <div id="app">
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
    >
      <b-navbar-brand to="/">
        <img src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png" width="100" alt="marvel-logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">
            Home
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view/>
  </div>
</template>

<style lang="scss">
  body {
    background-color: #444 !important;
  }
</style>
