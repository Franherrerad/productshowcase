import { mount } from "@vue/test-utils";
import ProductCard from "@/components/ProductCard.vue";

describe("ProductCard.vue", () => {
  it("renderiza correctamente la información del producto", () => {
    const product = {
      id: 1,
      title: "Laptop Gamer",
      category: "electronics",
      price: 999,
      image: "https://via.placeholder.com/150"
    };

    const wrapper = mount(ProductCard, {
      props: {
        product
      }
    });

    expect(wrapper.text()).toContain("Laptop Gamer");
    expect(wrapper.text()).toContain("electronics");
    expect(wrapper.text()).toContain("999");
    expect(wrapper.find("img").attributes("src")).toBe(product.image);
  });
});