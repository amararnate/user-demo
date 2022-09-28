<template>
    <footer class="footer align-center fixed-footer">
        <div>
            <div class="footer-logo">
                <a href="https://github.com" target="_blank">
                    <img :src="logoImage">
                </a>
            </div>
            <div>
                <label class="site-right-label">@ All rights reserved, {{ getCurrentYear() }}</label>
            </div>
        </div>
    </footer>
</template>

<script>
import logo from '../../assets/logo-Vector.png';

export default {
    name: 'header-layout',
    props: {},
    data: function () {
        return {
            logoImage: logo,
        }
    },
    methods: {
        getCurrentYear: () => {
            return new Date().getFullYear();
        }
    }
}
</script>
