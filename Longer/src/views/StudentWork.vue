<script>
// 導入lightbox
import lightbox from 'lightbox2';
// 導入圖片
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
        <a class="example-image-link" href="@/assets/img/student_work/water_color/S__13918247_0.jpg" data-lightbox="example-2" data-title="Optional caption.">
          <img class="example-image" src="@/assets/img/student_work/water_color/S__13918247_0.jpg"  alt="image-1"/>
          <div class="mask example-image" >{{item.skill}}</div>
        </a>
      </div>
    </section>


    <!-- lightbox test -->
    <!-- <div>
        <a class="example-image-link" href="@/assets/img/student_work/water_color/S__13918247_0.jpg" data-lightbox="example-2" data-title="Optional caption.">
          <img class="example-image" src="@/assets/img/student_work/water_color/S__13918247_0.jpg"  alt="image-1"/>
        </a>
        <a class="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-2.jpg" data-lightbox="example-2" data-title="Optional caption." hidden>
          <img class="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-2.jpg" alt="image-1"/>
        </a>
        <a class="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-2.jpg" data-lightbox="example-2" data-title="Optional caption." hidden>
          <img class="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-2.jpg" alt="image-1"/>
        </a>
    </div> -->

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
