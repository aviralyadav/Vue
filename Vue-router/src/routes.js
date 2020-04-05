import Home from './components/Home.vue'
import Profile from './components/profile/Profile.vue'
// import User from './components/User/User.vue'
import UserDetail from './components/User/UserDetail.vue'
import UserStart from './components/User/UserStart.vue'
import UserEdit from './components/User/UserEdit.vue'

const User = resolve => { ///for lazy loading
    require.ensure(['./components/User/User.vue'], () => {
        resolve(require('./components/User/User.vue'));
    }, 'user'); //this 'user' for grouping all the components related to user
}

export const routes = [
    {
        path: '', component: Home, name: 'Home'
    },
    {
        path: '/user', component: User, children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                console.log('Router level guard');
                next();
            } },
            { path: ':id/edit', component: UserEdit, name: 'userEdit' },
        ]
    },
    { path: '/profile/:id', component: Profile },
    { path: '*', redirect: '/' }
];