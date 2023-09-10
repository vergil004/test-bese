<template>
  <div class="card">
    <h2 class="card__title">
      {{ title }}
      <CancelButton
        v-if="editStatus"
        @click="changeEditStatus"
        text="Отменить"
      />
      <EditButton
        v-if="!isEmpty && !editStatus"
        @click="changeEditStatus"
        text="Редактировать"
      />
    </h2>
    <div v-if="isEmpty && !editStatus" class="card__desc">{{ desc }}</div>
    <div v-if="isEmpty && !editStatus" class="card__add">
      <AddButton
        @click="changeEditStatus"
        v-if="!editStatus"
        :text="addButtonText"
      />
    </div>
    <div class="card__info" v-if="!isEmpty && !editStatus">
      <slot name="info"></slot>
    </div>
    <div v-if="editStatus" class="card__slide">
      <slot name="form"></slot>
    </div>
  </div>
</template>

<script>
import AddButton from "@/components/base/AddButton";
import CancelButton from "@/components/base/CancelButton";
import EditButton from "@/components/base/EditButton";
export default {
  components: {
    EditButton,
    AddButton,
    CancelButton,
  },
  props: {
    isEmpty: {
      type: Boolean,
      required: true,
      default: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    addButtonText: {
      type: String,
    },
    editStatus: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    showForm: false,
  }),
  methods: {
    changeEditStatus() {
      this.$emit("update:editStatus", !this.editStatus);
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  padding: 24px;
  &__slide {
    overflow: hidden;
    transform-origin: top;
    transition: transform 0.4s ease-in-out;
  }
  &__title {
    font-size: 20px;
    font-family: Inter;
    font-weight: 700;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 480px) {
      display: grid;
      gap: 16px;
      .cancel-btn {
        order: -1;
        height: 40px;
        width: fit-content;
      }
    }
  }
  &__add {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
  &__desc {
    text-align: center;
  }
}
.slide-enter,
.slide-leave-to {
  transform: scaleY(0);
}
</style>
