export default {
  namespaced: true,

  state() {
    return {
      favorites: []
    };
  },

  mutations: {
    ADD_FAVORITE(state, product) {
      const exists = state.favorites.find(item => item.id === product.id);
      if (!exists) {
        state.favorites.push(product);
      }
    },
    REMOVE_FAVORITE(state, productId) {
      state.favorites = state.favorites.filter(item => item.id !== productId);
    }
  },

  getters: {
    allFavorites(state) {
      return state.favorites;
    }
  }
};