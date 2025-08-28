<script setup></script>
<template>
  <!-- Hero -->
  <section class="hero">
    <div class="grid grid--2 container--lg">
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
  </section>

  <!-- Serviços -->
  <section class="services">
    <div class="container--lg">
      <h2 class="services__title section--title">Nossos Serviços</h2>
      <p class="services__text text">
        Oferecemos soluções completas para manutenção e reparo de equipamentos
        <br />
        médicos essenciais para diagnósticos precisos.
      </p>

      <!-- Grid de Serviços -->
      <div class="grid grid--4">
        <!-- Card Ultrassom -->
        <div class="services__card card">
          <div class="services__card__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-wifi"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.44 12.44 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.52.52 0 0 0 .668.05A11.45 11.45 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049"
              />
              <path
                d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.46 9.46 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065m-2.183 2.183c.226-.226.185-.605-.1-.75A6.5 6.5 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.5 5.5 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091zM9.06 12.44c.196-.196.198-.52-.04-.66A2 2 0 0 0 8 11.5a2 2 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"
              />
            </svg>
          </div>
          <h3 class="services__card__title">Transdutores de Ultrassom</h3>
          <p class="services__card__text">
            Manutenção especializada em transdutores de ultrassonografia
          </p>
        </div>
        <!-- Card Ecocardiograma -->
        <div class="services__card card">
          <div class="services__card__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-heart-pulse"
              viewBox="0 0 16 16"
            >
              <path
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857q.09.083.176.171a3 3 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01zM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5"
              />
              <path
                d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162z"
              />
            </svg>
          </div>
          <h3 class="services__card__title">Ecocardiograma</h3>
          <p class="services__card__text">
            Reparo e calibração de equipamentos de ecocardiograma
          </p>
        </div>
        <!-- Card Volumétrico -->
        <div class="services__card card">
          <div class="services__card__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-gear"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"
              />
              <path
                d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"
              />
            </svg>
          </div>
          <h3 class="services__card__title">Transdutores Volumétricos</h3>
          <p class="services__card__text">
            Manutenção em aparelhos volumétricos hospitalares
          </p>
        </div>
        <!-- Card Transesofágico -->
        <div class="services__card card">
          <div class="services__card__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-vignette"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"
              />
              <path
                d="M8.5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.683-6.281a.5.5 0 1 1-.866-.5.5.5 0 0 1 .866.5m-3.5 6.062a.5.5 0 1 1-.866-.5.5.5 0 0 1 .866.5m4.598-4.598a.5.5 0 1 1-.5-.866.5.5 0 0 1 .5.866m-6.062 3.5a.5.5 0 1 1-.5-.866.5.5 0 0 1 .5.866M11.5 8.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-7 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m6.281 1.683a.5.5 0 1 1 .5-.866.5.5 0 0 1-.5.866m-6.062-3.5a.5.5 0 1 1 .5-.866.5.5 0 0 1-.5.866m4.598 4.598a.5.5 0 1 1 .866-.5.5.5 0 0 1-.866.5m-3.5-6.062a.5.5 0 1 1 .866-.5.5.5 0 0 1-.866.5"
              />
            </svg>
          </div>
          <h3 class="services__card__title">Transesofágico</h3>
          <p class="services__card__text">
            Manutenção especializada em ultrassom transesofágio
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.hero {
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
    color: var(--text-muted);
    margin-top: var(--margin-md);
  }

  &__grid {
    margin-top: var(--margin-md);

    &--button {
      margin-bottom: 1rem;
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

.services {
  text-align: center;
  background-color: var(--bg);

  &__title {
    margin-bottom: var(--margin-md);
  }
  &__text {
    margin-bottom: calc(var(--margin-md) + 1.5rem);
  }

  &__card {
    border: 1px solid var(--text-terciary);
    cursor: default;
    transition: all .3s;
    box-shadow: var(--shadow-soft);
    height: 100%;

    &:hover{
      scale: 1.03;
    }
    &__icon {
      padding: 1rem;
      margin: 0 auto 1rem;
      background-color: #d7e9fe;
      border-radius: var(--radius);
      max-width: 4rem;
      max-height: 4rem;
      align-items: center;
    }

    &__title {
      margin-bottom: var(--margin-md);
    }
    &__text {
      font-size: 0.87rem;
      color: var(--text-muted);
    }
  }
}
@media (max-width: 27em) {
  a {
    display: block;
  }
}
</style>
