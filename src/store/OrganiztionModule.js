export const organizationModule = {
  state: () => ({
    type: null,
    name: null,
    desc: null,
    logo: null,
  }),

  mutations: {
    setOrganization(state, orgData) {
      (state.type = orgData.type),
        (state.name = orgData.name),
        (state.desc = orgData.desc),
        (state.logo = orgData.logo);
    },
  },

  actions: {
    setOrganizationData({ commit }, payload) {
      commit("setOrganization", payload);
    },
  },
};
