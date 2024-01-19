<script>
import HomeTitle from "@/components/homepage/HomeTitle.vue";

export default {
  components: { HomeTitle },
};
</script>
<template>
  <!-- <div class="abc h-[1000px]"></div> -->
  <div class="TeacherItroBG">
    <HomeTitle class="pl-[138px]">師資介紹</HomeTitle>
    <div class="TeacherItro">
      <div class="singleblock">
        <div data-aos="zoom-in-right">
          <div class="pic"></div>
        </div>

        <div class="text">
          <h1>丁建中 老師</h1>
          <div class="textblock">
            <p class="title">文化大學美術系設計組</p>
            <p class="content">
              授課項目：<br />
              素描、色鉛筆、麥克筆、粉彩、水彩、油畫、壓克力、水墨畫、書法及雕刻技術、創意設計與創意表現。
            </p>
          </div>
        </div>
      </div>
      <div class="singleblock">
        <div class="text pl-[80px]">
          <h1>張桂苓 老師</h1>
          <div class="textblock">
            <p class="title">國立藝術專科 美工科</p>
            <p class="content]">
              授課項目：<br />
              兒童美術、基礎素描、基礎水彩、蠟筆、色鉛筆技法
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-left"><div class="pic"></div></div>
      </div>
    </div>

    <div class="ClassInfo"></div>
    <HomeTitle class="pl-[138px]">課堂資訊</HomeTitle>
    <div class="YTvideo">
      <iframe
        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100064163762139%2Fvideos%2F790202262409733%2F&show_text=false&width=560&t=0"
        width="100%"
        height="100%"
        style="border: none; overflow: hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// 一整個頁面
.TeacherItroBG {
  @apply flex flex-col items-center h-[2000px] w-[100%] bg-MainColorBG;
}
// 師資介紹內容
.TeacherItro {
  @apply flex flex-col h-[935px] w-[1290px]  bg-MainColorBG;
  .singleblock {
    @apply flex flex-row justify-between items-center h-[45%] w-[100%];
    .title {
      @apply pt-[32px] pb-[32px];
    }
  }
  .pic {
    @apply w-[600px] h-[415px] bg-[#000000];
  }
  .text {
    @apply w-[600px];
    h1 {
      @apply text-[32px];
    }
  }
}
.YTvideo {
  @apply w-[855px] h-[500px] bg-MainColorBG;
}

// .title {
// }
// .content {
// }
// .ClassInfo {
//   @apply flex h-[750px] w-[100%] bg-MainColorBG;
// }
// .pic {
//   @apply w-[600px] h-[415px] bg-[gray];
// }
</style>
