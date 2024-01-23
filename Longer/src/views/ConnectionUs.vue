<script>
import HomeTitle from "@/components/homepage/HomeTitle.vue";
import NavCurve from "@/components/NavCurve.vue"
// import blob1 from "@/assets/img/homepage/BGpictures/Vector1.svg";
// import blob2 from "@/assets/img/homepage/BGpictures/Vector2.svg";
// import blob3 from "@/assets/img/homepage/BGpictures/Vector3.svg";// import ContentCurve from "@/assets/img/homepage/BGpictures/curve2.svg"
import blob1 from "@/components/blob/blob1.vue";
import blob2 from "@/components/blob/blob2.vue";
import blob3 from "@/components/blob/blob3.vue";
export default {
  components: { HomeTitle,NavCurve,blob1,blob2,blob3},
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
        { name: "畫室地址", detail: "台中市北區三民路三段54巷19號之3號4樓" },
      ],
      TraffInfoList:[
        {name:"公車資訊",detail:"至台中火車站搭乘5、12、21、25、35、58、131號公車\n乘至 國立臺中科技大學 或 中興堂\n步行約5分鐘即可抵達龍格畫室"},
        {name:"步行",detail:"畫室位於一中商圈周邊\n抵達三民路三段，看見「普羅相機」或「巨匠電腦」店面，轉彎進入54巷\n直行約50公尺即可抵達龍格畫室"}
      
      ]
    };
  },
  methods: {
    formatDetail(detail) {
      return detail.replace(/\n/g, '<br>');
    },
  },
};
</script>
<template>
   
  <div >
   
    <section class="Block1">
      <HomeTitle class="pl-[138px]">聯絡資訊</HomeTitle>
      <div class="ConInfo">
      <div class="TextBox">
        <p class="Text" v-for="(item,index) in ContactInfoList">
        <h6 class="title">{{item.name}}</h6>
        <h6 class="content" v-html="formatDetail(item.detail)"></h6>
      </p>
      </div>
      <div class="bcgImg"></div>
      </div>
      <div class="curve"></div>
    </section>
    
    <section class="Block2">
     <HomeTitle class="pl-[138px]" :class="{'bg-set':true}">交通資訊</HomeTitle> 
     <blob2 class="right-[-30px]"></blob2>
     <blob3 class="bottom-[0px] left-[-30px] "></blob3>
      <div class="TrafficWay">
        
        <div class="TraffInfo">
          <div class="TraffBox"> 
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7281.374658267901!2d120.68340395005671!3d24.147632202326992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d694e74e9c3%3A0x927ec8b9a195fcd!2z6b6N5qC855Wr5a6k!5e0!3m2!1szh-TW!2stw!4v1705722612413!5m2!1szh-TW!2stw" width="1100px" height="600px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        
            <div class="TraffContentBox">
              <div class="TraffContent" v-for="(item,index) in TraffInfoList">
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
      <div class="curve rotate-180 scale-x-[-1]"></div>
      <div class="bus"></div>
    </section>
 
  </div>

</template>
<style lang="scss" scoped>

.Block1{
   @apply flex flex-col items-center bg-MainColorBG ;
    .ConInfo {
    .TextBox{
      @apply pt-[80px] ;
    };
    @apply h-[920px] w-[1400px] flex  ;
    .Text{
      @apply flex pb-[60px] flex-1 text-[1.5rem]; 
    .title{
      @apply pr-[80px] font-bold};};
  
  .bcgImg{
    @apply bg-[url('@/assets/img/courseinfo/easel.png')] bg-no-repeat bg-MainColorBG flex-1  mt-[-2px]
          
  }}
}
.Block2{
    @apply flex flex-col items-center relative bg-MainColor ;
    .TrafficWay{
      @apply bg-MainColor ;
  
    .TraffBox{
      @apply flex flex-col w-[1260px]  bg-[#ebe7d5] rounded-lg pt-[84px] items-center pb-[84px] mb-[84px];
    .TraffContentBox{
      @apply flex flex-col w-[100%];
  }
};
}
  }

.Block3{
  @apply w-[100%] h-[538px] bg-MainColorBG;
  .bus{
  // @apply w-[100%] h-[229px] bg-[#FFFFFF] mt-[85px] ;
}
}
.TitleBG2 {
  @apply flex w-[100%] flex-col pt-[85px] pl-[45px] ;
  .text {
    // 第一行是所有文字外框都共用的樣式
    @apply flex items-center justify-center w-[300px] h-[72px] text-[3.25rem] font-[ChenYuluoyan]  bg-[url("@/assets/img/connection_us/Star.svg")] bg-[contain] bg-no-repeat ;
  }
  p{@apply pl-[46px] pt-[4px] text-[24px]}
}

// 曲線
.curve{
  @apply w-[100%] h-[288px] bg-[url("@/assets/img/homepage/BGpictures/curve1.svg")] bg-cover bg-no-repeat 
}

.bg-set {
  @apply bg-MainColor;
  /* Add !important to override scoped styles */
}


</style>
