<template>
  <div class="navbar">
    <img src="/floppy-disk-solid.svg" alt="save" @click="store.store.commit('setMainState', 0)" />
    <img src="/arrow-right-arrow-left-solid.svg" alt="request" @click="store.store.commit('setMainState', 1)" />
  </div>
  <Saves v-if="state === 0" />
  <RequestSidebar v-else-if="state === 1" />
  <Settings v-else />
</template>

<script setup lang="ts">
import Saves from "./Saves.vue";
import RequestSidebar from "./RequestSidebar.vue";
import { StoreManager } from "../helpers/storeManager";

let store = new StoreManager();
let state = store.getState("mainState");
</script>

<style scoped>
.navbar {
  width: auto;
  height: 100%;
  border-right: 2px solid #111;
  text-align: center;
  box-sizing: border-box;
}

img {
  padding: 10px;
  display: block;
  width: 24px;
  height: 24px;
  cursor: pointer;
  filter: invert(9%) sepia(43%) saturate(0%) hue-rotate(227deg) brightness(98%) contrast(91%);
  transition: 200ms;
  border-left: 2px solid transparent;
}

img:hover {
  filter: invert(26%) sepia(99%) saturate(4565%) hue-rotate(230deg) brightness(103%) contrast(103%);
  border-left: 2px solid #2951ff;
}
</style>
