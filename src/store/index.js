import { createStore } from 'vuex'
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
    product: product,
    solution: solution,
    companyInfo: companyInfo,
  }
})
