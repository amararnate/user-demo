<template>
    <header class="header">
        <div class="container">
            <div class="align-center">
                <div class="logo">
                    <router-link to="/" exact>
                        <img :src="logoImage">
                    </router-link>
                </div>
                <div class="header-name">
                    <a>GitHub Userboard</a>
                </div>
            </div>
            <div class="search-bar">
                <input class="search-input" type="text" v-model="searchInput" @keyup="searchUsers"/>
                <img class="search-icon" :src="inputSearchIcon">
            </div>
        </div>
    </header>
</template>

<script>
import logo from '../../assets/logo-Vector.png'
import inputSearch from '../../assets/input-search.png'

export default {
    name: 'header-layout',
    data: function () {
        return {
            logoImage: logo,
            inputSearchIcon: inputSearch,
            searchInput: '',
        }
    },
    methods: {
        searchUsers: function () {
            this.$store.dispatch('searchRecords', this.searchInput);
        }
    }
}
</script>

<style>

.header {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 80px;
    background: #24292F;
    box-shadow: 0px 12px 36px rgba(204, 204, 204, 0.25);
}

.container {
    padding-left: 150px;
    padding-right: 150px;
    height: 100%;
    position: relative;
    align-items: center;
    display: flex;
    justify-content: space-between;
}

.header-name a {
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.search-bar {
    position: relative;
}

.search-input {
    background: #FFFFFF;
    border-radius: 12px;
    width: 231px;
    height: 32px;
}

.search-icon {
    position: absolute;
    left: 4%;
    right: 0%;
    top: 32%;
    bottom: 0%;
    width: 15px;
}

.header-name {
    margin-left: 40px;
}

.align-center {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
