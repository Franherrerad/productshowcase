<template>
  <v-card class="mx-auto h-100" elevation="3">
    <v-img
      :src="product.image"
      :alt="product.title"
      height="220"
      contain
      class="bg-white"
    ></v-img>

    <v-card-title class="text-subtitle-1 font-weight-bold">
      {{ product.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ product.category }}
    </v-card-subtitle>

    <v-card-text>
      <div class="text-h6 text-primary">
        ${{ product.price }}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" variant="flat" block>
        Ver detalle
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>