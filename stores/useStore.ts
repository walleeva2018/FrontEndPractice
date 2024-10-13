// stores/useMyStore.ts
import { defineStore } from 'pinia';

export const useMyStore = defineStore('myStore', {
  state: () => ({
    tab: 'links',
    stateTwo: 'default two',
    stateThree: 'default three',
    stateFour: 'default four',
    stateFive: 'default five',
    stateSix: 'default six',
  }),
  actions: {
    updateTab(newValue: string) {
      this.tab = newValue;
    },
    updateStateTwo(newValue: string) {
      this.stateTwo = newValue;
    },
    updateStateThree(newValue: string) {
      this.stateThree = newValue;
    },
    // Add similar functions for the rest of the states...
  },
});
