<script>
import HomeTitle from "@/components/homepage/HomeTitle.vue";
import pic1 from "@/assets/img/admission_list/pic-1.svg";
import pic2 from "@/assets/img/admission_list/pic-2.svg";
import pic3 from "@/assets/img/admission_list/pic-3.svg";
import phonePic1 from "@/assets/img/admission_list/phone-pic-1.svg";
import phonePic2 from "@/assets/img/admission_list/phone-pic-2.svg";
import phonePic3 from "@/assets/img/admission_list/phone-pic-3.svg";
// import hookpic from "@/assets/img/admission_list/hook.svg"

export default {
  components: { HomeTitle },
  data() {
    return {
      pic1: pic1,
      pic2: pic2,
      pic3: pic3,
      phonePic1: phonePic1,
      phonePic2: phonePic2,
      phonePic3: phonePic3,
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
      <div class="block md:mb-[0px] mb-[140px]">
        <div class="ImgBox">
          <div class="hook md:block hidden"></div>
          <div class="hook-phone md:hidden"></div>
          <div class="content">
            <img class="md:block hidden" :src="pic1" alt="" />
            <img class="md:hidden" :src="phonePic1" alt="" />
            <div class="title">升大學優良榜單</div>
          </div>
        </div>
        <div class="ImgBox">
          <div class="hook md:block hidden"></div>
          <div class="hook-phone md:hidden"></div>
          <div class="content">
            <img class="md:block hidden" :src="pic2" alt="" />
            <img class="md:hidden" :src="phonePic2" alt="" />
            <div class="title">升高中優良榜單</div>
          </div>
        </div>
        <div class="ImgBox">
          <div class="hook md:block hidden"></div>
          <div class="hook-phone md:hidden"></div>
          <div class="content">
            <img class="md:block hidden" :src="pic3" alt="" />
            <img class="md:hidden" :src="phonePic3" alt="" />
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
    @apply flex flex-col items-center gap-20 w-[100%] xl:h-[2360px] lg:h-[1920px] md:h-[1700px] h-[1000px] ;
    .ImgBox {
      @apply flex flex-col items-center xl:w-[60%] lg:w-[70%] md:w-[85%] w-[95%] ;
      .hook {
        @apply md:w-[500px] md:h-[114px] bg-[url('@/assets/img/admission_list/hook.svg')] ;
      }
      .hook-phone {
        @apply  w-[170px] h-[36px] bg-no-repeat bg-[url('@/assets/img/admission_list/phone-hook.svg')];
      }
      .content {
        @apply  relative rounded-[24px] xl:border-[30px] lg:border-[24px] md:border-[16px] border-[10px] border-[#500000] shadow-[#2f1f0e] shadow-xl overflow-hidden;
      }
      img {
        @apply  xl:h-[470px] lg:h-[316.13px] md:h-[292.2px]  w-[100%];
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
