import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import App from "@/App.vue";

describe("App.vue", () => {
  it("muestra mensaje de error cuando falla la carga de productos", () => {
    const store = createStore({
      modules: {
        products: {
          namespaced: true,
          getters: {
            allProducts: () => [],
            isLoading: () => false,
            getError: () => "Ocurrió un error al cargar los productos."
          },
          actions: {
            fetchProducts: jest.fn()
          }
        },
        filters: {
          namespaced: true,
          getters: {
            selectedCategory: () => "all"
          },
          mutations: {
            SET_CATEGORY: jest.fn()
          }
        }
      }
    });

    const wrapper = mount(App, {
      global: {
        plugins: [store],
        stubs: {
          Header: true,
          Footer: true,
          ProductList: true
        }
      }
    });

    expect(wrapper.text()).toContain("Ocurrió un error al cargar los productos.");
  });
});