<template>
  <form class="address-form">
    <div class="address-form__double">
      <div class="address-form__item">
        <div class="form-label"><sup>*</sup>Регион</div>
        <div class="form-input">
          <SelectApp
            v-model:select="region"
            default-text="Выбирете регион"
            :list="regionsList"
          />
        </div>
      </div>
      <div class="address-form__item">
        <div class="form-label">Район</div>
        <div class="form-input">
          <input type="text" v-model="district" placeholder="Напишите район" />
        </div>
      </div>
    </div>
    <div class="address-form__item">
      <div class="form-label"><sup>*</sup>Адрес</div>
      <div class="form-input">
        <input
          type="text"
          v-model="address"
          placeholder="Пермь, ул. Трубная, дом 12, корп. 1, стр. 1"
        />
      </div>
    </div>
    <div class="address-form__item">
      <div class="form-label">Почтовый индекс</div>
      <div class="form-input form-input--post">
        <input type="number" v-model="postIndex" placeholder="123456" />
      </div>
    </div>
    <div class="address-form__button">
      <ButtonApp text="Сохранить" type="submit" @click.prevent="submit" />
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SelectApp from "@/components/base/SelectApp";
import ButtonApp from "@/components/base/ButtonApp";
export default {
  props: {
    editStatus: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    SelectApp,
    ButtonApp,
  },
  data: () => ({
    region: null,
    district: null,
    address: null,
    postIndex: null,
  }),
  computed: {
    ...mapState({
      regionsList: (state) => state.regions.regions,
      districtState: (state) => state.address.district,
      regionState: (state) => state.address.region,
      addressState: (state) => state.address.address,
      postIndexState: (state) => state.address.postIndex,
    }),
  },
  mounted() {
    this.getRegionsList();
    this.region = this.regionState;
    this.district = this.districtState;
    this.address = this.addressState;
    this.postIndex = this.postIndexState;
  },
  methods: {
    ...mapActions({
      getRegionsList: "getRegionsList",
      setAddressAction: "setAddressAction",
    }),
    submit(event) {
      event.preventDefault();
      this.setAddressAction({
        region: this.region,
        district: this.district,
        address: this.address,
        postIndex: this.postIndex,
      });
      this.$emit("update:editStatus", !this.editStatus);
    },
  },
};
</script>

<style scoped lang="scss">
.address-form {
  display: grid;
  gap: 8px;
  &__double {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    @media screen and (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
  &__button {
    margin-top: 8px;
  }
}
</style>
