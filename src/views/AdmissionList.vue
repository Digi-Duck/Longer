<script>
import HomeTitle from "@/components/homepage/HomeTitle.vue";
import pic1 from "@/assets/img/admission_list/pic-1.svg";
import pic2 from "@/assets/img/admission_list/pic-2.svg";
import pic3 from "@/assets/img/admission_list/pic-3.svg";
import phonePic1 from "@/assets/img/admission_list/phone-pic-1.svg";
import phonePic2 from "@/assets/img/admission_list/phone-pic-2.svg";
import phonePic3 from "@/assets/img/admission_list/phone-pic-3.svg";
// import hookpic from "@/assets/img/admission_list/hook.svg"
// 導入榜單-大學
import college01 from "@/assets/img/admission_list/college/college_1.png";
import college02 from "@/assets/img/admission_list/college/college_2.png";
import college03 from "@/assets/img/admission_list/college/college_3.png";
import college04 from "@/assets/img/admission_list/college/college_4.png";
import college05 from "@/assets/img/admission_list/college/college_5.png";
import college06 from "@/assets/img/admission_list/college/college_6.png";
import college07 from "@/assets/img/admission_list/college/college_7.png";
// 導入榜單-高中
import high01 from "@/assets/img/admission_list/high_school/high_school_1.png";
// 導入榜單-國中
import junior01 from "@/assets/img/admission_list/junior_high/junior_high_1.png";

export default {
  components: { HomeTitle },
  data() {
    return {
      college01,
      // hookpic:hookpic,
      listImg: [
        {
          title: "升大學優良榜單",
          dataName: "college",
          mdsrc: pic1,
          smsrc: phonePic1,
          imgPath: [
            college01,
            college02,
            college03,
            college04,
            college05,
            college06,
            college07,
          ],
        },
        {
          title: "升高中優良榜單",
          dataName: "high",
          mdsrc: pic2,
          smsrc: phonePic2,
          imgPath: [high01],
        },
        {
          title: "升國中優良榜單",
          dataName: "junior",
          mdsrc: pic3,
          smsrc: phonePic3,
          imgPath: [junior01],
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    // const ShakeBoxId = document.querySelector('#ShakeBoxId')
    // ShakeBoxId.style.display="block"
  },
};
</script>
<template>
  <NavCurve class="md:block hidden"></NavCurve>
  <NavMobile class="md:hidden block"></NavMobile>
  <div>
    <!-- <NavCurve></NavCurve> -->
    <div class="All">
      <HomeTitle
        class="xl:!justify-start xl:pl-[138px] xl:mb-[134px] md:mb-[96px] mb-[87px]"
        >歷年榜單</HomeTitle
      >
      <div class="block md:mb-[0px] mb-[140px]">
        <div v-for="item in listImg" :key="item.id" class="ImgBox">
          <div class="hook md:block hidden"></div>
          <div class="hook-phone md:hidden"></div>
          <div class="content">
            <a
              class="list-content"
              v-for="list in item.imgPath"
              :key="list.id"
              :href="list"
              :data-lightbox="item.dataName"
              :data-title="item.title"
            >
              <img class="md:block hidden" :src="item.mdsrc" alt="" />
              <img class="md:hidden" :src="item.smsrc" alt="" />
              <div class="title">{{ item.title }}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- test -->
  <a :href="pic1" data-lightbox="roadtrip">
    <img src="../assets/img/admission_list/phone-pic-1.svg" alt="" />
  </a>
  <a :href="pic2" data-lightbox="roadtrip">
    <!-- <img src="../assets/img/admission_list/phone-pic-2.svg" alt=""> -->
  </a>
  <a :href="pic3" data-lightbox="roadtrip">
    <!-- <img src="../assets/img/admission_list/phone-pic-3.svg" alt=""> -->
  </a>
  <img
    src="../assets/img/admission_list/high_school/high_school_1.png"
    alt=""
  />
  <img
    src="../assets/img/admission_list/junior_high/junior_high_1.png"
    alt=""
  />
  <img :src="college01" alt="" />
</template>
<style lang="scss" scope>
.All {
  @apply flex flex-col  items-center bg-MainColorBG;
  .block {
    @apply flex flex-col items-center gap-20 w-[100%] xl:h-[2360px] lg:h-[1920px] md:h-[1700px] h-[1000px];
    .ImgBox {
      @apply flex flex-col items-center xl:w-[60%] lg:w-[70%] md:w-[85%] w-[95%];

      .list-content {
        // 除了第一筆資料以外都隱藏
        &:not(:first-child) {
          @apply hidden;
        }
      }
      // // 這邊我不確定怎麼選先把原先的註解
      // .list-content{ @apply flex flex-col items-center xl:w-[60%] lg:w-[70%] md:w-[85%] w-[95%];}
      .hook {
        @apply md:w-[500px] md:h-[114px] bg-[url('@/assets/img/admission_list/hook.svg')];
      }
      .hook-phone {
        @apply w-[170px] h-[36px] bg-no-repeat bg-[url('@/assets/img/admission_list/phone-hook.svg')];
      }
      .content {
        @apply relative rounded-[24px] xl:border-[30px] lg:border-[24px] md:border-[16px] border-[10px] border-[#500000] shadow-[#2f1f0e] shadow-xl overflow-hidden;
      }
      img {
        @apply xl:h-[470px] lg:h-[316.13px] md:h-[292.2px]  w-[100%];
      }
      .content:hover {
        border-color: #ffc700;
        transition: border-color 0.5s;
      }
      .title {
        @apply flex justify-center  w-[100%] bg-[rgba(30,75,2,0.7)]  absolute bottom-[0px] text-[#FFFFFF] text-[40px] font-sans;
      }
    }
  }
}
</style>
<!-- 調整灰色抖抖得顯示 -->
<style>
#ShakeBoxId {
  display: block;
}
</style>
