<template>
  <div>
    <nav class="navbar is-dark is-fixed-top">
      <div class="navbar-brand">
        <router-link
          to="/"
          class="navbar-item"><img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Vue-fluent logo"
            width="112"
            height="28">
        </router-link>
        <div
          :class="{'is-active': isNavigationBarOpen}"
          class="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
          @click="toggleNavBar">
          <span/>
          <span/>
          <span/>
        </div>
      </div>

      <div
        id="navbarExampleTransparentExample"
        :class="{'is-active': isNavigationBarOpen}"
        class="navbar-menu">
        <div class="navbar-start">
          <router-link
            to="/"
            title="Getting Started"
            class="navbar-item"
            exact-active-class="is-active">
            <span>Getting Started</span>
          </router-link>
          <router-link
            to="/demo"
            title="Demo"
            class="navbar-item"
            active-class="is-active">
            <span>Demo</span>
          </router-link>
          <router-link
            to="/api"
            title="API"
            class="navbar-item"
            active-class="is-active">
            <span>API</span>
          </router-link>
          <router-link
            to="/extras"
            title="Extras"
            class="navbar-item"
            active-class="is-active">
            <span>More</span>
          </router-link>
        </div>
        <div class="navbar-end">
          <a
            href="https://github.com/mubaidr/vue-fluent"
            class="navbar-item"
            title="Github Repository"
            target="_blank">
            <span class="icon">
              <i
                class="fas fa-star"
                aria-hidden="true" />
            </span>
            <span>Github</span>
          </a>
          <a
            href="https://raw.githubusercontent.com/mubaidr/vue-fluent/master/css/bulma.min.css"
            class="navbar-item"
            title="Download"
            target="_blank">
            <span class="icon">
              <i
                class="fas fa-download"
                aria-hidden="true" />
            </span>
            <span>Download</span>
          </a>
        </div>
      </div>
    </nav>
    <section
      :class="{'is-medium': $route.name === 'home'}"
      class="hero is-dark">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            Vue Fluent
          </h1>
          <h2 class="subtitle is-4">
            Fluent Design Components for
            <a href="https://vuejs.org">Vue.js</a> based on
            <a
              href="//buefy.github.io/"
              target="_blank">Buefy</a>
            <span class="is-size-6">
              <br> inspired by
              <a
                href="https://fluent.microsoft.com"
                target="_blank">Microsoft’s Fluent Design System</a>
            </span>
          </h2>
          <br>
          <p>
            <a
              class="button is-light is-highlighted"
              href="https://github.com/mubaidr/vue-fluent"
              title="Github Repository"
              target="_blank">
              <span class="icon">
                <i
                  class="fas fa-star"
                  aria-hidden="true" />
              </span>
              <span>Star on Github</span>
            </a>
            &nbsp;
            <a
              class="button is-light"
              href="https://raw.githubusercontent.com/mubaidr/vue-fluent/master/css/bulma.min.css"
              title="Download Latest Minified Build"
              target="_blank">
              <span class="icon">
                <i
                  class="fas fa-download"
                  aria-hidden="true" />
              </span>
            </a>
          </p>
          <br>
          <p>
            <a href="https://patreon.com/mubaidr">
              <img
                src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png"
                style="height: 42px; width: auto;" >
            </a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HeaderView',
  data() {
    return {
      isNavigationBarOpen: false,
    }
  },

  methods: {
    toggleNavBar() {
      this.isNavigationBarOpen = !this.isNavigationBarOpen
    },
  },
}
</script>

<style lang="sass">
.hero-body
  transition: all 0.25s ease
</style>
