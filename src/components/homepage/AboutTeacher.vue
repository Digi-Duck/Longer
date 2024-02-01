<script>
import teacher1 from "@/assets/img/homepage/THabout/Blob_1.svg";
import teather2 from "@/assets/img/homepage/THabout/blob_2.svg";
import teacher3 from "@/assets/img/homepage/THabout/blob_3.svg";
export default {
  data() {
    return {
      teacherAbout: [teacher1, teather2, teacher3],
      imgTops: [],
    };
  },
  mounted() {
    // 在組件掛載後添加 scroll 事件監聽
    window.addEventListener("scroll", this.handleScroll);
    //選取多個img
    const imgTops = document.querySelectorAll(".slide-in");
    //data imgTops 存至個別的offsetTop
    this.imgTops = Array.from(imgTops);
    //window bottom scrollY
  },
  methods: {
    handleScroll() {
      // 內部高度window.innerHeight
      // 視窗的底部所在的垂直位置  windowBottom
      let windowBottom = window.scrollY + window.innerHeight;
      console.log(
        "滾輪高度 : ",
        window.scrollY,
        "視窗高度 : ",
        window.innerHeight,
        "頁面頂部至目前瀏覽介面底部位置 : ",
        windowBottom
      );
      // let imgTop = this.$refs.img1.offsetTop;
      this.imgTops.forEach((img) => {
        // 圖片位置+圖片一半高度
        let imgDisplay = img.offsetTop + img.height / 2;
        if (windowBottom > imgDisplay) {
          img.classList.add("active");
        } else {
          img.classList.remove("active");
        }
      });
      // if (windowBottom > imgTop) {
      //   console.log(1);
      // }
    },
  },
};
</script>
<template>
  <div class="AboutTeacherBG">
    <div class="about-l">
      <div class="th-ph th-r">
        <img class="align-left slide-in" :src="teacherAbout[0]" alt="" />
      </div>
      <div class="th-text lg:mb-0 mb-[40px]">
        <div
          class="lg:w-[465px] md:w-[380px] w-[90%] flex flex-col lg:gap-10 md:gap-5"
          v-fade-in-out
        >
          <h1 class="xl:m-0 m-auto">丁建中 老師</h1>
          <p>
            富有教學熱忱的丁老師，創立畫室的初衷，是希望幫助每個對夢想懷抱憧憬的孩子，成為他們在追尋理想的人生道路上，一座指引前方的燈塔。
          </p>
        </div>
      </div>
    </div>
    <div class="about-r">
      <div class="th-text th-r lg:mb-0 mb-[40px]">
        <div
          class="lg:w-[465px] md:w-[380px] w-[90%] flex flex-col lg:gap-10 md:gap-5"
          v-fade-in-out
        >
          <h1 class="xl:m-0 m-auto">升學集訓班</h1>
          <p>
            升學集訓班將會集中編排程度相近的學生，課堂中親自示範與解題，使學生共同練習，透過同儕良性切磋相互學習。
          </p>
        </div>
      </div>
      <div class="th-ph">
        <img class="align-right slide-in" :src="teacherAbout[1]" alt="" />
      </div>
    </div>
    <div class="about-l">
      <div class="th-ph th-r">
        <img class="align-left slide-in" :src="teacherAbout[2]" alt="" />
      </div>
      <div class="th-text">
        <div
          class="lg:w-[465px] md:w-[380px] w-[90%] flex flex-col lg:gap-10 md:gap-5"
        >
          <h1 class="xl:m-0 m-auto">小班制教學</h1>
          <p>
            掌控同一時段的授課人數，顧及每位學生的進度，讓來到龍格的學生，都能擁有良好的教學品質。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// h1919
.AboutTeacherBG {
  @apply w-[100%] xl:h-[1900px] lg:h-[1400px] md:h-[1683px] h-[1440px] xl:pt-[100px] lg:pt-[80px] md:pt-[60px] pt-[40px] bg-MainColorBG;
  .about-r {
    @apply flex lg:flex-row xl:gap-32 lg:gap-12 flex-col-reverse gap-6 items-center;
    .th-text {
      @apply lg:w-[45%] md:w-[45%] w-[70%] md:leading-9  leading-7 flex  items-center xl:text-[1.75rem] lg:text-[1.5rem]  md:text-[1.125rem] text-[.875rem] text-[GenWanMin-L] tracking-[.2em];
    }
    .th-r {
      @apply flex lg:justify-end  justify-center;
    }
    .th-ph {
      @apply lg:w-[55%] md:w-[56%] w-[100%] flex justify-center;
      img {
        @apply xl:w-[847px] lg:w-[635px] md:w-[425px] w-[360px];
      }
      .slide-in {
        @apply opacity-0 duration-700 ease-in;
      }

      .active {
        @apply opacity-100;
      }
    }
  }

  .about-l {
    @apply flex lg:flex-row xl:gap-32 lg:gap-12 flex-col gap-6 items-center;
    .th-text {
      @apply w-[70%] xl:w-[45%] lg:w-[45%] md:leading-9  leading-7 flex  items-center xl:text-[1.75rem] lg:text-[1.5rem] lg:justify-start md:text-[1.125rem] justify-center text-[.875rem] text-[GenWanMin-L] tracking-[.2em];
    }
    .th-r {
      @apply flex lg:justify-end  justify-center;
    }
    .th-ph {
      @apply w-[100%] xl:w-[55%] lg:w-[55%] md:w-[70%];
      img {
        @apply xl:w-[847px] lg:w-[635px] md:w-[425px] w-[360px];
      }
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
