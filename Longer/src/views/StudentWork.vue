<script>
// 導入lightbox
import lightbox from 'lightbox2';
// 導入圖片-素描
import sketch01 from '@/assets/img/student_work/sketch_img/sketch_01.jpg';
import sketch02 from '@/assets/img/student_work/sketch_img/sketch_02.jpg';
import sketch03 from '@/assets/img/student_work/sketch_img/sketch_03.jpg';
import sketch04 from '@/assets/img/student_work/sketch_img/sketch_04.jpg';
import sketch05 from '@/assets/img/student_work/sketch_img/sketch_05.jpg';
import sketch06 from '@/assets/img/student_work/sketch_img/sketch_06.jpg';
// 導入圖片-水彩類
import waterColor01 from '@/assets/img/student_work/water_color_img/water_color_01.jpg';
import waterColor02 from '@/assets/img/student_work/water_color_img/water_color_02.jpg';
import waterColor03 from '@/assets/img/student_work/water_color_img/water_color_03.jpg';
import waterColor04 from '@/assets/img/student_work/water_color_img/water_color_04.jpg';
import waterColor05 from '@/assets/img/student_work/water_color_img/water_color_05.jpg';
import waterColor06 from '@/assets/img/student_work/water_color_img/water_color_06.jpg';
import waterColor07 from '@/assets/img/student_work/water_color_img/water_color_07.jpg';
import waterColor08 from '@/assets/img/student_work/water_color_img/water_color_08.jpg';
import waterColor09 from '@/assets/img/student_work/water_color_img/water_color_09.jpg';
import waterColor10 from '@/assets/img/student_work/water_color_img/water_color_10.jpg';
// 導入圖片-水墨
import ink01 from '@/assets/img/student_work/ink_img/ink_01.jpg';
import ink02 from '@/assets/img/student_work/ink_img/ink_02.jpg';
import ink03 from '@/assets/img/student_work/ink_img/ink_03.jpg';
import ink04 from '@/assets/img/student_work/ink_img/ink_04.jpg';
import ink05 from '@/assets/img/student_work/ink_img/ink_05.jpg';
import ink06 from '@/assets/img/student_work/ink_img/ink_06.jpg';
import ink07 from '@/assets/img/student_work/ink_img/ink_07.jpg';
// 導入圖片-色鉛筆

// 導入圖片-炭筆

// 導入圖片-建築模型

// 導入圖片-兒童美術


export default {

  data() {
    return {

      studentWorks: [
        {
          skill: '素描',
          dataText:'sketch',
          img: [
            sketch01,
            sketch02,
            sketch03,
            sketch04,
            sketch05,
            sketch06,
          ],

        },
        {
          skill: '水彩',
          dataText:'waterColor',
          img: [
            waterColor01,
            waterColor02,
            waterColor03,
            waterColor04,
            waterColor05,
            waterColor06,
            waterColor07,
            waterColor08,
            waterColor09,
            waterColor10,

          ],

        },
        {
          skill: '水墨',
          dataText:'ink',
          img: [
            ink01,
            ink02,
            ink03,
            ink04,
            ink05,
            ink06,
            ink07,
          ],

        },
        {
          skill: '色鉛筆',
          dataText:'waterColor',
          img: [

          ],

        },
        {
          skill: '麥克筆',
          dataText:'waterColor',
          img: [

          ],

        },
        {
          skill: '炭筆靜物',
          dataText:'waterColor',
          img: [

          ],

        },
        {
          skill: '石膏素描',
          dataText:'waterColor',
          img: [

          ],

        },
        {
          skill: '建築模型',
          dataText:'waterColor',
          img: [

          ],

        },
        {
          skill: '兒童美術創意',
          dataText:'waterColor',
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
  <img src="../assets/img/student_work/" alt="">
    <section>
      <div class="box" v-for="item in studentWorks" :key="item.id">
        <a class="image-link" v-for="imgItem in item.img" :key="imgItem.id" :href="imgItem" :data-lightbox="item.dataText" data-title="Optional caption.">
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
