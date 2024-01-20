<script>

export default {

  data() {
    return {
      
    };
  },
};
</script>
<template lang="">
  <main>
    <section>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </section>

  </main>
</template>
<style lang="scss" scoped>
  main{
    @apply w-full py-[30px] bg-MainColorBG;

    section{
      @apply flex flex-wrap gap-[30px] max-w-[810px] mx-[auto];

      .box{
        @apply w-[220px] h-[220px] bg-[#aaf];
      }
    }
  }

</style>
