<template>
  <div class="folders">
    <h1>Folders</h1>
    <hr />
    <SaveFolder v-for="f in folders" :folder="f" />
  </div>
</template>

<script setup lang="ts">
import { StoreManager } from "../helpers/storeManager";
import SaveFolder from "./SaveFolder.vue";

let store = new StoreManager();
let folders = store.getState("folders");
store.store.commit("setFolders");
</script>

<style scoped>
.folders {
  width: 300px;
  height: 100%;
  background: #0a0a0a;
  border-right: 2px solid #111;
  text-align: center;
  box-sizing: border-box;
  overflow: auto;
}

h1 {
  color: #ddd;
  margin: 0;
  margin-top: 5px;
  font-size: 24px;
  font-weight: 600;
}

hr {
  border: 2px solid #111;
  border-radius: 5px;
  width: 80%;
  margin: 5px auto;
}

button {
  outline: none;
  padding: 4px 10px 4px 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  margin: 2px;
  background: #12a354;
  cursor: pointer;
  transition: 200ms;
  border: none;
  border-radius: 5px;
}

button:hover {
  background: #1cc467;
}

.list {
  box-sizing: border-box;
  width: 100%;
}
</style>
