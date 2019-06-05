import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/HelloWorld'
import login from '@/pages/login'
import index from '@/pages/index'
import shop from '@/pages/shop'
import shopping_cart from '@/pages/shopping_cart'
import order from '@/pages/order'
import my from '@/pages/my'

Vue.use(Router)

export default new Router({
	// mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
		{
		  path: '/index:id',
		  name: 'index',
		  component: index
		},
		{
		  path: '/shop:id',
			name: 'shop',
		  component: shop
		},
		{
		  path: '/shopping_cart:id',
			name: 'shopping_cart',
		  component: shopping_cart
		},
		{
		  path: '/order:id',
			name: 'order',
		  component: order
		},
		{
		  path: '/my:id',
		  name: 'my',
		  component: my
		}
  ]
})
