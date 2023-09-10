export const addressModule = {
  state: () => ({
    region: null,
    district: null,
    address: null,
    postIndex: null,
  }),
  mutations: {
    setAddress(state, payload) {
      state.region = payload.region;
      state.district = payload.district;
      state.address = payload.address;
      state.postIndex = payload.postIndex;
    },
  },
  actions: {
    setAddressAction({ commit }, payload) {
      commit("setAddress", payload);
    },
  },
};
