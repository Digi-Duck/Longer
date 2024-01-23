<script>
import NavCurve from "@/components/NavCurve.vue"
import HomeTitle from "@/components/homepage/HomeTitle.vue";
import pic1 from "@/assets/img/admission_list/pic-1.svg"
import pic2 from "@/assets/img/admission_list/pic-2.svg"
import pic3 from "@/assets/img/admission_list/pic-3.svg"
// import hookpic from "@/assets/img/admission_list/hook.svg"

export default {
  components: {NavCurve,HomeTitle},
  data(){
return{
  pic1:pic1,
  pic2:pic2,
  pic3:pic3,
  // hookpic:hookpic,
}
},
}

</script>
<template>
  <div>
   <section>
<NavCurve></NavCurve>
<HomeTitle class="pl-[138px]">歷年榜單</HomeTitle>
<div class="block">
  <div class="ImgBox ">
    <div class="hook"></div>

    <div class="content">
      <img :src="pic1" alt="">
      <div class="title">升大學優良榜單</div>
    </div>
  

  </div>
  <div class="ImgBox ">
    <div class="hook"></div> 
    <div class="content">
      <img :src="pic2" alt="">
      <div class="title">升高中優良榜單</div>
    </div>
   
  </div>
  <div class="ImgBox ">
    <div class="hook"></div> 
    <div class="content">
      <img :src="pic3" alt="">
      <div class="title">升國中優良榜單</div>
    </div>
  </div>

</div>
   </section>
  </div>
</template>
<style lang="scss" scope>
section{
@apply flex flex-col  items-center bg-MainColorBG;
.block{
  @apply flex flex-col items-center justify-between  w-[1080px] h-[2083px] pt-[34px];
  .ImgBox{
    @apply flex flex-col items-center w-[1000px] h-[616px];
    .hook{@apply w-[500px] h-[114px] bg-[url('@/assets/img/admission_list/hook.svg')]};

    .content{
      @apply w-[100%] h-[470px] relative rounded-[24px] border-[30px] border-[#500000] shadow-[#2f1f0e] shadow-xl overflow-hidden};
      img{@apply w-[100%] }
      .content:hover{
  border-color:#ffc700;
  transition: border-color .5s;
}
      .title{
      @apply flex justify-center  w-[100%] bg-[rgba(30,75,2,0.7)]  absolute bottom-[0px] text-[#FFFFFF] text-[40px];
    }
   
  }
}
}



</style>