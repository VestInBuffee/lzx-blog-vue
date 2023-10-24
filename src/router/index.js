import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	scrollBehavior(to, from, savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
		if (savePosition) {
			return savePosition;
		} else {
            var top;
            if (window.innerWidth >= 700) {
                 top = 676
            } else {
                 top = 267
            }
			return {
				x: 0,
				y: top
			}
		}
	},
	routes: [{
			path: '/',
			component: resolve => require(['../views/index.vue'], resolve),
      redirect: '/Home',
			meta: {
				auth: true
			},
      children: [
        {
          path: 'Home',
          name: 'Home',
          component: resolve => require(['../views/home/Home.vue'], resolve),
        },
        {
          path: 'Share',
          name: 'Share',
          component: resolve => require(['../views/share/Share.vue'], resolve),
        },
        {
          path: 'Reward',
          name: 'Reward',
          component: resolve => require(['../views/reward/Reward.vue'], resolve)
        },
        {
          path: 'Friendslink',
          name: 'FriendsLink',
          component: resolve => require(['../views/friendslink/FriendsLink.vue'], resolve)
        },
        {
          path: '/DetailArticle',
          name: 'DetailArticle',
          component: resolve => require(['../views/detailarticle/DetailArticle.vue'], resolve)
        }
      ]
		}, //首页
		{
			path: '/Login',
			component: resolve => require(['../views/login/Login.vue'], resolve),
			meta: {
				auth: false
			},
			name: 'Login'
		}, //注册登录
		{
			path: '/UserInfo',
			component: resolve => require(['../views/userinfo/UserInfo.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'UserInfo'
		}, //用户个人中心

	]
})
