<template>
  <div>
    <div
      class="drag"
      @dragover.prevent="onDragOver"
      @dragleave.prevent="onDragLeave"
      @drop.prevent="onDrop"
      :class="{ 'drag--logo': logo, 'drag--over': isDragging }"
    >
      <img v-if="logo" @click="upload()" :src="logo" alt="логотип" />
      <div v-if="!logo" class="drag__cont">
        <div class="drag__title">
          Загрузите изображение или перетащите файл сюда
        </div>
        <div class="drag__desc">
          <div>Максимальный размер изображения 10 Мб.</div>
          <div>Допустимые форматы: .jpeg .png .webp .svg</div>
        </div>
        <div class="drag__button">
          <AddButton @click.prevent="upload()" text="Загрузить" />
        </div>
      </div>
    </div>
    <input type="file" ref="file" accept="image/*" hidden @change="change" />
  </div>
</template>

<script>
import AddButton from "@/components/base/AddButton";

export default {
  components: {
    AddButton,
  },
  props: {
    logo: String,
  },
  data: () => ({
    previewImage: null,
    image: null,
    isDragging: false,
  }),
  methods: {
    upload() {
      this.$refs.file.click();
    },
    change(event) {
      let input = event.target;
      if (input.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.$emit("update:logo", e.target.result);
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    onDragOver(event) {
      event.preventDefault();
      this.isDragging = true;
      event.dataTransfer.dropEffect = "copy";
    },
    onDragLeave(event) {
      event.preventDefault();
      this.isDragging = false;
    },
    onDrop(event) {
      event.preventDefault();
      this.isDragging = false;
      const file = event.dataTransfer.files[0];
      if (file.type.split("/")[0] === "image") {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.$emit("update:logo", e.target.result);
        };
        this.image = file;
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.drag {
  width: 100%;
  border: 1px dashed #c8c8c8;
  border-radius: 16px;
  padding: 16px;
  &--over {
    border-color: #656565;
  }
  &__title {
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    color: #353535;
  }
  &__desc {
    margin: 2px 0 16px;
    font-size: 14px;
    line-height: 20px;
    color: #656565;
    display: grid;
    justify-content: center;
  }
  &__button {
    display: flex;
    justify-content: center;
  }
  &--logo {
    width: 180px;
    border-style: solid;
    padding: 8px;
    img {
      width: 100%;
    }
  }
}
</style>
