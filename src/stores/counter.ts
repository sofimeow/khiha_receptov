import { defineStore } from 'pinia'
import data from '@/data/datacards.json'

export const useCounter = defineStore('counter', {
  state: () => ({
    products: data,
    cartProducts: JSON.parse(localStorage.getItem('cartProducts') || '[]'),
  }),
  getters: {
    getProducts: (state) => state.cartProducts,

    getCount: (state) => {
      return state.cartProducts.length;
    },

    getPrice: (state) => {
      return state.cartProducts.reduce((res, product) => res + product.price, 0);
    },
  },
  actions: {
    addToCart(product) {
      this.cartProducts.push(product);
      this.syncStorage();
    },
    removeFromCart(product) {
      const index = this.cartProducts.indexOf(product);
      this.cartProducts.splice(index, 1);
      this.syncStorage();
    },
    syncStorage() {
      localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
    },
  },
});
