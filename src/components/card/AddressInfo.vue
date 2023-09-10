<template>
  <div class="address-info">
    <div class="address-info__item">
      <InfoBlock title="Регион" :text="region" />
    </div>
    <div class="address-info__item">
      <InfoBlock title="Адрес" :text="address" />
    </div>
    <div class="address-info__item">
      <InfoBlock title="Почтовый индекс" :text="postIndex" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import InfoBlock from "@/components/card/InfoBlock";
export default {
  components: {
    InfoBlock,
  },
  computed: {
    ...mapState({
      region: (state) => state.address.region,
      district: (state) => state.address.district,
      address: (state) => state.address.address,
      postIndex: (state) => state.address.postIndex,
    }),
  },
};
</script>

<style scoped lang="scss">
.address-info {
  display: grid;
  gap: 12px;
}
</style>
