<template>
    <div>
        <div class="back-icon">
            <router-link to="/" exact>
                <img :src="backIcon">
            </router-link>
        </div>
        <div class="user-detail align-center">
            <div class="user-image">
                <img :src="user.avatar_url">
            </div>
        </div>
        <div class="align-center">
            <h2>{{ user.login }}</h2>
        </div>
        <div>
            <div v-for="userRepo in userRepos" :key="userRepo.id" class="repo-details">
                <div class="repo-name">{{ userRepo.name }}</div>
                <div class="repo-watchers">
                    <label><img class="icon" :src="watchIcon"></label>
                    <label>{{ userRepo.watchers_count }}</label>
                </div>

                <div class="repo-star">
                    <label><img class="icon" :src="starIcon"></label>
                    <label>{{ userRepo.stargazers_count }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import backIcon from '../assets/back-icon.png';
import starIcon from '../assets/start-icon.png';
import watchIcon from '../assets/watch-icon.png';

export default {
    name: 'user-detail',
    components: {},
    data: function () {
        return {
            backIcon: backIcon,
            starIcon: starIcon,
            watchIcon: watchIcon
        }
    },
    created() {
        this.$store.dispatch('getUserDetails', this.getUsername);
        this.$store.dispatch('getUserRepos', this.getUsername);
    },
    methods: {},
    computed: {
        getUsername: function () {
            return this.$route.params.username;
        },
        user: function () {
            return this.$store.state.user;
        },
        userRepos: function () {
            return this.$store.state.userRepos;
        },
    }
}
</script>

<style scoped>
.user-image img {
    width: 150px;
    border-radius: 50%;
}

.user-detail {
    margin-top: 20px;
}

.repo-details {
    padding: 10px;
    text-align: left;
    display: flex;
    justify-content: center;
}

.icon {
    width: 12px;
    padding-left: 3px;
    padding-right: 3px;
}

.repo-name {
    width: 30%;
}

.repo-star, .repo-watchers {
    width: 5%;
}

.back-icon {
    margin-top: 20px;
    margin-left: 10px;
}
</style>
