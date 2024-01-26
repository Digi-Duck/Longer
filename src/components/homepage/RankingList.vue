<script>
import BookCover from "@/assets/img/homepage/sign.png";
export default {
  data() {
    return {
      flag: false,
      img: BookCover,
      RankNumber: [
        {
          year: 106,
          details: [
            { name: "陳O瑩", school: "東海大學美術研究所" },
            { name: "蘇　O", school: "朝陽科技大學建築研究所" },
            { name: "林O安", school: "國立台北藝術大學動畫系" },
            { name: "何O聿", school: "國立台北藝術大學美術系" },
            { name: "黃O頤", school: "國立台灣藝術大學古蹟維護系" },
            { name: "劉O妤", school: "國立彰化師範大學美術系" },
            { name: "陳O禧", school: "國立台北教育大學藝術與造形設計學系" },
            { name: "趙O萱", school: "國立台北教育大學藝術與造形設計學系" },
            { name: "林O廷", school: "國立嘉義大學視覺藝術學系" },
            { name: "楊O慈", school: "國立雲林科技大學創意生活設計系" },
            { name: "蘇O柔", school: "國立高雄應用科技大學文化創意產業系" },
            { name: "謝O佑", school: "國立金門大學建築系" },
            { name: "楊O萱", school: "銘傳大學商品設計系" },
            { name: "何O萱", school: "銘傳大學數位媒體設計系" },
            { name: "陳O嘉", school: "實踐大學建築系" },
            { name: "劉O芳", school: "東海大學景觀系" },
            { name: "蔡O弘", school: "東海大學工業設計系(轉學)" },
            { name: "洪O鈞", school: "逢甲大學都市計畫與空間資訊組" },
            { name: "林O君", school: "亞洲大學視覺傳達設計系企業形象設計組" },
            { name: "楊O霖", school: "亞洲大學時尚設計學系精品設計組" },
            { name: "陳O毓", school: "朝陽科技大學景觀及都市設計系" },
            { name: "林O俞", school: "僑光科技大學電腦輔助工業設計系產品設計" },
            { name: "詹O茹", school: "崑山科技大學視覺傳達設計系" },
            { name: "廖O瑋", school: "崑山科技大學視覺傳達設計系" },
            { name: "蔡O紋", school: "南開科技大學文化創意與設計系" },
            { name: "賴O禎", school: "豐原高中美術班" },
            { name: "施O綺", school: "五權國中美術班" },
            { name: "廖O筑", school: "五權國中美術班" },
            { name: "王O呈", school: "五權國中美術班" },
            { name: "黃O靜", school: "五權國中美術班" },
            { name: "何O芝", school: "五權國中美術班" },
            { name: "徐O瑩", school: "五權國中美術班" },
            { name: "魏O涵", school: "五權國中美術班" },
            { name: "黃O淇", school: "至善國中美術班" },
            { name: "游O蔚", school: "至善國中美術班" },
          ],
        },
        {
          year: 105,
          details: [
            {
              name: "廖O輔",
              school: "國立新竹教育大學藝術與設計系創作組(素描90分彩繪90分)",
            },
            { name: "周O恩", school: "國立台南大學視覺藝術與設計系(創意93分)" },
            { name: "洪O昇", school: "國立嘉義大學視覺藝術系" },
            { name: "林O熙", school: "國立台科大工商業設計系(術科滿分)" },
            { name: "望O閔", school: "國立台科大建築系" },
            { name: "李O芳", school: "國立雲科大數位媒體設計系" },
            { name: "林O晟", school: "國立台中科大室內設計系" },
            { name: "廖O敏", school: "大同大學工業設計系" },
            { name: "楊O樂", school: "銘傳大學商品設計學系" },
            { name: "楊O綺", school: "亞洲大學時尚設計學系(時尚服裝設計組)" },
            { name: "廖O媜", school: "亞洲大學時尚設計學系(時尚服裝設計組)" },
            { name: "游O尹", school: "大葉大學工業設計系" },
            { name: "柳O宜", school: "大葉大學工業設計系" },
            { name: "米O蒨", school: "朝陽科大建築系室內設計組" },
            { name: "江O雄", school: "朝陽科大視覺傳達設計系" },
            { name: "吳O筳", school: "明志科大視覺傳達系" },
            { name: "林O穎", school: "嶺東科大視覺傳達系" },
            { name: "呂O泰", school: "嶺東科大數位媒體設計系" },
            { name: "劉O伶", school: "嶺東科大創意產品設計系" },
            { name: "邱O婷", school: "台南應用科大視覺傳達系" },
            { name: "陳O吟", school: "台南應用科大商品設計系" },
            { name: "廖O閔", school: "僑光科大多媒體與遊戲設計系" },
            { name: "賴O湘", school: "僑光科大多媒體與遊戲設計系" },
            { name: "蔡O穎", school: "東方設計學院遊戲動畫系" },
            { name: "楊O翔", school: "實踐大學服裝設計與經營學系" },
            { name: "鄭O晴", school: "國立豐原高中美術班" },
            { name: "楊O伃", school: "國立竹山高中美術班" },
            { name: "劉O沛", school: "國立竹山高中美術班" },
            { name: "郭O嘉", school: "明道中學美工科(特招)" },
            { name: "萬O孜", school: "僑泰中學多媒體動畫科(特招)" },
            { name: "廖O汝", school: "五權國中美術班" },
            { name: "孟O勖", school: "五權國中美術班" },
            { name: "饒O甄", school: "五權國中美術班" },
            { name: "余O萱", school: "大華國中美術班" },
            { name: "羅O文", school: "五權國中美術班" },
            // ... (other data for year 105)
          ],
        },
      ],
    };
  },
  mounted() {},
  methods: {
    // 如果class="PageTurn" 被check，after會消失一段時間
    VanishShadow() {
      console.log("翻書了");

      setTimeout(() => {
        this.flag = !this.flag;
      }, "500");
    },
  },
  computed: {},
};
</script>
<template>
  <div class="RankingBG">
    <div class="cover">
      <div class="book">
        <label for="page-1" class="book__page book__page--1">
          <img src="@/assets/img/homepage/sign.png" alt="" />
        </label>

        <label for="page-2" class="book__page book__page--4">
          <!-- 我是第3頁 -->
          <div class="page__content truncate">
            <h1>104年</h1>
            <table>
              <thead>
                <tr>
                  <th>姓名</th>
                  <th>學校與系所</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in RankNumber[0].details" :key="item.id">
                  <td>{{ item.name }}</td>
                  <td>{{ item.school }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="page__number">3</div>
        </label>

        <!-- Resets the page -->
        <input
          @change="VanishShadow()"
          class="PageTurn"
          type="radio"
          name="page"
          id="page-1"
        />

        <!-- Goes to the second page -->
        <input
          @change="VanishShadow()"
          class="PageTurn"
          type="radio"
          name="page"
          id="page-2"
        />
        <label class="book__page book__page--2">
          <div class="book__page-front">
            <!-- 暫時把多的切掉 -->
            <div class="page__content truncate">
              <!-- 我是第1頁 -->
              <h1>106年</h1>
              <table>
                <thead>
                  <tr>
                    <th>姓名</th>
                    <th>學校與系所</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in RankNumber[0].details" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.school }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="book__page-back">
            <div class="page__content">
              <!-- 我是第2頁 -->
              <div class="page__content truncate">
                <h1>105年</h1>
                <table>
                  <thead>
                    <tr>
                      <th>姓名</th>
                      <th>學校與系所</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in RankNumber[0].details" :key="item.id">
                      <td>{{ item.name }}</td>
                      <td>{{ item.school }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="page__number">2</div>
            </div>
          </div>
        </label>
      </div>
      <transition>
        <RouterLink to="/admissionList" v-show="flag" class="navBar more"
          >更多優良榜單 ></RouterLink
        >
      </transition>
    </div>
    <!-- 更多 -->
  </div>
</template>
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

// bg-[MainColorBG]
.RankingBG {
  @apply w-[100%] h-[800px] bg-MainColorBG flex items-center justify-center pt-[20%];

  .cover {
    @apply relative shadow-lg w-[1429px] h-[647px];
  }

  // img {
  //   @apply border border-[rgba(0,0,0,0.06)] border-l-8;
  // }
  .cover:after {
    content: "";
    display: block;
    width: 150px;
    height: 647px;
    background: linear-gradient(
      90deg,
      rgba(227, 225, 217, 0.02) 0%,
      rgba(208, 206, 198, 0.05) 10%,
      rgba(208, 206, 198, 0.08) 15%,
      rgba(121, 119, 116, 0.1) 25%,
      rgba(121, 119, 116, 0.25) 50%,
      rgba(121, 119, 116, 0.1) 75%,
      rgba(208, 206, 198, 0.08) 85%,
      rgba(208, 206, 198, 0.05) 90%,
      rgba(227, 225, 217, 0.02) 100%
    );
    position: absolute;
    top: 0px;
    left: 660px;
  }

  .cover:before {
    content: "";
    display: block;
    width: 100px;
    height: 100px;
    background: #372011;
    position: absolute;
    border-radius: 50%;
    top: 560px;
    left: 680px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  }

  .book {
    @apply border-8 border-[#56331a] shadow-2xl shadow-[#56331a] rounded-md;
  }

  table {
    font-family: "Oswald", sans-serif;
    border-collapse: collapse;

    th {
      width: 25vw;
      height: 75px;
    }

    td {
      width: 25vw;
      height: 50px;
      text-align: center;
    }
  }

  .more {
    @apply block bg-[#8a7c6b] p-6 absolute right-[-55px] top-[280px] rounded-lg text-[#FFFFFF] shadow-lg;
  }

  .more:hover {
    @apply bg-MainColorBG;
  }
}

// @import url("https://fonts.googleapis.com/css?family=Cormorant+Garamond:300,400,600|Tulpen+One&display=swap");

:root {
  /* spacing */
  /* this is what defines the global scale */
  --baseline: 12px;

  /* fonts */
  --book-title: "Tulpen One", sans-serif;
  --title: "Cormorant Garamond", serif;
  --body: "Cormorant Garamond", serif;
  --base-size: var(--baseline) * 1.2;
}

// body {
//   background-color: var(--body-bg);
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// }

.book {
  // 依設計大小
  width: 1429px;
  height: 647px;
  display: flex;
  perspective: 1200px;

  &__page {
    position: relative;
    width: 50%;
    height: 100%;
    display: grid;
    transform: rotateY(0deg);
    transition: transform 0.9s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform-origin: 0% 0%;
    background-color: var(--page-bg);
    background-image: linear-gradient(
      90deg,
      rgba(227, 227, 227, 1) 0%,
      rgba(249, 4, 4, 0) 18%
    );

    &:nth-of-type(1) {
      background-image: linear-gradient(
        -90deg,
        rgba(227, 227, 227, 1) 0%,
        rgba(247, 247, 247, 0) 18%
      );
    }

    // 封面圖片
    &--1 {
      cursor: pointer;
      overflow: hidden;

      img {
        // border-radius: 10%;
        width: 100%;
        // max-width: 100%;
        height: 100%;
      }
    }

    &--2 {
      position: absolute;
      right: 0;
      pointer-events: none;
      transform-style: preserve-3d;
      // background-color: var(--page-bg);

      background-image: linear-gradient(
        90deg,
        rgba(227, 227, 227, 1) 0%,
        rgba(247, 247, 247, 0) 18%
      );
    }

    &--4 {
      cursor: pointer;
      padding: 0 calc(var(--baseline) * 3);
    }

    &-front {
      position: absolute;
      width: 100%;
      height: 100%;
      transform: rotateY(0deg) translateZ(1px);
    }

    &-back {
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 0 calc(var(--baseline) * 1.8);
      transform: rotateY(180deg) translateZ(1px);
    }

    // 內文的大小設定
    .page__content {
      // 可能要調整
      padding: 30px;
      height: 100%;
      position: relative;
      background-color: #e3e1d9;
      text-align: center;

      // box-shadow: 30px 0px 0px 0px rgba(0, 0, 0, 1);
      // &-book-title {
      //   font-family: var(--book-title);
      //   // font-size: calc(var(--base-size) * 3);
      //   font-weight: bold;
      //   text-transform: uppercase;
      //   letter-spacing: 3px;
      //   color: var(--dark-text);
      //   margin-top: calc(var(--baseline) * 5);
      //   margin-bottom: calc(var(--baseline) * 2);
      // }

      // &-author {
      //   font-family: var(--title);
      //   font-size: calc(var(--base-size) * 1.2);
      //   font-weight: 100;
      //   text-transform: uppercase;
      //   color: var(--dark-text);
      //   border-top: 1px solid var(--dark-text);
      //   border-bottom: 1px solid var(--dark-text);
      //   display: inline-block;
      //   padding: calc(var(--baseline) / 2) calc(var(--baseline) / 5);
      //   margin-bottom: calc(var(--baseline) * 6);
      // }

      // &-credits {
      //   font-family: var(--title);
      //   text-transform: uppercase;
      //   font-size: calc(var(--base-size) * 0.8);
      //   margin-bottom: calc(var(--baseline) * 2);
      //   letter-spacing: 1px;

      //   span {
      //     display: block;
      //     font-size: calc(var(--base-size) * 1.2);
      //     letter-spacing: 0;
      //   }
      // }

      // &-copyright {
      //   position: absolute;
      //   width: calc(100% - (var(--baseline) * 2));
      //   bottom: calc(var(--baseline) * 2);
      //   font-family: var(--title);
      //   font-size: calc(var(--base-size) * 0.8);
      //   text-transform: uppercase;
      // }

      // &-title {
      //   font-family: var(--title);
      //   font-size: calc(var(--base-size) * 1);
      //   text-transform: uppercase;
      //   letter-spacing: 1px;
      //   margin-top: calc(var(--baseline) * 5);
      //   margin-bottom: calc(var(--baseline) * 3);
      // }

      // &-table {
      //   width: 100%;
      //   margin-top: calc(var(--baseline) * 2);

      //   td {
      //     font-family: var(--title);
      //     font-size: calc(var(--base-size) * 1);
      //     padding-bottom: calc(var(--baseline) * 1.5);
      //     text-transform: uppercase;
      //   }
      // }

      // &-blockquote {
      //   margin-bottom: calc(var(--baseline) * 2);
      // }

      // &-blockquote-text {
      //   font-family: var(--title);
      //   font-size: calc(var(--base-size) * 0.67);
      //   font-style: italic;
      //   text-align: justify;
      // }

      // &-blockquote-reference {
      //   font-family: var(--title);
      //   font-size: calc(var(--base-size) * 0.7);
      //   margin-top: calc(var(--baseline) * 0.3);
      //   float: right;
      //   text-transform: uppercase;
      // }

      // &-text {
      //   font-family: var(--title);
      //   font-size: calc(var(--base-size) * 0.67);
      //   text-align: justify;
      //   text-indent: var(--baseline);
      // }
    }

    .page__number {
      position: absolute;
      bottom: var(--baseline);
      width: calc(100% - (var(--baseline) * 2));
      font-family: var(--title);
      font-size: calc(var(--base-size) * 0.67);
      text-align: center;
    }
  }

  input[type="radio"] {
    display: none;

    &:checked + .book__page {
      transition: transform 0.9s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform: rotateY(-180deg);
    }
  }
}
</style>
