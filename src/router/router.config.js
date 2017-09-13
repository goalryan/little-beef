/**
 * Created by liushaojun on 2017/9/13.
 */
// 主管-生产订单执行管理
const AllOrder = r => require.ensure([], () => {
    r(require('../views/allOrder/allOrder'));
}, 'allOrder');
const AllOrderProductOrderInfo = r => require.ensure([], () => {
    r(require('../views/allOrder/productOrderInfo'));
}, 'allOrder');

// 主管-生产补料与报废审核
const ProductSupplyScrapAudit = r => require.ensure([], () => {
    r(require('../views/productSupplyScrapAudit/productSupplyScrapAudit'));
}, 'productSupplyScrapAudit');
const ProductSupplyScrapAduitFeedingInfo = r => require.ensure([], () => {
    r(require('../views/productSupplyScrapAudit/feedingInfo'));
}, 'productSupplyScrapAudit');
const ProductSupplyScrapAduitApplyScrapInfo = r => require.ensure([], () => {
    r(require('../views/productSupplyScrapAudit/applyScrapInfo'));
}, 'productSupplyScrapAudit');
const ProductSupplyScrapAduitProductOrderInfo = r => require.ensure([], () => {
    r(require('../views/components/mo/productOrderInfo'));
}, 'productSupplyScrapAudit');


// 主管-生产订单返工审核
const ProductReworkAudit = r => require.ensure([], () => {
    r(require('../views/productReworkAudit/productReworkAudit'));
}, 'productSupplyScrapAudit');
const ProductReworkAuditReworkInfo = r => require.ensure([], () => {
    r(require('../views/productReworkAudit/reworkInfo'));
}, 'productReworkAudit');


// 班组长-生产订单执行作业
const ProductManager = r => require.ensure([], () => {
    r(require('../views/productManager/productManager'));
}, 'productManager');
const ProductManagerProductOrderInfo = r => require.ensure([], () => {
    r(require('../views/productManager/productOrderInfo'));
}, 'allOrder');
const ProductManagerReworkInfo = r => require.ensure([], () => {
    r(require('../views/productManager/reworkInfo'));
}, 'productManager');
const ProductManagerFeedingInfo = r => require.ensure([], () => {
    r(require('../views/productManager/feedingInfo'));
}, 'productManager');
const ProductManagerReturnInfo = r => require.ensure([], () => {
    r(require('../views/productManager/returnInfo'));
}, 'productManager');

// 班组长- 查看补料审核
const ProductSupplyAuditView = r => require.ensure([], () => {
    r(require('../views/productSupplyAuditView/productSupplyAuditView'));
}, 'productSupplyAuditView');
const ProductSupplyAuditViewFeedingInfo = r => require.ensure([], () => {
    r(require('../views/productSupplyAuditView/feedingInfo'));
}, 'productSupplyAuditView');

// 班组长-良品物料退仓
const ProductReturnScrap = r => require.ensure([], () => {
    r(require('../views/productReturnScrap/productReturnScrap'));
}, 'productReturnScrap');
const ProductReturnScrapWaitInfo = r => require.ensure([], () => {
    r(require('../views/productReturnScrap/waitReturnScrapInfo'));
}, 'productReturnScrap');
const ProductReturnScrapDoInfo = r => require.ensure([], () => {
    r(require('../views/productReturnScrap/doReturnScrapInfo'));
}, 'productReturnScrap');
const ProductReturnScrapReturnedInfo = r => require.ensure([], () => {
    r(require('../views/productReturnScrap/returnedScrapInfo'));
}, 'productReturnScrap');

// 班组长-生产报废
const ProductScrapView = r => require.ensure([], () => {
    r(require('../views/productScrapView/productScrapView'));
}, 'productScrapView');
const ProductScrapViewWaitScrapInfo = r => require.ensure([], () => {
    r(require('../views/productScrapView/waitScrapInfo'));
}, 'productScrapView');
const ProductScrapViewApplyScrapInfo = r => require.ensure([], () => {
    r(require('../views/productScrapView/applyScrapInfo'));
}, 'productScrapView');
const ProductScrapViewWaitDoneScrapInfo = r => require.ensure([], () => {
    r(require('../views/productScrapView/waitDoneScrapInfo'));
}, 'productScrapView');
const ProductScrapViewFinishedScrapInfo = r => require.ensure([], () => {
    r(require('../views/productScrapView/finishedScrapInfo'));
}, 'productScrapView');

// 物料员-生产领料与退料
const ProductPick = r => require.ensure([], () => {
    r(require('../views/productPick/productPick'));
}, 'productReturn');
const ProductPickFeedingInfo = r => require.ensure([], () => {
    r(require('../views/productPick/feedingInfo'));
}, 'productPick');
const ProductPickInfo = r => require.ensure([], () => {
    r(require('../views/productPick/pickInfo'));
}, 'productReturn');
const ProductPickPrepareInfo = r => require.ensure([], () => {
    r(require('../views/productPick/prepareInfo'));
}, 'productReturn');
const ProductPickProductOrderInfo = r => require.ensure([], () => {
    r(require('../views/components/mo/productOrderInfo'));
});

