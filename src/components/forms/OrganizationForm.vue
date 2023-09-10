<template>
  <form class="org-form">
    <div class="org-form__item">
      <div class="form-label"><sup>*</sup> Тип</div>
      <div class="form-input">
        <SelectApp :list="typesList" v-model:select="select" />
      </div>
    </div>
    <div class="org-form__item">
      <div class="form-label"><sup>*</sup> Название организации</div>
      <div class="form-input">
        <input v-model="name" type="text" placeholder="Санаторий Огонек" />
      </div>
    </div>
    <div class="org-form__item">
      <div class="form-label"><sup>*</sup> Описание</div>
      <div class="form-input">
        <textarea v-model="desc" type="text" placeholder="Мой первый бизнес" />
        <div class="form-desc">Описание в модуле на сайте не показывается</div>
      </div>
    </div>
    <div class="org-form__item">
      <div class="form-label"><sup>*</sup> Логотип</div>
      <div class="org-form__drag">
        <DragAndSaveImage v-model:logo="logo" />
      </div>
    </div>
    <div class="org-form__button">
      <ButtonApp type="submit" text="Сохранить" @click.prevent="submit" />
    </div>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SelectApp from "@/components/base/SelectApp";
import DragAndSaveImage from "@/components/base/DragAndSaveImage";
import ButtonApp from "@/components/base/ButtonApp";
export default {
  props: {
    editStatus: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    SelectApp,
    DragAndSaveImage,
    ButtonApp,
  },
  data: () => ({
    select: "",
    logo: null,
    name: "",
    desc: "",
  }),
  mounted() {
    this.getTypesList();
    this.select = this.orgType;
    this.logo = this.orgLogo;
    this.name = this.orgName;
    this.desc = this.orgDesc;
  },
  computed: {
    ...mapState({
      typesList: (state) => state.typesOrg.types,
      orgName: (state) => state.organization.name,
      orgType: (state) => state.organization.type,
      orgDesc: (state) => state.organization.desc,
      orgLogo: (state) => state.organization.logo,
    }),
  },
  methods: {
    ...mapActions({
      getTypesList: "getTypesList",
      setOrganizationData: "setOrganizationData",
    }),
    submit(event) {
      event.preventDefault();
      this.setOrganizationData({
        name: this.name,
        logo: this.logo,
        desc: this.desc,
        type: this.select,
      });
      this.$emit("update:editStatus", !this.editStatus);
    },
  },
};
</script>

<style scoped lang="scss">
.org-form {
  display: grid;
  gap: 16px;
}
</style>
