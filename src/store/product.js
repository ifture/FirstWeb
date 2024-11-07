import { createStore } from 'vuex'

export default createStore({
    state: {
        interlock: [
            {
                title: '定制性阀门联锁',
                content: '我们提供阀门联锁锁体及钥匙颜色的定制服务，方便用户的统一管理',
                imgUrl: '/images/product/interlock_1.png',
            },
            {
                title: '手轮式阀门联锁',
                content: '应用范围包括压力释放阀的转换、清管站收发系统装置、抽样设备等',
                imgUrl: '/images/product/interlock_2.png',
            },
            {
                title: '手柄式阀门联锁',
                content: '应用范围包括转换的压力释放阀，装卸盲板阀，抽样设备等',
                imgUrl: '/images/product/interlock_3.png',
            },
        ],
        raster: [
            {
                title: '双钥匙机械门锁',
                content: '用于设备的进入口，如开关柜门，变压器门、变电柜门等，与其他钥匙模块实现联 锁功能。适用于任何移门或铰链门',
                imgUrl: '/images/product/raster_1.png',
            },
            {
                title: '钥匙柜',
                content: '钥匙柜是用来存储联锁系统中的初始钥匙和结束钥匙',
                imgUrl: '/images/product/raster_2.png',
            },
            {
                title: '门锁 SDL2',
                content: '可双向插入钥匙，耐高温，抗腐蚀',
                imgUrl: '/images/product/raster_3.png',
            },
        ],
        assessment: [
            {
                title: 'Mini型阀锁',
                content: '用范围包括转换的压力释放阀，装卸盲板阀，抽样设备',
                imgUrl: '/images/product/assessment_1.png',
            },
            {
                title: '电动阀联锁',
                content: '因为这些执行机构产生大扭矩力结合联锁装置是必需的',
                imgUrl: '/images/product/assessment_2.png',
            },
            {
                title: '钥匙柜',
                content: '钥匙柜是用来存储联锁系统中的初始钥处和结束钥匙',
                imgUrl: '/images/product/assessment_3.png',
            },
        ],
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})