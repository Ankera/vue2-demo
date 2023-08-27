import Vue from "vue";
import VueRouter from 'vue-router';

// import indexRouter from './index.router'
// import userRouter from "./user.router";

const files = require.context('./', false, /\.router.js$/);

const routes = [];

files.keys().forEach(key => {
    routes.push(...files(key).default)
})

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    // routes: [
    //    ...indexRouter, 
    //    ...userRouter,
    // ],
    routes
})

export default router;