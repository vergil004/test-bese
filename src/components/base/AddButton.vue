<template>
  <button class="add-btn">
    <img :src="icons.addIcon" alt="add" />{{ text }}
  </button>
</template>

<script>
import addIcon from "../../assets/img/icons/add.svg";
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    icons: {
      addIcon,
    },
    showForm: false,
  }),
};
</script>

<style scoped lang="scss">
.add-btn {
  background: #e8f2fe;
  border: none;
  color: #045cc4;
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
