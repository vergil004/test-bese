<template>
  <CardBlock
    title="Корпусы"
    :is-empty="houses.length === 0"
    desc="Корпусы показываются в отделе бронирования и в модуле на сайте.Для работы отеля нужен по меньшей мере один корпус."
    add-button-text="Добавить корпусы"
    v-model:edit-status="editStatus"
  >
    <template v-slot:info>
      <HousesInfo />
    </template>
    <template v-slot:form>
      <HousesForm v-model:edit-status="editStatus"></HousesForm>
    </template>
  </CardBlock>
</template>

<script>
import CardBlock from "@/components/card/CardBlock";
import HousesInfo from "@/components/card/HousesInfo";
import HousesForm from "@/components/forms/HousesForm";
import { mapState } from "vuex";

export default {
  components: {
    CardBlock,
    HousesForm,
    HousesInfo,
  },
  data: () => ({
    editStatus: false,
  }),
  computed: {
    ...mapState({
      houses: (state) => state.house.houses,
    }),
  },
};
</script>

<style scoped></style>
