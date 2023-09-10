export const housesModule = {
  state: () => ({
    houses: [],
  }),
  mutations: {
    setHouses(state, houses) {
      state.houses = houses;
    },
  },
  actions: {
    setHousesAction({ commit }, houses) {
      commit("setHouses", JSON.parse(JSON.stringify(houses)));
    },
  },
};
