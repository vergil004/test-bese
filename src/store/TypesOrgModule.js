import mockData from "../helpers/mockTypesOrg.json";

export const typesOrgModule = {
  state: () => ({
    types: [],
  }),

  mutations: {
    setTypes(state, list) {
      state.types = list;
    },
  },

  actions: {
    async getTypesList({ commit }) {
      try {
        commit("setTypes", mockData);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
