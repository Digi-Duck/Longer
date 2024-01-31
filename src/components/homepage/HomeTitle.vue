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
  @apply flex items-center justify-center  w-[100%];
  .text {
    // 第一行是所有文字外框都共用的樣式
    @apply flex items-center justify-center font-[ChenYuluoyan] stroke-[black] font-medium  
    lg:h-[72px] md:h-[48px] h-[36px]  
    lg:w-[300px] md:w-[203px] w-[146px]
    xl:mt-[61px] lg:mt-[207px] md:mt-[54px] mt-[0px]
    lg:bg-[url('@/assets/img/homepage/CommonIcon/YLdraw.svg')]
    md:bg-[url('@/assets/img/homepage/CommonIcon/YLdrawLaptop.svg')]
    bg-[url('@/assets/img/homepage/CommonIcon/YLdrawMobile.svg')]
    bg-contain bg-no-repeat bg-center 
    xl:text-[4rem]
    lg:text-[3.25rem]
    md:text-[1.875rem]
    text-[1.75rem];
  }
}
</style>
