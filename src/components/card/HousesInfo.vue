<template>
  <div class="house-info">
    <div
      v-for="(item, index) in houses"
      :key="item.id"
      class="house-info__item"
    >
      <div class="house-info__title">Корпус {{ index + 1 }}</div>
      <div class="house-info__cont">
        <div class="house-info__cell">
          <InfoBlock title="Название" :text="item.name" />
        </div>
        <div class="house-info__cell">
          <InfoBlock
            title="Количество этажей"
            :text="item.countFloors.toString()"
          />
        </div>
        <div class="house-info__cell">
          <InfoBlock
            title="Количество номеров"
            :text="item.countRooms.toString()"
          />
        </div>
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
      houses: (state) => state.house.houses,
    }),
  },
};
</script>

<style scoped lang="scss">
.house-info {
  display: grid;
  gap: 8px;
  &__item {
    padding: 16px;
    border: 1px solid #c8c8c8;
    border-radius: 8px;
  }
  &__title {
    font-family: Inter;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
  }
  &__cont {
    display: grid;
    margin-top: 8px;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    @media screen and (max-width: 580px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
