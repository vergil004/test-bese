<template>
  <button class="app-btn" :type="type">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "button",
    },
  },
};
</script>

<style scoped lang="scss">
.app-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1588c9;
  padding: 12px;
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  border: none;
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
}
</style>
