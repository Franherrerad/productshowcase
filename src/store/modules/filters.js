export default {
  namespaced: true,

  state() {
    return {
      selectedCategory: "all"
    };
  },

  mutations: {
    SET_CATEGORY(state, category) {
      state.selectedCategory = category;
    }
  },

  getters: {
    selectedCategory(state) {
      return state.selectedCategory;
    }
  }
};