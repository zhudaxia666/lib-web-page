import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '../components/Header'
import Introduct from '../components/Introduct'
import Member from '../components/Member'
import Show from '../components/Show'
import Contact from '../components/Contact'
import Download from '../components/Download'
import Meb2013 from '../member/Meb2013'
import Meb2014 from '../member/Meb2014'
import Meb2015 from '../member/Meb2015'
import Meb2016 from '../member/Meb2016'
import Meb2017 from '../member/Meb2017'
import Meb20171 from '../member/Meb20171'
import Direct1 from '../direction/Direct1'
import Direct2 from '../direction/Direct2'
import Direct3 from '../direction/Direct3'
import Direct4 from '../direction/Direct4'
import Data from '../download/Data'
import Datum from '../download/Datum'
import Paper from '../download/Paper'
import Other from '../download/Other'
Vue.use(Router)

export default new Router({
  mode:'history',//这种模式在访问网址时不会有#号
  base:__dirname,//为应用的基路径，例如整个单页应用服务在app/下，那么base就应该设为/app/,当在HTML5hsitory模式下，即上面的模式，使用base后，所有的to属性都不需要写基路径
  linkActiveClass:"active",
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // 命名路由
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/direction1',
      name: 'Direct1',
      component: Direct1
    },
    {
      path: '/direction2',
      name: 'Direct2',
      component: Direct2
    },{
      path: '/direction3',
      name: 'Direct3',
      component: Direct3
    },{
      path: '/direction4',
      name: 'Direct4',
      component: Direct4
    },
    {
      path: '/data',
      name: 'Data',
      component: Data
    },
    {
      path: '/datum',
      name: 'Datum',
      component: Datum
    },
    {
      path: '/paper',
      name: 'Paper',
      component: Paper
    },
    {
      path: '/other',
      name: 'Other',
      component: Other
    },
    {
      path: '/introduct',
      name: 'Introduct',
      component: Introduct,
      children:[
        {path:'meb2013',component:Meb2013},
        {path:'meb2014',component:Meb2014},
        {path:'meb2015',component:Meb2015},
        {path:'meb2016',component:Meb2016},
        {path:'meb2017',name:'Meb2017',component:Meb2017},
        {path:'meb20171',component:Meb20171}
      ]
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    }

  ]
})
