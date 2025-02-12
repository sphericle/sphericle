<template>
  <div class="header">
    <RouterLink to="/">Home</RouterLink>
    <!-- <RouterLink to="/projects">Projects</RouterLink> -->
    <RouterLink to="/music">Music Opinions</RouterLink>
    <RouterLink to="/stormingsummit">Storming Summit Progress</RouterLink>
  </div>

  <RouterView />
</template>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-background);
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 0.2rem 0;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin-bottom: 5rem;
}
.header > a {
  border-radius: 10px;
  padding-left: 5px;
  padding-right: 5px;
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
