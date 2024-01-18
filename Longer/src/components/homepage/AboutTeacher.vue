<script>
import teacher1 from '@/assets/img/homepage/THabout/blob_1.svg';
import teather2 from '@/assets/img/homepage/THabout/blob_2.svg';
import teacher3 from '@/assets/img/homepage/THabout/blob_3.svg';
export default {
  data() {
    return {
      teacherAbout: [teacher1, teather2, teacher3],
      imgTops: [],
    }
  },
  mounted() {
    // 在組件掛載後添加 scroll 事件監聽
    window.addEventListener('scroll', this.handleScroll);
    //選取多個img
    const imgTops = document.querySelectorAll('.slide-in');
    //data imgTops 存至個別的offsetTop
    this.imgTops = Array.from(imgTops);
    //window bottom scrollY
  },
  methods: {
    handleScroll() {
      // console.log(this.imgTops);
      let windowBottom = window.scrollY + window.innerHeight;
      // let imgTop = this.$refs.img1.offsetTop;
      this.imgTops.forEach(img => {
        let imgDisplay = img.offsetTop + img.height / 2;
        if (windowBottom > imgDisplay) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
      });
      // if (windowBottom > imgTop) {
      //   console.log(1);
      // }
    },

  },

}
</script>
<template>
  <div class="AboutTeacherBG">
    <div class="about">
      <div class="th th-ph">
        <img class="align-left slide-in" :src="teacherAbout[0]" alt="">
      </div>
      <div class="th th-text">
        富有教學熱忱的丁老師，創立畫室的初衷，是希望幫助每個對夢想懷抱憧憬的孩子，成為他們在追尋理想的人生道路上，一座座指引前方的燈塔。
      </div>
    </div>
    <div class="about">
      <div class="th th-text">
        丁老師熟悉各個領域的技法，從素描到水彩、油畫到水墨。 自細節出發，將每個技法的重點傳授的淋漓盡致。
      </div>
      <div class="th th-ph">
        <img class="align-right slide-in" :src="teacherAbout[1]" alt="">
      </div>
    </div>
    <div class="about">
      <div class="th th-ph">
        <img class="align-left slide-in" :src="teacherAbout[2]" alt="">
      </div>
      <div class="th th-text">
        一對一的教學方式，讓每個孩子都能自行安排學習時間，把控同一時段授課學生人數，顧及每位學生的學習進度和教學品質，讓所有來到龍格的學生，繪製的作品都能顯著的進步。
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// h1919
.AboutTeacherBG {
  @apply w-[100%] h-[1919px] bg-MainColorBG mt-[300px];

  .about {
    @apply flex;

    .th {
      @apply w-[50%] flex justify-center items-center;
    }

    .th-text {
      @apply px-[300px]
    }

    .th-ph {
      .slide-in {
        @apply opacity-0 duration-700 ease-in;
      }

      .active {
        @apply opacity-100;
      }
    }
  }
}
</style>
