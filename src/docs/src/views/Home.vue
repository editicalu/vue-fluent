<template>
  <div>
    <h1 class="title">Vue-Fluent</h1>
    <div class="box">
      <p>This library is based on <a
        href="//buefy.github.io/"
        target="_blank">Buefy</a> and extends its behavior using <a
          href="//mubaidr.js.org/bulma-fluent/#/"
          target="_blank">Bulma-Fluent</a> theme and other customizations to integrate <a
            href="//fluent.microsoft.com/"
            target="_blank">fluent design principals</a>.
            This means that you get all the components and features from the Buefy and you can use official <a
              href="//buefy.github.io/documentation"
              target="_blank">Buefy documentation to get started</a>.
      </p>
    </div>

    <div class="notification is-info">All credits to <a href="//github.com/buefy/buefy#collaborators">Buefy Collaborators</a> for implementing these beautiful components. </div>

    <h1 class="title">Getting started</h1>

    <hr>

    <div class="content">
      <p>
        You can either:
      </p>
      <ol>
        <li>
          use
          <strong>npm</strong> to install the
          <em>vue-fluent</em> package
        </li>
        <li>
          use
          <strong>CDN</strong>
        </li>
        <li>
          use the
          <strong>GitHub repository</strong> to get the latest development version
        </li>
      </ol>
      <ol class="padded-list">
        <li>
          <span class="title is-5">Use npm:
          </span>
          <p>
            <a href="https://nodei.co/npm/vue-fluent/"><img src="https://nodei.co/npm/vue-fluent.png?compact=true"></a>
          </p>
          <p>
            <pre>
              <code class="language-bash">
npm install vue-fluent --save</code>
            </pre>
            and then import in your project:
            <pre>
              <code class="language-js">
import Vue from 'vue'
import VueFluent from 'vue-fluent'
import 'vue-fluent/dist/vue-fluent.css'

Vue.use(VueFluent)
</code>
            </pre>
          </p>
        </li>
        <li>
          <span class="title is-5">CDN link</span>
          <p>
            <a href="https://unpkg.com/vue-fluent/dist/">unpkg.com/vue-fluent</a>
          </p>
        </li>
        <li>
          <span class="title is-5">
            Download from the repository:
          </span>
          <p>
            <a href="https://raw.githubusercontent.com/mubaidr/vue-fluent/master/dist/">https://github.com/mubaidr/vue-fluent/tree/master/dist</a>
          </p>
        </li>
      </ol>
    </div>

    <div class="content">
      <h2 class="subtitle is-3">Customize</h2>
      <p>Simply set your own Sass variables before importing vue-fluent.</p>
      <p>
        <pre>
            <code class="language-sass">
// Set your brand colors
$primary: #8A4D76
$info: #FA7C91
$success: #757763
$warning: yellow
$danger: red
$light: #ccc
$dark: #444

// Update font family
$family-sans-serif: "Calibri", "Arial"

// Import the vue-fluent
@import 'vue-fluent/src/lib/index.sass'
        </code></pre>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.padded-list li {
  padding: 1em 0;
}
</style>
