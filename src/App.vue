<template>
    <header-layout></header-layout>
    <div class="container">
        <router-view/>
    </div>
    <footer-layout></footer-layout>
</template>

<script>
import HeaderLayout from "@/components/layout/HeaderLayout";
import FooterLayout from "@/components/layout/FooterLayout";
import '@/assets/css/app.css'

export default {
    name: 'app',
    components: {
        HeaderLayout,
        FooterLayout
    }
}
</script>