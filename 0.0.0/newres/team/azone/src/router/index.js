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
import ResIndexContentRightSixteen from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexContentRightSixteen'
import ResIndexContentRightSeventeen from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexContentRightSeventeen'
import ResIndexContentRightEighteenth from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexContentRightEighteenth'
import ResIndexContentRightNineteen from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexContentRightNineteen'
import ResIndexContentRightTwenty from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexContentRightTwenty'
import ResIndexContentRightTwentyOne from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexContentRightTwentyOne'
import ResIndexContentRightTwentyTwo from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexContentRightTwentyTwo'
import ResIndexContentRightTwentyThree from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexContentRightTwentyThree'
import ResIndexContentRightTwentyFour from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexContentRightTwentyFour'
import ResIndexContentRightTwentyFive from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexContentRightTwentyFive'
import ResIndexContentRightTwentySix from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexContentRightTwentySix'
import ResIndexContentRightTwentySeven from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexContentRightTwentySeven'
import ResIndexContentRightTwentyEight from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexContentRightTwentyEight'
import ResIndexContentRightTwentyNine from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexContentRightTwentyNine'
import ResIndexContentRightThirty from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexContentRightThirty'
import ResIndexPage from '../components/ResIndex/ResIndexContent/ResIndexContentRight/ResIndexPage'

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
          path: "ResIndexContentRightSixteen",
          component: ResIndexContentRightSixteen
        },
        {
          path: "ResIndexContentRightSeventeen",
          component: ResIndexContentRightSeventeen
        },
        {
          path: "ResIndexContentRightEighteenth",
          component: ResIndexContentRightEighteenth
        },
        {
          path: "ResIndexContentRightNineteen",
          component: ResIndexContentRightNineteen
        },
        {
          path: "ResIndexContentRightTwenty",
          component: ResIndexContentRightTwenty
        },
        {
          path: "ResIndexContentRightTwentyOne",
          component: ResIndexContentRightTwentyOne
        },
        {
          path: "ResIndexContentRightTwentyTwo",
          component: ResIndexContentRightTwentyTwo
        },
        {
          path: "ResIndexContentRightTwentyThree",
          component: ResIndexContentRightTwentyThree
        },
        {
          path: "ResIndexContentRightTwentyFour",
          component: ResIndexContentRightTwentyFour
        },
        {
          path: "ResIndexContentRightTwentyFive",
          component: ResIndexContentRightTwentyFive
        },
        {
          path: "ResIndexContentRightTwentySix",
          component: ResIndexContentRightTwentySix
        },
        {
          path: "ResIndexContentRightTwentySeven",
          component: ResIndexContentRightTwentySeven
        },
        {
          path: "ResIndexContentRightTwentyEight",
          component: ResIndexContentRightTwentyEight
        },
        {
          path: "ResIndexContentRightTwentyNine",
          component: ResIndexContentRightTwentyNine
        },
        {
          path: "ResIndexContentRightThirty",
          component: ResIndexContentRightThirty
        },
        {
          path: "ResIndexPage",
          component: ResIndexPage
        }
      ]
    }
  ]
})
