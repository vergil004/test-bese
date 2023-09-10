<template>
  <div class="layout">
    <ButtonApp text="Информация об организации" @click="show = !show" />
    <Transition name="fade">
      <ModalApp title="Информация об организации" v-model:show="show">
        <div class="main">
          <OrganizationCard />
          <HousesCard />
          <AddressCard />
        </div>
      </ModalApp>
    </Transition>
  </div>
</template>

<script>
import OrganizationCard from "@/components/card/CardTypes/OrganizationCard";
import HousesCard from "@/components/card/CardTypes/HousesCard";
import AddressCard from "@/components/card/CardTypes/AddressCard";
import ButtonApp from "@/components/base/ButtonApp";
import ModalApp from "@/components/base/ModalApp";

export default {
  name: "App",
  components: {
    OrganizationCard,
    HousesCard,
    AddressCard,
    ButtonApp,
    ModalApp,
  },
  data: () => ({
    show: false,
  }),
};
</script>

<style lang="scss">
@font-face {
  font-family: "Inter";
  src: url("assets/fonts/Inter-Bold.otf") format("truetype");
  font-style: normal;
  font-weight: 700;
  font-display: swap;
}
@font-face {
  font-family: "Roboto";
  src: url("assets/fonts/Roboto-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Roboto";
  src: url("assets/fonts/Roboto-Medium.ttf") format("truetype");
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}

#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.layout {
  width: 770px;
  margin: 0 auto;
  @media screen and (max-width: 770px) {
    width: 100%;
  }
}
body * {
  box-sizing: border-box;
  font-family: Roboto;
}
.info {
  display: grid;
  gap: 12px;
}
.main {
  display: grid;
  gap: 16px;
}
.form-label {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
  text-align: left;
  margin-bottom: 2px;
  height: 24px;
  sup {
    color: #d91d0b;
  }
}
.form-input {
  input,
  textarea {
    width: 100%;
    height: 40px;
    border: 1px solid #c8c8c8;
    padding: 8px;
    border-radius: 8px;
  }
  textarea {
    height: 80px;
  }
  &--post {
    width: 140px;
  }
}
.form-desc {
  font-size: 14px;
  line-height: 20px;
  color: #656565;
  margin-top: 2px;
  text-align: left;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
