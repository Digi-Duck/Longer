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
    <section class="introduce">
        <HomeTitle class="pl-[13px]">畫室介紹</HomeTitle>
    </section>
</template>
<style lang="scss" scoped>
    .banner{
        @apply w-[100%] h-[calc(100vh_-_250px)] bg-gradient-to-l from-[url('../assets/img/generic/banner.png')] to-[blue];
    }
    .introduce{
        @apply w-[100%] h-[calc(100vh_-_152px)] bg-[url('../assets/img/generic/banner.png')] bg-cover bg-no-repeat;
    }
</style>