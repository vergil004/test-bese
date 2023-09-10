<template>
  <div class="info-block">
    <div class="info-block__title">{{ title }}</div>
    <div class="info-block__text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.info-block {
  display: grid;
  gap: 2px;
  &__text {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #353535;
  }
  &__title {
    font-size: 14px;
    line-height: 20px;
    color: #656565;
  }
}
</style>
