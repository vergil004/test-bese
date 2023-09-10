<template>
  <div class="modal" v-if="show" @click="closeDialog">
    <div @click.stop class="modal__cont">
      <div class="modal__header">
        <div class="modal__title">{{ title }}</div>
        <button @click="closeDialog" class="modal__close">
          <img :src="icons.closeIcon" alt="close" />
        </button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import closeIcon from "../../assets/img/icons/cancel.svg";
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    show: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    icons: {
      closeIcon,
    },
  }),
  methods: {
    closeDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media screen and (max-width: 770px) {
    width: 100%;
  }
  &__cont {
    background-color: #fff;
    width: 770px;
    height: auto;
    max-height: 80%;
    overflow-y: scroll;
    padding: 16px;
    border-radius: 8px;
    @media screen and (max-width: 480px) {
      max-height: initial;
      height: 100%;
    }
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title {
    font-size: 20px;
    font-family: Inter;
    font-weight: 700;
  }
  &__close {
    border: none;
    background: none;
    cursor: pointer;
  }
}
</style>
