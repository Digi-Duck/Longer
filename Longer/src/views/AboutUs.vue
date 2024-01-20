<script>
import HomeTitle from "@/components/homepage/HomeTitle.vue";
import About1 from "@/assets/img/about_us_ph/About1.png";
export default {
    components: { HomeTitle },
    data() {
        return {
            AboutUsPH: [About1],
        }
    },
};
</script>
<template>
    <div class="AboutUsBg">
        <HomeTitle class="pl-[138px]">關於我們</HomeTitle>
        <section class="content">
            <div class="ct-h">
                <img :src="AboutUsPH[0]" alt="">
            </div>
            <div class="ct-h ">
                <div class="ct-text-1">
                    <h1 class="text-[2rem]">龍格畫室</h1>
                    <p>一間成立於1994年的小畫室，位在三民路的小巷裡，由丁建中老師從零開始緩緩耕耘，至今已成為在地人口耳相傳的老字號畫室。</p>
                    <p>沒有多餘的廣告宣傳畫室，老師透過實力及教學熱忱，打動每位前來學習的學生，也為龍格畫室建立了最佳的口碑。</p>
                    <p>老師期盼能幫助每個對夢想懷抱憧憬的孩子，成為他們在追尋理想的人生道路上，一盞指引前方的燈塔。 </p>
                </div>

            </div>
        </section>
        <HomeTitle class="pl-[138px]">教學特色</HomeTitle>
        <section class="content">
            <div class="ct-a">
                <ul class="ct-text-2">
                    <li>一、程度鑑定．甫報名課程皆會做程度鑑定，以利課程規劃</li>
                    <li>二、專屬課表．老師依照程度與學習目標的不同，為每位學生設計專屬的課程表</li>
                    <li>三、升學集訓班．從國中美術班至升大學術科考試，皆有開設升學考試集中訓練班</li>
                    <li>四、彈性課表．自選上課時段</li>
                    <li>五、小班制教學．同一時段授課學生不超過15位，顧及每位學生的學習進度和教學品質</li>
                </ul>
            </div>

        </section>
    </div>
</template>
<style lang="scss" scoped>
* {
    @apply box-border;
}

.AboutUsBg {
    @apply flex flex-col items-center h-[1240px] w-[100%] bg-MainColorBG;

    .content {
        @apply flex justify-center;

        .ct-h {
            @apply w-[50%] flex flex-col justify-center items-center;

            .ct-text-1 {
                @apply w-[60%] flex flex-col;

                p {
                    @apply tracking-widest mt-5;
                }
            }
        }

        .ct-a {
            .ct-text-2 {
                @apply tracking-[.4rem];

                li {
                    @apply mt-[24px];
                }
            }
        }
    }

}
</style>