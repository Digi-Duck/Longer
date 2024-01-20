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
};
</script>
<template lang="">
  <main>


    <section>
      <div class="box" v-for="item in studentWorks" :key="item.id">
        <div class="mask">{{item.skill}}</div>
      </div>
    </section>

    <div>
        <a class="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><img class="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-3.jpg" alt=""/></a>
        <a class="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-4.jpg" data-lightbox="example-set" data-title="Or press the right arrow on your keyboard." hidden><img class="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-4.jpg" alt="" /></a>
        <a class="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg" data-lightbox="example-set" data-title="The next image in the set is preloaded as you're viewing." hidden><img class="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-5.jpg" alt="" /></a>
        <a class="example-image-link" href="http://lokeshdhakar.com/projects/lightbox2/images/image-6.jpg" data-lightbox="example-set" data-title="Click anywhere outside the image or the X to the right to close." hidden><img class="example-image" src="http://lokeshdhakar.com/projects/lightbox2/images/thumb-6.jpg" alt="" /></a>
    </div>



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
        @apply w-full py-[5px] text-center text-[#fff] bg-[rgba(0,0,0,0.7)];
      }
    }
  }
}
</style>
