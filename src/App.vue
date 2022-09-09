<script setup>
import { onBeforeMount, onMounted } from "vue";
import router from "./router";
import { useApplicantStore } from "./stores/applicant.store";

const store = useApplicantStore();

onBeforeMount(() => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const page = params.get("page");
  if (page) {
    router.push(`/${page}`);
  }
});

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/offres">Offres</RouterLink>
        <RouterLink to="/candidat">Candidat</RouterLink>
        <RouterLink to="/espace-candidat">Mon espace</RouterLink>
        <RouterLink to="/recruteur">Recruteur</RouterLink>
        <RouterLink to="/recuperation-mot-de-passe"
          >Récup mot de passe</RouterLink
        >
      </nav>
    </div>
    <div class="profile">
      {{ store.userProfile.name }}
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
