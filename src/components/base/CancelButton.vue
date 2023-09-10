<template>
  <button class="cancel-btn">
    <img :src="icons.cancelIcon" alt="cancel" />{{ text }}
  </button>
</template>

<script>
import cancelIcon from "@/assets/img/icons/cancel.svg";

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    icons: {
      cancelIcon,
    },
    showForm: false,
  }),
};
</script>

<style scoped lang="scss">
.cancel-btn {
  background: #ededed;
  border: none;
  color: #353535;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  gap: 8px;
  align-items: center;
  height: 28px;
  padding: 0 8px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
