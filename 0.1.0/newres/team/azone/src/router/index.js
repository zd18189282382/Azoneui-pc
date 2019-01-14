import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ResIndex from '../pages/ResIndex'
import ResIndexSeystemSttings from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexSeystemSttings'
import ResIndexSystemManagement from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexSystemManagement'
import ResIndexSystemLog from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexSystemLog'
import ResIndexAccountManagement from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexAccountManagement'
import ResIndexPayment from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexPayment'
import ResIndexConfiguration from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexConfiguration'
import ResIndexTradingInformation from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexTradingInformation'
import ResIndexTradingFigure from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexTradingFigure'
import ResIndexOrderManagement from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexOrderManagement'
import ResIndexTransactionAmount from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexTransactionAmount'
import ResIndexOrderProcessing from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexOrderProcessing'
import ResIndexRefundManagement from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexRefundManagement'
import ResIndexMemberList from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexMemberList'
import ResIndexLevelManagement from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexLevelManagement'
import ResIndexMemberRecordManagement from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexMemberRecordManagement'
import ResIndexBrandManagement from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexBrandManagement'
import ResIndexClassificationManagement from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexClassificationManagement'
import ResIndexMessageList from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexMessageList'
import ResIndexFeedback from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexFeedback'
import ResIndexPage from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexPage'
import ResIndexArticleList from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexArticleList'
import ResIndexAddArticle from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexAddArticle'


Vue.use(Router)

export default new Router({
  linkExactActiveClass:"active", //激活 样式名
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      redirect:'/ResIndexPage',
      name: 'ResIndex',
      component: ResIndex,
      children:[
        {
          path: "ResIndexSeystemSttings",
          component: ResIndexSeystemSttings
        },
        {
          path: "ResIndexSystemManagement",
          component: ResIndexSystemManagement
        },
        {
          path: "ResIndexSystemLog",
          component: ResIndexSystemLog
        },
        {
          path: "ResIndexAccountManagement",
          component: ResIndexAccountManagement
        },
        {
          path: "ResIndexPayment",
          component: ResIndexPayment
        },
        {
          path: "ResIndexConfiguration",
          component: ResIndexConfiguration
        },
        {
          path: "ResIndexTradingInformation",
          component: ResIndexTradingInformation
        },
        {
          path: "ResIndexTradingFigure",
          component: ResIndexTradingFigure
        },
        {
          path: "ResIndexOrderManagement",
          component: ResIndexOrderManagement
        },
        {
          path: "ResIndexTransactionAmount",
          component: ResIndexTransactionAmount
        },
        {
          path: "ResIndexOrderProcessing",
          component: ResIndexOrderProcessing
        },
        {
          path: "ResIndexRefundManagement",
          component: ResIndexRefundManagement
        },
        {
          path: "ResIndexMemberList",
          component: ResIndexMemberList
        },
        {
          path: "ResIndexLevelManagement",
          component: ResIndexLevelManagement
        },
        {
          path: "ResIndexMemberRecordManagement",
          component: ResIndexMemberRecordManagement
        },
        {
          path: "ResIndexBrandManagement",
          component: ResIndexBrandManagement
        },
        {
          path: "ResIndexClassificationManagement",
          component: ResIndexClassificationManagement
        },
        {
          path: "ResIndexMessageList",
          component: ResIndexMessageList
        },
        {
          path: "ResIndexFeedback",
          component: ResIndexFeedback
        },
        {
          path: "ResIndexPage",
          component: ResIndexPage
        },
        {
          path: "ResIndexArticleList",
          component: ResIndexArticleList
        },
        {
          path: "ResIndexAddArticle",
          component: ResIndexAddArticle
        }
      ]
    }
  ]
})
