<script>
export default {
    props: {
        studentData: {
            type: Number,
        }
    },
};
</script>
<template>
    <div class="w-[180px] h-[180px] bg-[red] border-[2px] text-center ">{{ studentData }}</div>
</template>
<style></style>