import { createStore } from "vuex";

import { typesOrgModule } from "@/store/TypesOrgModule.js";
import { organizationModule } from "@/store/OrganiztionModule";
import { housesModule } from "@/store/HousesModule";
import { regionsModule } from "@/store/RegionsList";
import { addressModule } from "@/store/AddressModule";

export default createStore({
  modules: {
    typesOrg: typesOrgModule,
    organization: organizationModule,
    house: housesModule,
    regions: regionsModule,
    address: addressModule,
  },
});
