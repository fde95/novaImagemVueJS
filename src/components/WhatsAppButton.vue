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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-whatsapp circle__link__icon"
        viewBox="0 0 16 16"
      >
        <path
          d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
        />
      </svg>
      Precisa de ajuda?
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-whatsapp"
        viewBox="0 0 16 16"
      >
        <path
          d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
        />
      </svg>
    </a>
  </div>
</template>

<style scoped lang="scss">
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
  @media (max-width: 1000px) {
    display: none;
  }

  &__link {
    color: white;
    font-size: 14px;
    display: flex;
    &__icon {
      margin-right: 0.5rem;
    }
  }

  &__popup {
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

    &__header {
      background-color: #075e54;
      border-radius: 1rem 1rem 0 0;
      padding: 1rem 2.5rem 1rem 1rem;
      &__text {
        color: var(--bg);
        font-size: 14px;

        &__link {
          color: var(--bg);
          font-size: 14px;
          font-weight: 600;
          text-decoration: underline;
        }
      }

      &__closer {
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
    }

    &__body {
      padding: 1rem 2.5rem 1rem 1rem;
      border-radius: 0 0 1rem 1rem;
      background-color: var(--bg);

      &__link {
        display: flex;
        align-items: center;
        justify-content: start;
        position: relative;
        overflow: hidden;

        &__info {
          padding-left: 1rem;

          &__text {
            color: var(--text-primary);
            font-size: 12px;

            &__highlight {
              font-size: 1rem;
              font-weight: 700;
              color: var(--text-secundary);
            }
          }
        }
        &__image {
          &__avatar {
            float: left;
            width: 60px;
            height: 60px;
            position: relative;
          }
        }
      }
    }
  }

  // Mobile
  &__mobile {
    display: none;
    z-index: 999999;
    @media (max-width: 1000px) {
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
  }
}
</style>
