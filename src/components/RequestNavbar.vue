<template>
  <div class="navbar">
    <p @click="selected = 0">Body</p>
    <p @click="selected = 1">Query Parameters</p>
    <p @click="selected = 2">Headers</p>
  </div>
  <RequestBody v-if="selected === 0" />
  <RequestQueryParameters v-else-if="selected === 1" />
  <RequestHeaders v-else />
</template>

<script setup lang="ts">
import { ref } from "vue";
import RequestBody from "./RequestBody.vue";
import RequestQueryParameters from "./RequestQueryParameters.vue";
import RequestHeaders from "./RequestHeaders.vue";

const selected = ref(0);
</script>

<style scoped>
.navbar {
  width: auto;
  width: 90%;
  border-bottom: 2px solid #1a1a1a;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  margin: 0px auto;
}

p {
  padding: 5px 10px 5px 10px;
  margin: 0px;
  display: inline;
  cursor: pointer;
  color: #222;
  font-size: 18px;
  font-weight: 700;
  transition: 200ms;
  border-bottom: 2px solid transparent;
}

p:hover {
  color: #2951ff;
  border-bottom: 2px solid #2951ff;
}
</style>
