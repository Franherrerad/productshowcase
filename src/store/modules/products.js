import axios from "axios";

export default {
  namespaced: true,

  state() {
    return {
      products: [],
      loading: false,
      error: ""
    };
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_LOADING(state, status) {
      state.loading = status;
    },
    SET_ERROR(state, message) {
      state.error = message;
    }
  },

  actions: {
    async fetchProducts({ commit }) {
      commit("SET_LOADING", true);
      commit("SET_ERROR", "");

      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        commit("SET_PRODUCTS", response.data);
      } catch (error) {
        commit("SET_ERROR", "Ocurrió un error al cargar los productos.");
        console.error(error);
      } finally {
        commit("SET_LOADING", false);
      }
    }
  },

  getters: {
    allProducts(state) {
      return state.products;
    },
    isLoading(state) {
      return state.loading;
    },
    getError(state) {
      return state.error;
    }
  }
};