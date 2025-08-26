<script setup>
import { ref } from "vue";

const showPopUp = ref(false);

function toggle() {
  showPopUp.value = !showPopUp.value;
}
</script>

<template>
  <!-- Desktop -->
  <button @click="toggle" class="circle">
    <div class="circle__link">
      <i class="bi bi-whatsapp"></i> Precisa de ajuda?
    </div>
  </button>
  <div v-if="showPopUp" class="circle__popup">
    <div class="circle__popup__header">
      <p class="circle__popup__header__text">
        Precisando de ajuda? Fale com um de nossos atendentes agora mesmo ou
        envie um e-mail para
        <a
          href="mailto:contato@novaimagem.com.br"
          target="_blank"
          rel="noopener noreferrer"
          class="circle__popup__header__text__link"
          >contato@novaimagem.com.br</a
        >.
      </p>
    </div>
    <span @click="toggle" class="circle__popup__header__closer">
      <i class="bi bi-x-lg"></i>
    </span>
    <div class="circle__popup__body">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        class="circle__popup__body__link"
      >
        <div class="circle__popup__body__link__image">
          <img
            class="circle__popup__body__link__image__avatar"
            src="../assets/whatsAppButton/avatar_female.webp"
            alt="Atendimento via WhatsApp com equipe Nova Imagem"
          />
        </div>
        <div class="circle__popup__body__link__info">
          <p class="circle__popup__body__link__info__text">
            Atendimento Especializado
            <br />
            <span class="circle__popup__body__link__info__text__highlight">
              Nova Imagem
            </span>
          </p>
        </div>
      </a>
    </div>
  </div>

  <!-- Mobile -->
  <div class="circle__mobile">
    <a href="#" target="_blank" rel="noopener noreferrer" class="circle__link">
      <i class="bi bi-whatsapp"></i>
    </a>
  </div>
</template>

<style scoped>
/* Desktop */
.circle {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 0.75rem 1.25rem;
  background-color: #075e54;
  border-radius: 40rem;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.114);
  cursor: pointer;
  border: none;
  z-index: 999999;
}
.bi-whatsapp {
  font-size: 18px;
  margin-right: 6px;
}
.circle__link {
  color: white;
  font-size: 14px;
}
.circle__popup {
  position: fixed;
  bottom: 80px;
  right: 20px;
  max-width: 360px;
  width: 100%;
  border-radius: 1rem;
  transition: ease-in-out 1s;
  background-color: transparent;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.114);
  z-index: 999999;
}
.circle__popup__header {
  background-color: #075e54;
  border-radius: 1rem 1rem 0 0;
  padding: 1rem 2.5rem 1rem 1rem;
}
.circle__popup__header__text,
.circle__popup__header__text__link {
  color: var(--bg);
  font-size: 14px;
}
.circle__popup__header__text__link {
  font-weight: 600;
  text-decoration: underline;
}
.circle__popup__header__closer {
  display: block;
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 7px;
  right: 10px;
  transition: all 0.3s;
  color: var(--bg);
  opacity: 0.5;
  cursor: pointer;
}
.circle__popup__body {
  padding: 1rem 2.5rem 1rem 1rem;
  border-radius: 0 0 1rem 1rem;
  background-color: var(--bg);
}
.circle__popup__body__link__image__avatar {
  float: left;
  width: 60px;
  height: 60px;
  position: relative;
}
.circle__popup__body__link {
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
  overflow: hidden;
}
.circle__popup__body__link__info {
  padding-left: 1rem;
}
.circle__popup__body__link__info__text {
  color: var(--text-primary);
  font-size: 12px;
}
.circle__popup__body__link__info__text__highlight {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-secundary);
}

/* Mobile */
.circle__mobile {
  display: none;
  z-index: 999999;
}
@media (max-width: 1000px) {
  .circle {
    display: none;
  }
  .circle__mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    padding: 1rem;
    height: 3.5rem;
    width: 3.5rem;
    background-color: #075e54;
    border-radius: 80rem;
    box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.114);
  }
  .bi-whatsapp {
    font-size: 1.5rem;
    margin: 0;
  }
}
</style>
