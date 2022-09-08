<script setup>
import { ref } from "vue";
import { useApplicantStore } from "../stores/applicant.store";

const store = useApplicantStore();

const list = ref([]);

const source = new EventSource("http://localhost:3000/events/applicant/328");

source.addEventListener("message", (message) => {
  list.value.push(message.data);
  const data = JSON.parse(message.data);
  console.log(data);
  if(data.name) {
    store.name = data.name;
  }
});

const listener = function (event) {
  const type = event.type;

  window.console.log(`${type}: ${event.data || source.url}`);

  if (type === "result") {
    source.close();
  }
};

source.addEventListener("open", listener);
source.addEventListener("error", listener);
</script>

<template>
  <main>
    {{ store.name }}
  </main>
</template>
