<script>
import StudentWork from "@/components/homepage/StudentWork.vue";
export default {

    // import TheWelcome from '../components/TheWelcome.vue'
    components: { StudentWork },
    data() {
        return {
            studentData: [1, 2, 3, 4, 5],
        }
    },
}
</script>
<template lang="">
    <div class="text-[80px] ">
        學生作品
    </div>
        <StudentWork></StudentWork>

</template>
<style lang="">
    
</style>