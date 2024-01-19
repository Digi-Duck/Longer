<script>
import StudentWork from "@/components/homepage/StudentWork.vue";
import AboutTeacher from "@/components/homepage/AboutTeacher.vue";

export default {

    // import TheWelcome from '../components/TheWelcome.vue'
    components: { StudentWork, AboutTeacher },
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
    
    <AboutTeacher></AboutTeacher>
    
    
    

</template>
<style lang="">
    
</style>