import { createStore } from 'vuex'
import home from './home'
import product from './product'
import solution from "./solution";
import companyInfo from "@/store/companyInfo";

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home: home,
    product: product,
    solution: solution,
    companyInfo: companyInfo,
  }
})
