<template>
    <header class="fixed-header">
        <div class="header-container">
            <div class="align-center">
                <div class="logo">
                    <router-link to="/" exact>
                        <img :src="logoImage">
                    </router-link>
                </div>
                <div>
                    <label class="header-name">GitHub Userboard</label>
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