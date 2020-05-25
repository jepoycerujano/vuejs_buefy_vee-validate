<template>
  <div class="container is-fullhd" id="app">
    <link
      rel="stylesheet"
      href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css"
    />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" />
    <section>
      <b-navbar type="is-light" fixed-top>
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img
              src="./assets/jcc_logo.png"
              alt="Lightweight UI components for Vue.js based on Bulma"
            />
          </b-navbar-item>
        </template>
        <template slot="start">
          <b-navbar-item tag="router-link" :to="{ path: '/hauler' }">Hauler</b-navbar-item>
        </template>

        <template slot="end">
          <b-navbar-item tag="div">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">Log in</a>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
    </section>

    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import Beufy from "buefy";
import "buefy/dist/buefy.css";
import moment from "moment";
Vue.use(Beufy);

Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.toUpperCase();
});

Vue.filter("YearMonthDay", function(value) {
  if (!value) return;
  return moment(String(value)).format("YY-MM-DD");
});

Vue.filter("HHmm", function(value) {
  if (!value) return;
  return moment(String(value)).format("HH:mm");
});

Vue.filter("JoinArray", function(value) {
  if (!value) return;
  return value.join(" ");
});

Vue.filter("ComConvert", function(value) {
  if (!value) return;
  const newCOT = value.map(element => {
    let vol = parseInt(element.volume) / 1000;
    return vol;
  });
  return newCOT.join("-");
});

export default {
  name: "app",
  template: ""
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
