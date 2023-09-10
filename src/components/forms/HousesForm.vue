<template>
  <form class="houses-form">
    <div
      class="houses-form__house"
      v-for="(item, index) in houses"
      :key="item.id"
    >
      <div class="houses-form__title">
        <div>Корпус {{ index + 1 }}</div>
        <button
          class="houses-form__remove"
          v-if="houses.length > 1"
          @click.prevent="removeHouse(item.id)"
        >
          <img :src="icons.RemoveIcon" alt="удалить" />
        </button>
      </div>
      <div class="houses-form__inputs">
        <div class="houses-form__item">
          <div class="form-label"><sup>*</sup>Название</div>
          <div class="form-input">
            <input
              type="text"
              v-model="item.name"
              placeholder="Напишите название"
            />
          </div>
        </div>
        <div class="houses-form__double">
          <div class="houses-form__item">
            <div class="form-label"><sup>*</sup>Количество этажей</div>
            <div class="form-input">
              <input type="number" v-model="item.countFloors" placeholder="0" />
            </div>
          </div>
          <div class="houses-form__item">
            <div class="form-label"><sup>*</sup>Количество номеров</div>
            <div class="form-input">
              <input type="number" v-model="item.countRooms" placeholder="0" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="houses-form__add">
      <AddButton text="Добавить Корпус" @click.prevent="addHouse" />
    </div>
    <div class="houses-form__save">
      <ButtonApp type="submit" text="Сохранить" @click.prevent="submit" />
    </div>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AddButton from "@/components/base/AddButton";
import ButtonApp from "@/components/base/ButtonApp";
import RemoveIcon from "../../assets/img/icons/remove.svg";
export default {
  props: {
    editStatus: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    AddButton,
    ButtonApp,
  },
  data: () => ({
    houses: [
      {
        name: null,
        countFloors: null,
        countRooms: null,
        id: "0",
      },
    ],
    icons: {
      RemoveIcon,
    },
  }),
  computed: {
    ...mapState({
      housesState: (state) => state.house.houses,
    }),
  },
  mounted() {
    if (this.housesState.length) {
      this.houses = this.housesState;
    }
  },
  methods: {
    ...mapActions({
      setHousesAction: "setHousesAction",
    }),
    addHouse() {
      this.houses.push({
        name: null,
        countFloors: null,
        countRooms: null,
        id: this.getRandomId(),
      });
    },
    getRandomId() {
      return (
        Math.random().toString(36).substr(2, 9) + "-" + Date.now().toString(36)
      );
    },
    removeHouse(id) {
      this.houses = this.houses.filter((item) => item.id !== id);
    },
    submit(event) {
      event.preventDefault();
      this.setHousesAction(this.houses);
      this.$emit("update:editStatus", !this.editStatus);
    },
  },
};
</script>

<style scoped lang="scss">
.houses-form {
  display: grid;
  gap: 8px;
  &__house {
    background-color: #f6f6f6;
    padding: 16px;
    border-radius: 8px;
  }
  &__title {
    font-family: Inter;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 8px;
    justify-content: space-between;
    display: flex;
  }
  &__remove {
    display: flex;
    border: none;
    border-radius: 6px;
    width: 28px;
    height: 28px;
    justify-content: center;
    align-items: center;
    background: #ffeaea;
    cursor: pointer;
  }
  &__inputs {
    display: grid;
    gap: 12px;
  }
  &__double {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    @media screen and (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
  &__add {
    .add-btn {
      width: 100%;
      padding: 10px 12px;
      font-size: 14px;
      justify-content: center;
      height: 40px;
      img {
        width: 12px;
        height: 12px;
      }
    }
  }
}
.houses {
}
</style>