// 物料员-良品物料退仓
const ProductReturn = r => require.ensure([], () => {
    r(require('../views/productReturn/productReturn'));
}, 'productReturn');
const ProductReturnWaitInfo = r => require.ensure([], () => {
    r(require('../views/productReturn/waitReturnInfo'));
}, 'productReturn');
const ProductReturnDoInfo = r => require.ensure([], () => {
    r(require('../views/productReturn/doReturnInfo'));
}, 'productReturn');
const ProductReturnedInfo = r => require.ensure([], () => {
    r(require('../views/productReturn/returnedInfo'));
}, 'productReturn');

// 物料员-生产报废
const ProductScrap = r => require.ensure([], () => {
    r(require('../views/productScrap/productScrap'));
}, 'productScrap');
const ProductScrapWaitScrapInfo = r => require.ensure([], () => {
    r(require('../views/productScrap/waitScrapInfo'));
}, 'productScrap');
const ProductScrapDoScrapInfo = r => require.ensure([], () => {
    r(require('../views/productScrap/doScrapInfo'));
}, 'productScrap');
const ProductScrapFinishedScrapInfo = r => require.ensure([], () => {
    r(require('../views/productScrap/finishedScrapInfo'));
}, 'productScrap');

const Redirect = r => require.ensure([], () => {
    r(require('../views/redirect/redirect'));
}, 'redirect');
const RedirectProductOrderInfo = r => require.ensure([], () => {
    r(require('../views/redirect/productOrderInfo'));
}, 'redirect');

const ProductInboundLook = r => require.ensure([], () => {
    r(require('../views/productInboundLook/productInboundLook'));
}, 'productInboundLook');
const ProductInboundLookProductOrderInfo = r => require.ensure([], () => {
    r(require('../views/productInboundLook/productOrderInfo'));
}, 'productInboundLook');

const ChartsDepartmentReport = r => require.ensure([], () => {
    r(require('../views/charts/productDepartment'));
}, 'charts');

const ChartsTeamReport = r => require.ensure([], () => {
    r(require('../views/charts/productTeam'));
}, 'charts');

