import {createStore} from 'vuex'
import axios from 'axios';

export default createStore({
    state: {
        userLists: {},
        user: {},
        userRepos: {},
        searchString: '',
    },
    mutations: {
        updateUserList: (state, data) => {
            state[data.property] = data.value;
        },
        updateSearchString: (state, data) => {
            state[data.property] = data.value;
        }
    },
    actions: {
        getUsersList: (context, data) => {
            axios.get('https://api.github.com/users?per_page=' + data)
                .then((response) => {
                    context.commit('updateUserList', {property: 'userLists', value: response.data});
                });
        },
        getUserDetails: (context, data) => {
            axios.get('https://api.github.com/users/' + data)
                .then((response) => {
                    context.commit('updateUserList', {property: 'user', value: response.data});
                });
        },
        getUserRepos: (context, data) => {
            axios.get('https://api.github.com/users/' + data + '/repos')
                .then((response) => {
                    context.commit('updateUserList', {property: 'userRepos', value: response.data});
                });
        },
        searchRecords: (context, data) => {
            context.commit('updateUserList', {property: 'searchString', value: data});
        }
    },
    getters: {
        filteredUserLists: (state) => {
            if (state.searchString === '') {
                return state.userLists;
            }
            return state.userLists.filter((user) => {
                return user.login.includes(state.searchString);
            });
        }
    }
})