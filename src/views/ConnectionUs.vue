<script>
import HomeTitle from "@/components/homepage/HomeTitle.vue";
// import blob1 from "@/assets/img/homepage/BGpictures/Vector1.svg";
// import blob2 from "@/assets/img/homepage/BGpictures/Vector2.svg";
// import blob3 from "@/assets/img/homepage/BGpictures/Vector3.svg";// import ContentCurve from "@/assets/img/homepage/BGpictures/curve2.svg"
import blob1 from "@/components/blob/blob1.vue";
import blob2 from "@/components/blob/blob2.vue";
import blob3 from "@/components/blob/blob3.vue";
export default {
  components: { HomeTitle,blob1,blob2,blob3},
  data() {
    return {
      ContactInfoList: [
        { name: "連絡電話", detail: "(04)2225-8657" },
        { name: "電子信箱", detail: "longer959@gmail.com" },
        {
          name: "營業時間",
          detail:
            "週三至週五 15:00 — 21:00\n週六及週日 09:00 — 17:00\n每週一和週二公休",
        },
        { name: "畫室地址", detail: "台中市北區三民路三段54巷\n19號之3號4樓" },
      ],
      TraffInfoList:[
        {name:"公車資訊",detail:"至台中火車站搭乘5、12、21、25、35、58、131號公車\n乘至 國立臺中科技大學 或 中興堂\n步行約5分鐘即可抵達龍格畫室"},
        {name:"步行",detail:"畫室位於一中商圈周邊\n抵達三民路三段，看見「普羅相機」或「巨匠電腦」店面，轉彎進入54巷\n直行約50公尺即可抵達龍格畫室"}
      
      ]
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    const ShakeBoxId = document.querySelector('#ShakeBoxId');
    ShakeBoxId.style.display="block";

   
  },
  methods: {
    formatDetail(detail) {
      return detail.replace(/\n/g, '<br>');
    },
  },
};
</script>
<template>
  <NavCurve class="md:block hidden"></NavCurve>
  <NavMobile class="md:hidden block"></NavMobile>
  <div class="overflow-hidden " >
    <HomeTitle class="xl:!justify-start xl:pl-[138px] xl:pb-[134px] md:pb-[96px] pb-[25px] bg-MainColorBG">聯絡資訊</HomeTitle>
    <section class="Block1 ">
      <!-- 文字 + 圖片 -->
      <div class="ConInfo">
        <div class="TextBox" v-fade-in-out>
          <p class="Text" v-for="(item,index) in ContactInfoList ">
          <h6 class="title">{{item.name}}</h6>
          <h6 class="content" v-html="formatDetail(item.detail)"></h6>
          </p>
        </div>
      <div class="bcgImg"></div>
      </div>
      
    </section>
    <div class="curve  bg-MainColorBG  md:block hidden"></div>
    
    <section class="Block2">
     <HomeTitle class="HomeTitle lg:mt-[-260px] mt-[40px] md:mb-[0px] mb-[25px]">交通資訊</HomeTitle> 
     <!-- <blob2 class="right-[-30px]"></blob2>
     <blob3 class="bottom-[0px] left-[-30px] "></blob3> -->
      <div class="TrafficWay">
        
        <div class="TraffInfo">
          <div class="TraffBox"> 
            <iframe class="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7281.374658267901!2d120.68340395005671!3d24.147632202326992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d694e74e9c3%3A0x927ec8b9a195fcd!2z6b6N5qC855Wr5a6k!5e0!3m2!1szh-TW!2stw!4v1705722612413!5m2!1szh-TW!2stw"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        
            <div class="TraffContentBox">
              <div class="TraffContent" v-for="(item,index) in TraffInfoList" v-fade-in-out :key="item.id">
                <div class="TitleBG2">
                  <div class="text">
                    {{item.name}}
                  </div>
              <p v-html="formatDetail(item.detail)"></p>
                </div>       
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
    
    <section class="Block3">
      <div class="curve rotate-180 scale-x-[-1] "></div>
      <div class="bus">
        
      </div>
    </section>
 
  </div>

</template>
<style lang="scss" scoped>
// 漸入
// .fade-in {
//   opacity: 0; /* 初始透明度为0，即不可见 */
//   transform: translateY(-50px); /* 初始位置为向上偏移50px */
//   transition: opacity 1s ease, transform 1s ease; /* 设置过渡效果，1秒完成，缓动函数为ease */
// }

// .fade-in.show {
//   opacity: 1; /* 当添加show类时，透明度变为1，即可见 */
//   transform: translateY(0); /* 当添加show类时，位置变为原始位置，即不再偏移 */
// }
// 

.HomeTitle{
  @apply xl:pl-[138px]
  xl:flex-none lg:pt-[calc(57px+34px)] 
  md:flex md:justify-center ;
}
.Block1{
   @apply flex flex-col items-center bg-MainColorBG;
    .ConInfo {
      @apply flex 
             lg:justify-center md:justify-start justify-center 
             lg:items-start md:items-center 
             lg:flex-row md:flex-col-reverse

             xl:h-[837px] lg:h-[615px] md:h-[100%] h-[373px] 
             xl:w-[100%] lg:w-[1058px] md:w-[100%] w-[342px]
             xl:mt-[0px] lg:mt-[100px] md:mt-[0px] 
             md:bg-none bg-[url("@/assets/img/connection_us/NotePaper.svg")] ;
    .TextBox{
      @apply  md:font-[GenWanMin-L] font-[ChenYuluoyan]  
              md:mt-[59px]  mt-[50px]
              xl:w-[721px] lg:w-[582px] md:w-[400px] w-[318px]
              xl:h-[308px] lg:h-[231px] md:h-[265px] h-[255px]

              ;
    };
   
    .Text{
      @apply flex  
            xl:pb-[30px] lg:pb-[20px] md:pt-[30px]  pt-[3px] 
            xl:text-[1.5rem] md:text-[1.25rem] text-[1.5rem] 
            ; 
    .title{
      @apply xl:pr-[80px] lg:pr-[60px] md:pr-[30px] pr-[24px]
             md:bg-none bg-[url("@/assets/img/connection_us/TextDecMobile.svg")] bg-no-repeat bg-contain bg-left bg-top
    }};
  
  .bcgImg{        
    @apply bg-[url('@/assets/img/courseinfo/easel.png')] bg-no-repeat bg-contain 
    xl:bg-right lg:bg-right md:bg-center
    xl:w-[800px] lg:w-[475px] md:w-[430px] w-[0px]
    xl:h-[920px] lg:h-[615px] md:h-[448px] h-[0px]  
    xl:mt-[-60px] lg:mt-[0px] md:mt-[54px] mt-[0px]  
          
  }}
}
.Block2{
    @apply flex flex-col items-center relative md:bg-MainColor bg-MainColorBG;
    .TrafficWay{
      @apply md:bg-MainColor bg-MainColorBG  ;
  
    .TraffBox{
      @apply flex flex-col md:bg-[#ebe7d5] bg-none  rounded-[30px]  
             xl:w-[1260px] lg:w-[848px] md:w-[600px]
             xl:h-[1528px] lg:h-[1028px] md:h-[730px] 
             md:mt-[103px] 
             md:pt-[84px] items-center pb-[84px] mb-[84px];
    .TraffContentBox{
      @apply flex flex-col 
             xl:w-[849px] lg:w-[571px] md:w-[470px] w-[312px]
             xl:h-[542px] lg:h-[364px] md:h-[313px] h-[323px]
             md:pt-[0px] pt-[46px];
            //  單一區塊文字
          .TitleBG2 {
                @apply flex w-[100%] flex-col  
                xl:pt-[71px] lg:pt-[47px] md:pt-[16px] pt-[6px] ;
                .text {
                  // 第一行是所有文字外框都共用的樣式
                  @apply  pl-[71px]
                  md:bg-[url("@/assets/img/connection_us/Star.svg")] bg-contain bg-left bg-no-repeat
                  bg-[url("@/assets/img/connection_us/StarMobile.svg")]
                  font-[ChenYuluoyan] font-semibold  
                  w-[300px]
                  xl:text-[3.25rem] lg:text-[2.12rem] text-[1.5rem]; 
                  
                }
                p{@apply pl-[46px] font-[GenWanMin-L] 
                         xl:pt-[30px] lg:pt-[20px] md:pt-[14px] pt-[15px] 
                         xl:text-[1.56rem] lg:text-[1rem] md:text-[0.875rem] text-[0.813rem];
                        }
                
}
  }
  .GoogleMap{
    @apply xl:w-[1100px] lg:w-[739px] md:w-[480px] w-[297px]
           xl:h-[600px]  lg:h-[403px] md:h-[260px] h-[317px]
  }
};
}
  }

.Block3{
  @apply w-[100%]  bg-MainColorBG;
  .bus{
  @apply w-[100px] xl:h-[100px] lg:h-[60px] md:h-[30px]  mt-[85px] ;
}
}


// 曲線
.curve{
  @apply md:w-[100%] md:h-[288px] 
  md:bg-[url("@/assets/img/homepage/BGpictures/curve1.svg")] bg-cover bg-no-repeat 
  bg-none 
}




</style>
