import { createStore } from 'vuex'

export default createStore({
    state: {
        car: {
            headImg: {
                src: "/images/headImg/solution_car.jpg",
                contentCn: "汽车行业",
                contentEn: "CAR INDUSTRY",
            },
            imgAndText: {
                src: "/images/headImg/solution_car.jpg",
                titleEn: "APPLICATION IN CAR INDUSTRY",
                titleCn: "普洛泰柯在汽车行业的应用",
                content: "依照汽车生产质量管控规范及设备安全标准设计装配线联锁系统并配置电子感应锁，依靠生产节拍信号与权限识别才能进行工装夹具的切换操作，保证汽车装配按照既定的精准流程推进，产品外壳为工程塑料材质且具备抗电磁干扰能力，锁具感应模块能保证 80 万次快速响应是通过 ISO 认证的高效生产联锁产品。已广泛应用于一汽、上汽、东风等主流汽车制造企业。",
            },
        },
        food: {
            headImg: {
                src: "/images/headImg/solution_food.jpg",
                contentCn: "食品饮料",
                contentEn: "FOOD AND DRINK",
            },
            imgAndText: {
                src: "/images/headImg/solution_food.jpg",
                titleEn: "APPLICATION IN FOOD AND DRINK",
                titleCn: "普洛泰柯在食品饮料的应用",
                content: "根据食品饮料卫生安全规范及生产工艺要求设计设备防护联锁系统并配置卫生级机械锁，通过清洁消毒流程确认与人员权限匹配才能打开设备防护门进行操作，保障食品饮料生产过程按照规定的卫生安全程序进行，产品采用食品级不锈钢材质且无卫生死角，锁芯能保证 70 万次顺畅开合是通过 NSF 认证的卫生安全联锁产品。已广泛应用于可口可乐、百事可乐、伊利等知名食品饮料企业。",
            },
        },
        logistics: {
            headImg: {
                src: "/images/headImg/solution_logistics.jpg",
                contentCn: "物流自动化",
                contentEn: "LOGISTICS AUTOMATION",
            },
            imgAndText: {
                src: "/images/headImg/solution_logistics.jpg",
                titleEn: "APPLICATION IN LOGISTICS AUTOMATION",
                titleCn: "普洛泰柯在物流运输的应用",
                content: "按照物流仓储作业规范及设备协同要求设计输送线联锁系统并配置自动电磁锁，依据货物输送指令与设备状态反馈才能启动或停止相关输送环节，确保物流自动化系统按照预设的高效流程运转，产品材质为不锈钢与复合材料结合且具有低能耗特性，锁具电磁驱动部分能保证 60 万次稳定吸合释放是通过 UL 认证的智能物流联锁产品。已广泛应用于顺丰、京东、菜鸟等大型物流企业的自动化仓库。",
            },
        },
        metallurgy: {
            headImg: {
                src: "/images/headImg/solution_metallurgy.jpg",
                contentCn: "冶金制造业",
                contentEn: "METALLURGICAL MANUFACTURING INDUSTRY",
            },
            imgAndText: {
                src: "/images/headImg/solution_metallurgy.jpg",
                titleEn: "APPLICATION IN METALLURGICAL MANUFACTURING INDUSTRY",
                titleCn: "普洛泰柯在冶金制造业的应用",
                content: "依据冶金生产高温高压环境规范及设备操作要求设计炉窑联锁系统并配置耐高温机械锁，凭借工艺参数达标与人员资质认证才能执行炉窑相关操作，确保冶金制造流程按照既定的高温作业安全规范操作，产品为特殊耐热合金材质且具有隔热防护结构，锁具能承受高温辐射及频繁热冲击是通过 IEC 认证的耐高温联锁产品。已广泛应用于宝钢、鞍钢、首钢等大型冶金企业。",
            },
        },
        petrochemical: {
            headImg: {
                src: "/images/headImg/solution_petrochemical.jpg",
                contentCn: "石化行业",
                contentEn: "PETROCHEMICAL INDUSTRY",
            },
            imgAndText: {
                src: "/images/headImg/solution_petrochemical.jpg",
                titleEn: "APPLICATION IN PETROCHEMICAL INDUSTRY",
                titleCn: "普洛泰柯在石化行业的应用",
                content: "依据石化生产安全规范及工艺控制要求设计阀门联锁系统并配置防爆机械锁，借助特定授权码及顺序操作才能开启或关闭关键阀门，保障石化工艺流程按照预定的安全流程执行，产品主体为碳钢材质且具有耐腐蚀涂层，锁具能承受极端环境温度及压力变化是通过 ATEX 认证的专业防爆联锁产品。已广泛应用于中石化、中石油、中海油等大型石化企业。",
            },
        },
        power: {
            headImg: {
                src: "/images/headImg/solution_power.jpg",
                contentCn: "电力行业",
                contentEn: "POWER INDUSTRY",
            },
            imgAndText: {
                src: "/images/headImg/solution_power.jpg",
                titleEn: "APPLICATION IN POWER INDUSTRY",
                titleCn: "普洛泰柯在电力行业的应用",
                content: "根据电力“五防”规范及技术要求设计机械联锁系统并配置电力五防机械锁，通过钥匙传递才能实现每一步操作，确保电力设备按照预先设定的安全程序操作，产品为不锈钢材质且无弹簧弹珠，锁芯钥匙能保证100万次旋转插拔操作是通过CE认证的安全机械联锁产品。已广泛应用于华能、大唐、华电、国电、中电投五大发电集团及核电站。",
            },
        },
        service: {
            headImg: {
                src: "/images/headImg/solution_service.jpg",
                contentCn: "公共服务业",
                contentEn: "PUBLIC SERVICE INDUSTRY",
            },
            imgAndText: {
                src: "/images/headImg/solution_service.jpg",
                titleEn: "APPLICATION IN PUBLIC SERVICE INDUSTRY",
                titleCn: "普洛泰柯在公共服务业的应用",
                content: "根据公共服务设施安全管理规范及使用便捷要求设计门禁联锁系统并配置智能刷卡锁，通过身份识别与使用时段限制才能开启公共服务区域的通道或设备，保障公共服务场所按照设定的有序管理程序运行，产品采用环保耐用材质且具有低功耗长续航特性，锁具识别模块能保证 30 万次准确识别是通过 GB 认证的便民联锁产品。已广泛应用于图书馆、体育馆、政务大厅等公共服务场所。",
            },
        },
        traffic: {
            headImg: {
                src: "/images/headImg/solution_traffic.jpg",
                contentCn: "轨道交通",
                contentEn: "RAIL TRANSIT",
            },
            imgAndText: {
                src: "/images/headImg/solution_traffic.jpg",
                titleEn: "APPLICATION IN RAIL TRANSIT",
                titleCn: "普洛泰柯在轨道交通的应用",
                content: "根据轨道交通信号控制规范及安全运营要求设计道岔联锁系统并配置智能电子锁，通过密码验证与信号联动才能实现道岔转换操作，确保轨道交通行车按照预先设定的安全规则运行，产品采用高强度铝合金材质且具备防水防尘功能，锁控模块能保证 50 万次稳定运行是通过 EN 认证的可靠信号联锁产品。已广泛应用于北京地铁、上海地铁、广州地铁等大型轨道交通网络。",
            },
        },
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
