<template>
    <div>
        <h1 class="user-list-title align-center">Top Users</h1>
        <div class="user-lists">
            <div v-for="user in filteredUserLists" :key="user.id" class="user align-center">
                <div>
                    <div class="user-image">
                        <img :src="user.avatar_url">
                    </div>
                    <div class="user-login-name align-center">
                        <label>{{ user.login }}</label>
                    </div>
                    <div class="github-link align-center">
                        <router-link :to="'/'+user.login" exact>
                            <a>
                                <img :src="linkIcon" class="link-icon">
                                <span>github</span>
                            </a>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="align-center" v-if="filteredUserLists.length === 0">
            <h2>Users not found.</h2>
        </div>
    </div>
</template>

<script>
import linkIcon from '../assets/link-icon.png'
import {mapGetters} from "vuex";

export default {
    name: 'user-list',
    components: {},
    data: function () {
        return {
            linkIcon: linkIcon
        }
    },
    created() {
        this.$store.dispatch('getUsersList', 10);
    },
    computed: {
        ...mapGetters(['filteredUserLists']),
    }
}
</script>

<style scoped>
.user-list-title {
    font-weight: 800;
    font-size: 48px;
    line-height: 56px;
    color: #000000;
}

.user-lists {
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    height: 100%;
}

.user {
    flex: 0 0 20%;
    max-width: 20%;
    margin-bottom: 40px;
}

.user-image img {
    width: 150px;
    border-radius: 50%;
}

.github-link {
    margin-top: 2px;
    color: #0079D1;
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;
}

.github-link img {
    width: 12px;
}
</style>
