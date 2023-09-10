<template>
  <CardBlock
    title="Организация"
    :is-empty="!orgName"
    desc="Назване организации, логотип и описание"
    add-button-text="Добавить"
    v-model:edit-status="editStatus"
  >
    <template v-slot:info>
      <OrganizationInfo />
    </template>
    <template v-slot:form>
      <OrganizationForm v-model:editStatus="editStatus" />
    </template>
  </CardBlock>
</template>

<script>
import CardBlock from "@/components/card/CardBlock";
import OrganizationInfo from "@/components/card/OrganizationInfo";
import OrganizationForm from "@/components/forms/OrganizationForm";
import { mapState } from "vuex";

export default {
  components: {
    CardBlock,
    OrganizationInfo,
    OrganizationForm,
  },
  data: () => ({
    editStatus: false,
  }),
  computed: {
    ...mapState({
      orgName: (state) => state.organization.name,
    }),
  },
};
</script>

<style scoped></style>
