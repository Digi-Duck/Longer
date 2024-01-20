<script>
import HomeTitle from "@/components/homepage/HomeTitle.vue";
export default {
  components: { HomeTitle },
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
  <div class="ConnectionUsBG">
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
    <HomeTitle class="pl-[138px]">交通資訊</HomeTitle>
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
        
         <!-- <p v-html="formatDetail(item.detail)"></p> -->
        </div>
      </div>
      <div class="bus"></div>
      </div>
      </div>
    </div>
  </div>
  <!-- <div class="text-[80px]">
        聯絡資訊-(主頁Banner、畫室介紹)
    </div> -->
 
</template>
<style lang="scss" scoped>
.ConnectionUsBG {
  @apply  flex  w-[100%] flex-col items-center  bg-MainColorBG;
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
    @apply bg-[url('@/assets/img/courseinfo/easel.png')] bg-no-repeat flex-1  mt-[-2px]
          
  }
 
  // .bcgImg::after{
  //   content: ;
  // }
}

.TraffBox{
  @apply flex flex-col w-[1260px]  bg-[#ebe7d5] rounded-lg pt-[84px] items-center pb-[84px] mb-[84px];
  .TraffContentBox{
    @apply flex flex-col w-[100%];
  }
};

.bus{
  @apply w-[100%] h-[100px] bg-[#FFFFFF] mt-[85px] ;
}
}
.TitleBG2 {
  @apply flex w-[100%] flex-col pt-[85px] pl-[45px] ;
  .text {
    // 第一行是所有文字外框都共用的樣式
    @apply flex items-center justify-center w-[300px] h-[72px] text-[3.25rem] font-[ChenYuluoyan]  bg-[url('@/assets/img/courseinfo/BRdraw.png')]  bg-no-repeat  ;
  }
  p{@apply pl-[46px] pt-[4px] text-[24px]}
}
</style>
