<script>

import img1 from "@/assets/img/homepage/CSInfo/pg-1.png";
import img2 from "@/assets/img/homepage/CSInfo/pg-2.png";
import img3 from "@/assets/img/homepage/CSInfo/pg-3.png";
import img4 from "@/assets/img/homepage/CSInfo/pg-4.png";
import contactIcon from "@/assets/img/homepage/CSInfo/action.png";
export default {
  data() {
    return {
      contactIcon: contactIcon,
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
      <!-- <div class="LimitBox" v-for="(item, index) in IMG">
        <div class="zoom"> -->
          <div class="PicBox" v-for="(item, index) in IMG" >
            <div class="pic">
            <div class="container">
              <img :src="item.pic" alt="">
            </div>
            </div>
            <div class="title">{{ item.title }}</div>
          </div>
          <!-- <img :src="item.pic" alt=""/> -->
        <!-- </div>
      </div> -->
    </div>
    <!-- <div class="shake-slow shake-constant contact">
      <RouterLink
        to="/connection"
        :class="{ navBar: true, active: activeLink === 'connection' }"
        @click="setActiveLink('connection')"
      >
        <img :src="contactIcon" alt="" class="contactIconBtn" />
      </RouterLink>
    </div> -->
  </div>
</template>
<style lang="scss" scoped>

// 課程資訊
.CourseInfoBG {
  @apply flex flex-col items-center  w-[100%] h-[615px] ;
  .CourseInfo {
    @apply flex gap-[10px] justify-between w-[1403px] h-[369px] pt-[96px];
    .PicBox{
      @apply  w-[420px] h-[462px]  ;
      .title{@apply  flex justify-center items-center h-[calc(462px_-_380px)] w-[337px] text-[1.625rem] text-[#FFFFFF]  bg-[rgba(0,0,0,0.45)] }
      .pic{@apply   h-[380px] ;
      .container{@apply h-[300px]}
      }
    }
  }
}

// hover效果

.container:hover {
	cursor: pointer;
}
.container img {
	filter: grayscale(90%);
	transition: filter 0.4s ease-in-out;
}

.container:hover img {
	filter: none;
}

.PicBox .container:hover .title {
	background-color: yellow;
}

// 搖擺圖
// .contactIconBtn {
//   @apply w-[850px] h-[330px] mt-[200px];
// }
// .contact {
//   @apply relative;
// }
// .contact::after {
//   content: "報名歡迎來電洽詢！";
//   position: absolute;
//   top: 52%;
//   left: 25%;
//   // background-color: red;
//   font-family: ChenYuluoyan;
//   font-size: 4.25rem;
//   color: #ffffff;
// }
// .shake-slow {
//   display: inherit;
//   transform-origin: center center;
// }
// .shake-freeze,
// .shake-constant.shake-constant--hover:hover,
// .shake-trigger:hover .shake-constant.shake-constant--hover {
//   animation-play-state: paused;
// }
// .shake-freeze:hover,
// .shake-trigger:hover .shake-freeze,
// .shake-slow:hover,
// .shake-trigger:hover .shake-slow {
//   animation-play-state: running;
// }
// @keyframes shake-slow {
//   2% {
//     transform: translate(2px, -2px) rotate(3.5deg);
//   }
//   4% {
//     transform: translate(7px, 3px) rotate(-0.5deg);
//   }
//   6% {
//     transform: translate(6px, 3px) rotate(0.5deg);
//   }
//   8% {
//     transform: translate(4px, 7px) rotate(0.5deg);
//   }
//   10% {
//     transform: translate(-8px, 3px) rotate(1.5deg);
//   }
//   12% {
//     transform: translate(3px, -6px) rotate(-2.5deg);
//   }
//   14% {
//     transform: translate(2px, -8px) rotate(1.5deg);
//   }
//   16% {
//     transform: translate(2px, 7px) rotate(2.5deg);
//   }
//   18% {
//     transform: translate(1px, 5px) rotate(-1.5deg);
//   }
//   20% {
//     transform: translate(-1px, 0px) rotate(0.5deg);
//   }
//   22% {
//     transform: translate(1px, -2px) rotate(3.5deg);
//   }
//   24% {
//     transform: translate(1px, -8px) rotate(-2.5deg);
//   }
//   26% {
//     transform: translate(-7px, -6px) rotate(3.5deg);
//   }
//   28% {
//     transform: translate(-6px, -5px) rotate(3.5deg);
//   }
//   30% {
//     transform: translate(9px, -7px) rotate(-1.5deg);
//   }
//   32% {
//     transform: translate(3px, 5px) rotate(3.5deg);
//   }
//   34% {
//     transform: translate(10px, -9px) rotate(-1.5deg);
//   }
//   36% {
//     transform: translate(8px, -8px) rotate(3.5deg);
//   }
//   38% {
//     transform: translate(-9px, 5px) rotate(0.5deg);
//   }
//   40% {
//     transform: translate(-3px, -9px) rotate(1.5deg);
//   }
//   42% {
//     transform: translate(5px, 7px) rotate(1.5deg);
//   }
//   44% {
//     transform: translate(-4px, 1px) rotate(-0.5deg);
//   }
//   46% {
//     transform: translate(3px, 1px) rotate(1.5deg);
//   }
//   48% {
//     transform: translate(-9px, 6px) rotate(2.5deg);
//   }
//   50% {
//     transform: translate(1px, 3px) rotate(-2.5deg);
//   }
//   52% {
//     transform: translate(7px, -9px) rotate(2.5deg);
//   }
//   54% {
//     transform: translate(10px, 4px) rotate(-0.5deg);
//   }
//   56% {
//     transform: translate(3px, -5px) rotate(1.5deg);
//   }
//   58% {
//     transform: translate(4px, -3px) rotate(-0.5deg);
//   }
//   60% {
//     transform: translate(9px, 5px) rotate(-1.5deg);
//   }
//   62% {
//     transform: translate(8px, -9px) rotate(0.5deg);
//   }
//   64% {
//     transform: translate(-8px, -9px) rotate(-1.5deg);
//   }
//   66% {
//     transform: translate(-9px, -1px) rotate(1.5deg);
//   }
//   68% {
//     transform: translate(-4px, -2px) rotate(3.5deg);
//   }
//   70% {
//     transform: translate(-2px, 6px) rotate(-2.5deg);
//   }
//   72% {
//     transform: translate(3px, 1px) rotate(1.5deg);
//   }
//   74% {
//     transform: translate(-4px, -3px) rotate(2.5deg);
//   }
//   76% {
//     transform: translate(3px, 1px) rotate(-0.5deg);
//   }
//   78% {
//     transform: translate(8px, 0px) rotate(2.5deg);
//   }
//   80% {
//     transform: translate(10px, -6px) rotate(2.5deg);
//   }
//   82% {
//     transform: translate(-4px, 6px) rotate(1.5deg);
//   }
//   84% {
//     transform: translate(-2px, 2px) rotate(3.5deg);
//   }
//   86% {
//     transform: translate(-5px, 3px) rotate(2.5deg);
//   }
//   88% {
//     transform: translate(7px, -4px) rotate(2.5deg);
//   }
//   90% {
//     transform: translate(10px, 9px) rotate(-0.5deg);
//   }
//   92% {
//     transform: translate(8px, 4px) rotate(0.5deg);
//   }
//   94% {
//     transform: translate(7px, 10px) rotate(2.5deg);
//   }
//   96% {
//     transform: translate(2px, -2px) rotate(-0.5deg);
//   }
//   98% {
//     transform: translate(-1px, -5px) rotate(3.5deg);
//   }
//   0%,
//   100% {
//     transform: translate(0, 0) rotate(0);
//   }
// }
// .shake-slow:hover,
// .shake-trigger:hover .shake-slow,
// .shake-slow.shake-freeze,
// .shake-slow.shake-constant {
//   animation-name: shake-slow;
//   animation-duration: 20s;
//   animation-timing-function: ease-in-out;
//   animation-iteration-count: infinite;
// }
</style>
