<template>
  <MainSidebar />
</template>

<script setup lang="ts">
import { ref } from "vue";
import MainSidebar from "./components/MainSidebar.vue";

const ready = ref<boolean>(false);
</script>

<style>
html,
body,
#app {
  margin: 0 auto;
  font-family: "Nunito", sans-serif;
  background-color: #030303;
  box-sizing: border-box;
  scroll-behavior: smooth;
  width: 100%;
  height: 100%;
  display: flex;
}

input,
button,
select {
  font-family: "Nunito", sans-serif;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #2951ff;
}
::-webkit-scrollbar-track {
  background: #111;
}
::-webkit-scrollbar-corner {
  background: transparent;
}

#TOTIFY_NOTIFICATIONS div {
  font-size: 18px;
  font-weight: 700;
  font-family: "Nunito", sans-serif;
  color: #000;
  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

#TOTIFY_NOTIFICATIONS div::after {
  display: block;
  content: "(click to destroy)";
  font-size: 12px;
  font-weight: 600;
  font-family: "Nunito", sans-serif;
  color: #0a0a0a;
}

@keyframes slide-left {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
