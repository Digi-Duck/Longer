<script>

export default {

  data() {
    return {
      studentWorks:[
      '素描',
      '水彩',
      '水墨',
      '色鉛筆類',
      '麥克筆類',
      '炭筆靜物類',
      '石膏素描類',
      '建築模型類',
      '兒童美術創意類',
      ],
    };
  },
};
</script>
<template lang="">
  <main>


    <section>
      <div class="box" v-for="item in studentWorks" :key="item.id">
        <div class="mask">{{item}}</div>
      </div>
    </section>

  </main>
</template>
<style lang="scss" scoped>
  main{
    @apply flex justify-center items-center w-full h-[1000px] pt-0 bg-MainColorBG;

    section{
      @apply flex flex-wrap gap-[15px] max-w-[810px] mx-[auto];
      .box{
        @apply flex items-center w-[260px] h-[260px] bg-[#aaf];

        .mask{
          @apply w-full py-[5px] text-center text-[#fff] bg-[rgba(0,0,0,0.7)];
        }
      }
    }
  }

</style>
