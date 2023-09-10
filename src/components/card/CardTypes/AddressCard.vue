<template>
  <CardBlock
    title="Фактический адрес"
    :is-empty="!address"
    desc=""
    add-button-text="Добавить"
    v-model:edit-status="editStatus"
  >
    <template v-slot:info>
      <AddressInfo />
    </template>
    <template v-slot:form>
      <address-form v-model:editStatus="editStatus" />
    </template>
  </CardBlock>
</template>

<script>
import CardBlock from "@/components/card/CardBlock";
import AddressInfo from "@/components/card/AddressInfo";
import AddressForm from "@/components/forms/AddressForm";
import { mapState } from "vuex";

export default {
  components: {
    CardBlock,
    AddressForm,
    AddressInfo,
  },
  data: () => ({
    editStatus: false,
  }),
  computed: {
    ...mapState({
      address: (state) => state.address.address,
    }),
  },
};
</script>

<style scoped></style>
