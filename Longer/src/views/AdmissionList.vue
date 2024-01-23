<script>
import NavCurve from "@/components/NavCurve.vue"
export default {
  data() {
    return {};
  },
  omponents: { HomeTitle,NavCurve },
  mounted() {
    document.addEventListener("DOMContentLoaded", function () {});
  },
  methods: {
    controlA() {
      const svgElement = document.querySelector(".pen");

      window.addEventListener("scroll", function () {
        // 計算滾動位置相對於文檔高度的百分比
        const scrollPercentage =
          (window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
          100;

        // 將百分比應用到動畫中，假設 1% 對應動畫的 1%
        const animationPercentage = Math.min(scrollPercentage, 100);
        svgElement.style.setProperty(
          "--scroll-progress",
          animationPercentage + "%"
        );
      });
    },
  },
};
</script>
<template >
  <NavCurve></NavCurve>
  <div class="text-[80px]">歷年榜單</div>
  <div class="s-1">
    <svg
      class="pen"
      width="1881"
      height="479"
      viewBox="0 0 1881 479"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1001.09 160.456L1001.1 160.456C1089.24 170.682 1182 181.442 1264.24 195.787C1215.64 243.118 1192.28 311.494 1202.84 379.643L1210.33 427.993C1135.68 417.789 1054.48 402.916 975.837 388.51C911.345 376.697 848.568 365.198 792.516 356.844C503.677 313.797 -74.0208 195.744 -63.3262 123.985C-52.6316 52.2253 536.248 95.2507 825.087 138.298C877.77 146.149 938.263 153.167 1001.09 160.456ZM1230.99 430.716C1290.4 438.241 1344.97 442.391 1389.87 440.438C1400.75 439.965 1410.84 438.662 1420.16 436.697C1374.79 422.547 1345.22 377.073 1352.45 328.593C1359.57 280.786 1400.06 246.206 1446.77 244.964C1440.16 241.494 1432.94 238.272 1425.06 235.361C1387.52 221.488 1340.82 210.076 1289.08 200.296C1237.74 243.156 1212.28 309.988 1222.6 376.579L1230.99 430.716Z"
        fill="#000"
      />
      <path
        d="M1764.6 346.143C1766.93 360.772 1780.22 397.446 1809.36 408.218C1838.62 419.034 1885.6 408.953 1880.47 421.836C1860.41 472.25 1697.74 465.477 1640.27 474.636C1553.48 488.467 1456.4 470.124 1442.57 383.336C1428.74 296.548 1474.08 248.986 1560.87 235.155C1658.84 236.892 1730.22 275.195 1764.6 346.143Z"
        fill="#000"
      />
    </svg>
  </div>
</template>
<style lang="scss">
.s-1 {
  position: relative;
  background-color: antiquewhite;
  height: 100vh;
  .pen {
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  path {
    stroke: red;
    fill: red;
    stroke-width: 10;
    stroke-dashoffset: 0;
    stroke-dasharray: 3000;
    animation: animate 7s ease-in-out;
  }

  @keyframes animate {
    0% {
      stroke-dashoffset: 3000;

      fill-opacity: 0;
    }
    55% {
      stroke-dashoffset: 0;
    }
    100% {
      fill-opacity: 1;
    }
  }
}
</style>
