<script>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  // 元件宣告
  components: {
    RouterLink,
    RouterView
  },
  data() {
    return {
      HelloWorld,

    }
  },
}

</script>

<template>
  <header class="w-[100vw] flex bg-[#ffa] p-0">
    <RouterLink to="/" class="text-[red]">
      <img src="./assets/img/generic/logoTest.png" alt="LOGO" class="w-[200px] inline">
    </RouterLink>


    <nav>
      <RouterLink to="/about" class="text-[red]">
        關於我們
      </RouterLink>
      <RouterLink to="/teacher" class="text-[red]">
        師資介紹
      </RouterLink>
      <RouterLink to="/courseInformation" class="text-[red]">
        課程資訊
      </RouterLink>
      <RouterLink to="/studentWork" class="text-[red]">
        學生作品
      </RouterLink>
      <RouterLink to="/admissionList" class="text-[red]">
        歷年榜單
      </RouterLink>
      <RouterLink to="/connection" class="text-[red]">
        聯絡資訊
      </RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>

  </footer>
</template>

<!-- <style scoped>
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
</style> -->
