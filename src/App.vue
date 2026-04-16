<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title>Vue Product Showcase</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="toggleTheme">
        <v-icon>{{ isDark ? "mdi-weather-sunny" : "mdi-weather-night" }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="py-6">
        <v-row justify="center" class="mb-4">
          <v-col cols="12" sm="8" md="5">
            <v-select
              v-model="categoryValue"
              :items="categoryOptions"
              label="Filtrar por categoría"
              variant="outlined"
              density="comfortable"
            ></v-select>
          </v-col>
        </v-row>

        <v-row v-if="loading" justify="center">
          <v-col cols="12" class="text-center">
            <v-progress-circular
              indeterminate
              color="primary"
              size="60"
            ></v-progress-circular>
            <p class="mt-4">Cargando productos...</p>
          </v-col>
        </v-row>

        <v-row v-else-if="error" justify="center">
          <v-col cols="12" md="6">
            <v-alert type="error" variant="tonal">
              {{ error }}
            </v-alert>
          </v-col>
        </v-row>

        <v-row v-else-if="filteredProducts.length === 0" justify="center">
          <v-col cols="12" md="6">
            <v-alert type="info" variant="tonal">
              No hay productos disponibles.
            </v-alert>
          </v-col>
        </v-row>

        <ProductList
          v-else
          :products="filteredProducts"
        />
      </v-container>
    </v-main>

    <v-footer class="justify-center">
      <span>Proyecto académico Vue Product Showcase</span>
    </v-footer>
  </v-app>
</template>

<script>
import ProductList from "./components/ProductList.vue";

export default {
  name: "App",
  components: {
    ProductList
  },
  data() {
    return {
      isDark: false
    };
  },
  computed: {
    products() {
      return this.$store.getters["products/allProducts"];
    },
    loading() {
      return this.$store.getters["products/isLoading"];
    },
    error() {
      return this.$store.getters["products/getError"];
    },
    selectedCategory() {
      return this.$store.getters["filters/selectedCategory"];
    },
    categoryOptions() {
      const uniqueCategories = this.products.map(product => product.category);
      return ["all", ...new Set(uniqueCategories)];
    },
    filteredProducts() {
      if (this.selectedCategory === "all") {
        return this.products;
      }

      return this.products.filter(
        product => product.category === this.selectedCategory
      );
    },
    categoryValue: {
      get() {
        return this.selectedCategory;
      },
      set(value) {
        this.$store.commit("filters/SET_CATEGORY", value);
      }
    }
  },
  mounted() {
    this.$store.dispatch("products/fetchProducts");
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
      this.$vuetify.theme.global.name = this.isDark ? "dark" : "light";
    }
  }
};
</script>