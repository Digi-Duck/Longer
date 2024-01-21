<script>
// 導入lightbox
import lightbox from 'lightbox2';
// 導入圖片
// import sketch01 from '@/assets/img/student_work/sketch/sketch01.jpg';
import waterColor01 from '@/assets/img/student_work/water_color/water_color_01.jpg';
import waterColor02 from '@/assets/img/student_work/water_color/water_color_02.jpg';
import waterColor03 from '@/assets/img/student_work/water_color/water_color_03.jpg';


export default {

  data() {
    return {

      studentWorks: [
        {
          skill: '素描',
          img: [
            // sketch01,
          ],

        },
        {
          skill: '水彩',
          img: [
            waterColor01,
            waterColor02,
            waterColor03,

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
    lightbox.option({
      'resizeDuration': 500,
      'wrapAround': true
    });
  }
};
</script>
<template lang="">
  <main>
  
    <section>
      <div class="box" v-for="item in studentWorks" :key="item.id">
        <a class="image-link" v-for="imgItem in item.img" :key="imgItem.id" :href="imgItem" data-lightbox="example-2" data-title="Optional caption.">
          <div class="image"  :style="{ backgroundImage: `url(${imgItem})` }"></div>
        </a>
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

      .image-link{

        &:not(:first-child){
          @apply hidden;
        }
        .image{
          @apply w-[260px] h-[260px] bg-no-repeat bg-cover;
  
        }
      }


    }
  }

}
</style>
