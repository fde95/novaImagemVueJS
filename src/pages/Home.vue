<script setup></script>
<template>
  <!-- Hero -->
  <div class="hero">
    <div class="grid grid-2 container">
      <div class="column">
        <span class="hero__highlight">
          Especialistas em Manutenção de Ultrassom
        </span>
        <h1 class="hero__title">
          Manutenção e Diagnóstico
          <br />
          de <span class="hero__title--emphasis">Equipamentos Médicos</span>
        </h1>
        <p class="hero__text">
          Especialistas em transdutores de ultrassom, ecocardiografia e
          componentes eletrônicos médicos. Atendimento em todo o Brasil com
          garantia de qualidade
        </p>
        <div class="hero__grid">
          <a
            href="#"
            class="btn btn--primary hero__grid--button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar Orçamento
          </a>
          <a
            href="#"
            class="btn btn--secundary hero__grid--button"
            target="_blank"
            rel="noopener noreferrer"
          >
            (11) 9999-9999
          </a>
        </div>
      </div>
      <div class="column">
        <img class="hero__img" src="https://placehold.co/660x500" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.hero {
  padding: 5rem 1rem;
  background-image: var(--gradient-subtle);

  &__highlight {
    padding: 0.125rem 0.625rem;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-primary);
    border: 1px solid var(--text-terciary);
    border-radius: 999px;
  }
  &__title {
    font-size: calc(3rem - 3px);
    margin-top: var(--margin-md);
    line-height: 1;
    @media (max-width: 64em) {
      font-size: 2.25rem;
    }

    &--emphasis {
      color: transparent;
      background-image: var(--gradient-primary);
      background-clip: text;
    }
  }
  &__text {
    font-size: 1rem;
    color: var(--text-muted);
    margin-top: var(--margin-md);
  }

  &__grid {
    margin-top: var(--margin-md);

    &--button {
      margin-bottom:1rem;
      text-align: center;
    }
  }

  &__img {
    height: 500px;
    width: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
    @media (max-width: 64em) {
      margin-top: 4rem;
    }
  }
}

@media (max-width: 27em) {
  a {
    display: block;
  }
}
</style>
