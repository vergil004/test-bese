<template>
  <div class="select">
    <div class="select__top" :class="{ 'select__top--active': active }">
      <input
        @click="active = !active"
        :value="this.select"
        :placeholder="this.defaultText"
        readonly
      />
    </div>
    <Transition name="slide">
      <div class="select__bottom" v-if="active">
        <ul>
          <li
            @click="optionClick(item.title)"
            v-for="item in list"
            :key="item.id"
            :class="{ select__active: item.title === select }"
          >
            {{ item.title }}
            <img
              v-if="item.title === select"
              :src="icons.checkIcon"
              alt="check"
            />
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script>
import checkIcon from "../../assets/img/icons/check.svg";
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
    defaultText: {
      type: String,
      required: false,
      default: "Выберете значение",
    },
    select: {
      type: String,
      required: false,
      default: "",
    },
  },
  data: () => ({
    active: false,
    icons: {
      checkIcon,
    },
  }),
  methods: {
    optionClick(option) {
      this.active = false;
      this.$emit("update:select", option);
    },
  },
};
</script>

<style scoped lang="scss">
.select {
  position: relative;
  &__top {
    position: relative;
    border: 1px solid #c8c8c8;
    height: 40px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
    input {
      width: 100%;
      height: 100%;
      border: none;
      padding: 0;
      outline: none;
      cursor: pointer;
      font-size: 16px;
      line-height: 24px;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 12px;
      height: 12px;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url("../../assets/img/icons/down.svg");
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      transition: 0.3s ease-in;
      transform-origin: center;
    }
    &--active {
      &:after {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }
  &__bottom {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    transform: translateY(2px);
    border: 1px solid #c8c8c8;
    border-radius: 6px;
    box-shadow: 0px 8px 16px 0px #00000014;
    background-color: #fff;
    transition: transform 0.4s ease-in-out;
    overflow: hidden;
    transform-origin: top;
    ul {
      padding: 8px;
      display: grid;
      gap: 4px;
      margin: 0;
      li {
        list-style-type: none;
        text-align: left;
        cursor: pointer;
        border-radius: 8px;
        font-size: 16px;
        line-height: 24px;
        padding: 6px 8px;
        color: #0a0a0a;
        display: flex;
        justify-content: space-between;
        &:hover {
          background-color: #f6f6f6;
        }
      }
    }
  }
  &__active {
    background-color: #f6f6f6;
  }
}
.slide-enter,
.slide-leave-to {
  transform: translateY(2px) scaleY(0);
}
</style>
