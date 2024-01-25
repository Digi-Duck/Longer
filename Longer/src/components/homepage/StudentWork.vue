<script>
import piece1 from '@/assets/img/homepage/STpiece/STpiece_1.svg';
import piece2 from '@/assets/img/homepage/STpiece/STpiece_2.svg';
import piece3 from '@/assets/img/homepage/STpiece/STpiece_3.svg';
import piece4 from '@/assets/img/homepage/STpiece/STpiece_4.svg';
import piece5 from '@/assets/img/homepage/STpiece/STpiece_5.svg';
import piece6 from '@/assets/img/homepage/STpiece/STpiece_6.svg';
import piece7 from '@/assets/img/homepage/STpiece/STpiece_7.svg';
import piece8 from '@/assets/img/homepage/STpiece/STpiece_8.svg';
import piece9 from '@/assets/img/homepage/STpiece/STpiece_9.svg';
import piece10 from '@/assets/img/homepage/STpiece/STpiece_10.svg';
export default {
    data() {
        return {
            stPiece: [piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8, piece9, piece10, piece1, piece2, piece3, piece4],
        }
    },
    mounted() {
        console.log(this.stPiece);
    },
};
</script>
<template>
    <!-- <h1 class="text-center ">Infinite Scroll Animation</h1> -->
    <div>
        <!-- 雅芬0121 補一個pt-[96px]為了排版首頁 -->
        <div class="  m-auto  overflow-hidden  scroll pt-[110px]">
            <div class="tag-list  pt-[1rem] pb-[1rem] flex flex-nowrap gap-[1rem]">
                <img v-for="(item, index) in stPiece" :key="item.id" :src="stPiece[index]" />

            </div>
        </div>
    </div>
</template>
<style scoped>
@keyframes scroll {
    to {
        transform: translateX(-150%);
    }
}

.tag-list {
    margin: 0;
    padding-inline: 0;
    list-style: none;
    animation: scroll 70s linear infinite;
}
</style>