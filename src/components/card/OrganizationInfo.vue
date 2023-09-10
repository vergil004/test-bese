<template>
  <div class="info">
    <InfoBlock title="Тип" :text="type"></InfoBlock>
    <InfoBlock title="Название организация" :text="name"></InfoBlock>
    <InfoBlock title="Описание" :text="desc"></InfoBlock>
    <div class="info__logo">
      <div class="info__title">Логотип</div>
      <div class="info__image">
        <img :src="logo" alt="логотип" />
      </div>
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
      name: (state) => state.organization.name,
      type: (state) => state.organization.type,
      desc: (state) => state.organization.desc,
      logo: (state) => state.organization.logo,
    }),
  },
};
</script>

<style scoped lang="scss">
.info {
  &__title {
    color: #0a0a0a;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 2px;
  }
  &__image {
    width: 180px;
    border: 1px solid #c8c8c8;
    padding: 8px;
    border-radius: 16px;
    img {
      width: 100%;
    }
  }
}
</style>
