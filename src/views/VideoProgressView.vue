<template>
  <main>
    <h1>Coming soon!</h1>
  </main>
</template>

<style lang="css" scoped>
  main {
    padding-top: 10vh;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .pfp {
    height: 2in;
    border-radius: 50%;
  }
  .intro-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 600px) {
    .links {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
