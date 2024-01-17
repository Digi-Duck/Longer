<script>
import HomeTitle from "@/components/homepage/HomeTitle.vue";
export default {
    components: { HomeTitle },
    data(){
        return{
        }
    }
}
</script>
<template lang="">
    <!-- <div class="text-[80px]">
        聯絡資訊-(主頁Banner、畫室介紹)
    </div> -->
    <section class="banner">

    </section>
    <HomeTitle class="pl-[13px]">畫室介紹</HomeTitle>
    <section class="introduce">
        <section class="introduce-text">
            <p class="title">龍格畫室</p>
            <p>一間成立於1994年的小畫室</p>
            <p>位在三民路的小巷裡，由丁建中老師從零開始默默耕耘</p>
            <p>至今已成為在地人口耳相傳的老字號畫室。</p>
        </section>
    </section>
</template>
<style lang="scss" scoped>
    .banner{
        @apply w-[100%] h-[calc(100vh_-_160px)] bg-[url('../assets/img/generic/banner.png')] bg-cover bg-no-repeat;
    }
    .introduce{
        @apply flex justify-center items-end w-[100%] h-[calc(100vh_-_152px)] pl-[150px] bg-[url('../assets/img/generic/introduce.png')] bg-cover bg-no-repeat;
        writing-mode: vertical-rl;
        .title{
            @apply text-[40px] relative top-[-50px];

        }
        .introduce-text{
            @apply text-[24px];

            p{
                @apply m-[10px];
            }
        }
    }
</style>