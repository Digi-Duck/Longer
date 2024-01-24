<script>
export default {};
</script>
<template>
  <div class="TitleBG">
    <div class="text">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.TitleBG {
  @apply flex items-center h-[152px] w-[100%] bg-MainColorBG;
  .text {
    // 第一行是所有文字外框都共用的樣式
    @apply flex items-center justify-center w-[300px] h-[72px] text-[3.25rem] font-[ChenYuluoyan] font-medium  bg-[url('@/assets/img/homepage/CommonIcon/YLdraw.svg')];
  }
}
</style>
