<script>
import HomeTitle from "@/components/homepage/HomeTitle.vue";

export default {
    components: { HomeTitle },

}
</script>
<template lang="">
    <!-- 課程資訊主要內容 -->
    <main>
        <section>
            <HomeTitle class="pl-[13px]">課程資訊</HomeTitle>
            <div class="container">
                <div class="content">
                    <div class="img-area"></div>
                    <div class="text-area"></div>
                </div>
            </div>
        </section>
    </main>
</template>
<style lang="scss" scoped>
    main{
        @apply w-full h-[3000px] pt-0 bg-MainColorBG;

        section{
            @apply max-w-[1215px] mx-[auto];
        }
    }
</style>