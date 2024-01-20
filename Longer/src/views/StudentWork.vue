<script>
import waterColor01 from '@/assets/img/student_work/water_color/S__13918247_0.jpg';


export default {

  data() {
    return {
      studentWorks: [
        {
          skill: '素描',
          img: [
            waterColor01,

          ],

        },
        {
          skill: '水彩',
          img: [

          ],

        },
        {
          skill: '水墨',
          img: [

          ],

        },
        {
          skill: '色鉛筆類',
          img: [

          ],

        },
        {
          skill: '麥克筆類',
          img: [

          ],

        },
        {
          skill: '炭筆靜物類',
          img: [

          ],

        },
        {
          skill: '石膏素描類',
          img: [

          ],

        },
        {
          skill: '建築模型類',
          img: [

          ],

        },
        {
          skill: '兒童美術創意類',
          img: [

          ],

        },
      ],
    };
  },
  mounted() {
  //   lightbox.option({
  //   'resizeDuration': 200,
  //   'wrapAround': true
  // })
  },
};
</script>
<template lang="">
  <main>


    <section>
      <div class="box" v-for="item in studentWorks" :key="item.id">
        <div class="mask">{{item.skill}}</div>
      </div>
    </section>





  </main>
</template>
<style lang="scss" scoped>
main {
  @apply flex justify-center items-center w-full h-[1000px] pt-0 bg-MainColorBG;

  section {
    @apply flex flex-wrap gap-[15px] max-w-[810px] mx-[auto];

    .box {
      @apply flex items-center w-[260px] h-[260px] bg-[#aaf];

      .mask {
        @apply w-full py-[5px] text-center text-[#fff] bg-[#000];
        
      }
    }
  }
}
</style>
