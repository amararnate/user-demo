<template>
    <footer class="footer align-center">
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

<style scoped>
.footer {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 80px;
    background: #24292F;
    box-shadow: 0px 12px 36px rgba(204, 204, 204, 0.25);
}

.site-right-label {
    color: white;
}

.footer-logo {
    display: flex;
    justify-content: center;
}
</style>
