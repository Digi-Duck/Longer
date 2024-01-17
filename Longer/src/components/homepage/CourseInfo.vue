<script>
import img1 from "@/assets/img/homepage/CSInfo/pg-1.png";
import img2 from "@/assets/img/homepage/CSInfo/pg-2.png";
import img3 from "@/assets/img/homepage/CSInfo/pg-3.png";
import img4 from "@/assets/img/homepage/CSInfo/pg-4.png";
export default {
  data() {
    return {
      IMG: [
        { title: "升大學美術班 ", pic: img1 },
        { title: "國高中美術資優班 ", pic: img2 },
        { title: "成人美術西畫班", pic: img3 },
        { title: "兒童美術創作班 ", pic: img4 },
      ],
    };
  },
};
</script>
<template>
  <div class="CourseInfoBG">
    <div class="CourseInfo">
      <div v-for="(item, index) in IMG" class="zoom">
        <img :src="item.pic" alt="" />
        <div class="title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.CourseInfoBG {
  @apply flex  justify-center w-[100%] h-[2010px] bg-MainColorBG;
  .CourseInfo {
    @apply flex  justify-between w-[1403px] h-[369px] bg-[gray] truncate;
  }
  .zoom {
    @apply bg-MainColorBG;
    .title {
      @apply w-[100%] h-[66px] bg-[#00000054] text-[#FFFFFF];
    }
  }
}
.zoom {
  transition: transform 0.2s; /* Animation */
  flex: 1;
}

.zoom:hover {
  transform: scale(
    1.2
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>
