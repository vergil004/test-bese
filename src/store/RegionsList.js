import mockData from "../helpers/mockRegions.json";

export const regionsModule = {
  state: () => ({
    regions: [],
  }),

  mutations: {
    setRegions(state, list) {
      state.regions = list;
    },
  },

  actions: {
    async getRegionsList({ commit }) {
      try {
        commit("setRegions", mockData);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
