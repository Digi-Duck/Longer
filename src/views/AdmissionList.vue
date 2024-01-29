<script>
import HomeTitle from "@/components/homepage/HomeTitle.vue";
import pic1 from "@/assets/img/admission_list/pic-1.svg";
import pic2 from "@/assets/img/admission_list/pic-2.svg";
import pic3 from "@/assets/img/admission_list/pic-3.svg";
// import hookpic from "@/assets/img/admission_list/hook.svg"

export default {
  components: { HomeTitle },
  data() {
    return {
      pic1: pic1,
      pic2: pic2,
      pic3: pic3,
      // hookpic:hookpic,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    const ShakeBoxId = document.querySelector('#ShakeBoxId')
    ShakeBoxId.style.display="block"
  },

};
</script>
<template>
    <NavCurve class="md:block hidden"></NavCurve>
  <NavMobile class="md:hidden block"></NavMobile>
  <div>
    <!-- <NavCurve></NavCurve> -->
    <div class="All">
      <HomeTitle class="xl:!justify-start xl:pl-[138px] xl:mb-[134px] md:mb-[96px] mb-[87px]">歷年榜單</HomeTitle>
      <div class="block">
        <div class="ImgBox">
          <div class="hook"></div>
          <div class="content">
            <img :src="pic1" alt="" />
            <div class="title">升大學優良榜單</div>
          </div>
        </div>
        <div class="ImgBox">
          <div class="hook"></div>
          <div class="content">
            <img :src="pic2" alt="" />
            <div class="title">升高中優良榜單</div>
          </div>
        </div>
        <div class="ImgBox">
          <div class="hook"></div>
          <div class="content">
            <img :src="pic3" alt="" />
            <div class="title">升國中優良榜單</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scope>
.All {
  @apply flex flex-col  items-center bg-MainColorBG;
  .block {
    @apply flex flex-col items-center gap-20 w-[100%] xl:h-[2360px] lg:h-[2060px] md:h-[1700px] h-[1000px] ;
    .ImgBox {
      @apply flex flex-col items-center xl:w-[60%] lg:w-[70%] md:w-[85%] w-[95%] ;
      .hook {
        @apply md:w-[500px] md:h-[114px] w-[500px] h-[70px] bg-[url('@/assets/img/admission_list/hook.svg')];
      }
      .content {
        @apply w-[100%] relative rounded-[24px] xl:border-[30px] lg:border-[24px] md:border-[16px] border-[10px] border-[#500000] shadow-[#2f1f0e] shadow-xl overflow-hidden;
      }
      img {
        @apply w-[100%];
      }
      .content:hover {
        border-color: #ffc700;
        transition: border-color 0.5s;
      }
      .title {
        @apply flex justify-center  w-[100%] bg-[rgba(30,75,2,0.7)]  absolute bottom-[0px] text-[#FFFFFF] text-[40px];
      }
    }
  }
}
</style>
