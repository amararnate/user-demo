<template>
    <header-layout></header-layout>
    <div class="main">
        <router-view/>
    </div>
    <footer-layout></footer-layout>
</template>

<script>
import HeaderLayout from "@/components/layout/HeaderLayout";
import FooterLayout from "@/components/layout/FooterLayout";

export default {
    name: 'app',
    components: {
        HeaderLayout,
        FooterLayout
    }
}
</script>
<style scoped>

.main {
    position: absolute;
    top: 80px;
    width: 99%;
    height: 100%;
}
</style>