export default [
    {
        path: '/all-order',
        name: 'allOrder',
        meta: {
            title: '生产订单执行管理'
        },
        component: AllOrder,
        children: [
            {
                path: ':tab/:id',
                name: 'productOrderInfo',
                meta: {
                    title: '生产订单'
                },
                component: AllOrderProductOrderInfo
            }]
    },
    {
        path: '/product-manager',
        name: 'productManager',
        meta: {
            title: '生产订单管理'
        },
        component: ProductManager,
        children: [
            {
                path: ':tab/:id/:pickQuantity?',
                name: 'productManagerProductOrderInfo',
                meta: {
                    title: '生产订单'
                },
                component: ProductManagerProductOrderInfo
            },
            {
                path: 'rework/:id',
                name: 'productManagerReworkInfo',
                meta: {
                    title: '返工申请'
                },
                component: ProductManagerReworkInfo
            },
            {
                path: 'feed/:id',
                name: 'productManagerFeedingInfo',
                meta: {
                    title: '补料申请'
                },
                component: ProductManagerFeedingInfo
            },
            {
                path: 'return/:id',
                name: 'productManagerReturnInfo',
                meta: {
                    title: '报退'
                },
                component: ProductManagerReturnInfo
            }]
    },
    {
        path: '/redirect',
        name: 'redirect',
        meta: {
            title: '生产工序流转'
        },
        component: Redirect,
        children: [
            {
                path: ':tab/:id/:recordId',
                name: 'redirectProductOrderInfo',
                meta: {
                    title: '生产订单'
                },
                component: RedirectProductOrderInfo
            }]
    },
    {
        path: '/product-inbound-look',
        name: 'productInboundLook',
        meta: {
            title: '产成品入库'
        },
        component: ProductInboundLook,
        children: [
            {
                path: ':tab/:id',
                name: 'productInboundLookProductOrderInfo',
                meta: {
                    title: '生产订单'
                },
                component: ProductInboundLookProductOrderInfo
            }
        ]
    },
    {
        path: '/product-pick',
        name: 'productPick',
        meta: {
            title: '生产领料'
        },
        component: ProductPick,
        children: [
            {
                path: 'feed/:id',
                name: 'productPickFeedingInfo',
                meta: {
                    title: '生产补料单'
                },
                component: ProductPickFeedingInfo
            },
            {
                path: 'pick/:id',
                name: 'productPickInfo',
                meta: {
                    title: '生产领料单'
                },
                component: ProductPickInfo
            },
            {
                path: 'prepare/:id',
                name: 'productPickPrepareInfo',
                meta: {
                    title: '生产备料单'
                },
                component: ProductPickPrepareInfo
            },
            {
                path: 'order/:id',
                name: 'productPickProductOrderInfo',
                meta: {
                    title: '生产订单'
                },
                component: ProductPickProductOrderInfo
            }
        ]
    },
    {
        path: '/product-supply-scrap-audit',
        name: 'productSupplyScrapAudit',
        meta: {
            title: '生产补料与报废审核'
        },
        component: ProductSupplyScrapAudit,
        children: [
            {
                path: 'feed/:id',
                name: 'productSupplyScrapAduitFeedingInfo',
                meta: {
                    title: '生产补料'
                },
                component: ProductSupplyScrapAduitFeedingInfo
            },
            {
                path: 'apply/:id',
                name: 'productSupplyScrapAduitApplyScrapInfo',
                meta: {
                    title: '报废申请单'
                },
                component: ProductSupplyScrapAduitApplyScrapInfo
            },
            {
                path: 'order/:id',
                name: 'productSupplyScrapAduitProductOrderInfo',
                meta: {
                    title: '生产订单'
                },
                component: ProductSupplyScrapAduitProductOrderInfo
            }]
    },
    {
        path: '/product-rework-audit',
        name: 'productReworkAudit',
        meta: {
            title: '生产订单返工审核'
        },
        component: ProductReworkAudit,
        children: [
            {
                path: 'rework/:id',
                name: 'productReworkAuditReworkInfo',
                meta: {
                    title: '生产返工申请单'
                },
                component: ProductReworkAuditReworkInfo
            }]
    },
    {
        path: '/product-supply-audit-view',
        name: 'productSupplyAuditView',
        meta: {
            title: '查看补料审核'
        },
        component: ProductSupplyAuditView,
        children: [
            {
                path: ':id',
                name: 'productSupplyAuditViewFeedingInfo',
                meta: {
                    title: '生产补料'
                },
                component: ProductSupplyAuditViewFeedingInfo
            }]
    },
    {
        path: '/product-return-scrap',
        name: 'productReturnScrap',
        meta: {
            title: '良品物料退仓'
        },
        component: ProductReturnScrap,
        children: [
            {
                path: 'wait/:id',
                name: 'productReturnScrapWaitInfo',
                meta: {
                    title: '生产退料单'
                },
                component: ProductReturnScrapWaitInfo
            },
            {
                path: 'do/:id',
                name: 'productReturnScrapDoInfo',
                meta: {
                    title: '生产退料单'
                },
                component: ProductReturnScrapDoInfo

            },
            {
                path: 'return/:id',
                name: 'productReturnScrapReturnedInfo',
                meta: {
                    title: '生产退料单'
                },
                component: ProductReturnScrapReturnedInfo

            }]
    },
    {
        path: '/product-return',
        name: 'productReturn',
        meta: {
            title: '良品物料退仓'
        },
        component: ProductReturn,
        children: [
            {
                path: 'wait/:id',
                name: 'productReturnWaitInfo',
                meta: {
                    title: '生产退料单'
                },
                component: ProductReturnWaitInfo
            },
            {
                path: 'do/:id',
                name: 'productReturnDoInfo',
                meta: {
                    title: '生产退料单'
                },
                component: ProductReturnDoInfo

            },
            {
                path: 'return/:id',
                name: 'productReturnedInfo',
                meta: {
                    title: '生产退料单'
                },
                component: ProductReturnedInfo

            }]
    },
    {
        path: '/product-scrap-view',
        name: 'productScrapView',
        meta: {
            title: '生产报废'
        },
        component: ProductScrapView,
        children: [
            {
                path: 'wait/:id',
                name: 'productScrapViewWaitScrapInfo',
                meta: {
                    title: '待报废单'
                },
                component: ProductScrapViewWaitScrapInfo
            },
            {
                path: 'apply/:id',
                name: 'productScrapViewApplyScrapInfo',
                meta: {
                    title: '待报废单'
                },
                component: ProductScrapViewApplyScrapInfo
            },
            {
                path: 'done/:id',
                name: 'productScrapViewWaitDoneScrapInfo',
                meta: {
                    title: '报废单'
                },
                component: ProductScrapViewWaitDoneScrapInfo
            },
            {
                path: 'finish/:id',
                name: 'productScrapViewFinishedScrapInfo',
                meta: {
                    title: '报废单'
                },
                component: ProductScrapViewFinishedScrapInfo
            }]
    },
    {
        path: '/product-scrap',
        name: 'productScrap',
        meta: {
            title: '生产报废'
        },
        component: ProductScrap,
        children: [
            {
                path: 'wait/:id',
                name: 'productScrapWaitScrapInfo',
                meta: {
                    title: '报废单'
                },
                component: ProductScrapWaitScrapInfo
            },
            {
                path: 'do/:id',
                name: 'productScrapDoScrapInfo',
                meta: {
                    title: '报废单'
                },
                component: ProductScrapDoScrapInfo
            },
            {
                path: 'finish/:id',
                name: 'productScrapFinishedScrapInfo',
                meta: {
                    title: '报废单'
                },
                component: ProductScrapFinishedScrapInfo
            }]
    },
    {
        path: '/charts-product-department',
        name: 'chartsProductDepartment',
        meta: {
            title: '生产部门报表'
        },
        component: ChartsDepartmentReport
    },
    {
        path: '/charts-product-team',
        name: 'chartsProductTeam',
        meta: {
            title: '生产班组报表'
        },
        component: ChartsTeamReport
    }
];


