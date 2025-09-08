<script setup>
document.addEventListener("DOMContentLoaded", () => {
  // Trocar classes do ícone ao entrar e sair do card
  const cards = document.querySelectorAll(".services__card");

  cards.forEach((card) => {
    const icons = card.querySelectorAll(".services__card__icon");
    if (!icons.length) return;

    const activate = () => {
      icons.forEach((el) => {
        el.classList.remove("services__card__icon");
        el.classList.add("services__card__icon--is-active");
      });
    };

    const deactivate = () => {
      icons.forEach((el) => {
        el.classList.remove("services__card__icon--is-active");
        el.classList.add("services__card__icon");
      });
    };

    // Pointer
    card.addEventListener("pointerenter", activate);
    card.addEventListener("pointerleave", deactivate);

    // Acessibilidade
    card.addEventListener("focusin", activate);
    card.addEventListener("focusout", deactivate);
  });
});
</script>

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chat"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"
              />
            </svg>
            Solicitar Orçamento
          </a>
          <a
            href="#"
            class="btn btn--secundary hero__grid--button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
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
      <div class="grid grid--2">
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
      </div>
      <div class="grid grid--2">
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

  <!-- Certificado ANVISA -->
  <section class="certificate">
    <div class="container--lg">
      <div class="certificate__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          class="bi bi-shield-check"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"
          />
          <path
            d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"
          />
        </svg>
      </div>
      <h2 class="certificate__title section--title">
        Certificados pela ANVISA
      </h2>
      <p class="certificate__text text">
        Na Nova Imagem, entendemos a importância da certificação da ANVISA para
        manutenção de equipamentos médicos. Nossa dedicação em obter e manter
        essas certificações reflete nosso compromisso com a qualidade e
        segurança dos serviços que oferecemos.
      </p>

      <!-- Grid Certificação -->
      <div class="grid grid--3 container">
        <div class="column certificate__card card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-check2-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"
            />
            <path
              d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
            />
          </svg>
          <h3 class="certificate__card__title">Conformidade Total</h3>
          <p class="certificate__card__text">
            Todos os processos seguem rigorosamente as normas da ANVISA
          </p>
        </div>
        <div class="column certificate__card card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-star"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"
            />
          </svg>
          <h3 class="certificate__card__title">Qualidade Certificada</h3>
          <p class="certificate__card__text">
            Padrões internacionais de qualidade e segurança
          </p>
        </div>
        <div class="column certificate__card card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-shield"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"
            />
          </svg>
          <h3 class="certificate__card__title">Segurança Garantida</h3>
          <p class="certificate__card__text">
            Proteção total para pacientes e profissionais de saúde
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Diferenciais -->
  <section class="qualities">
    <div class="container--lg">
      <h2 class="section--title qualities__title">Nossos Diferenciais</h2>
      <p class="text qualities__text">
        O que nos torna a escolha ideal para seu equipamento médico
      </p>

      <!-- Grid Diferencial -->
      <div class="grid grid--3 container">
        <div class="qualities__card card">
          <div class="qualities__card__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-patch-check"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"
              />
              <path
                d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"
              />
            </svg>
          </div>
          <h3 class="qualities__card__title">Garantia de Qualidade</h3>
          <p class="qualities__card__text">
            Peças originais e técnicos especializados
          </p>
        </div>
        <div class="qualities__card card">
          <div class="qualities__card__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-clock-history"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"
              />
              <path
                d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"
              />
              <path
                d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"
              />
            </svg>
          </div>
          <h3 class="qualities__card__title">Agilidade no Atendimento</h3>
          <p class="qualities__card__text">
            Processo otimizado e prazos reduzidos
          </p>
        </div>
        <div class="qualities__card card">
          <div class="qualities__card__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-card-checklist"
              viewBox="0 0 16 16"
            >
              <path
                d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"
              />
              <path
                d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"
              />
            </svg>
          </div>
          <h3 class="qualities__card__title">Consultoria Técnica</h3>
          <p class="qualities__card__text">
            Orientação especializada e suporte completo
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Orçamento -->
  <div class="query">
    <div class="container--lg">
      <h2 class="query__title section--title">Precisa de Manutenção?</h2>
      <p class="query__text text">
        Entre em contato agora e tenha seu equipamento médico funcionando
        <br/>
        perfeitamente. Orçamento gratuito e atendimento especializado.
      </p>
<!-- Botões de contato -->
      <div class="query__buttons">
        <div class="query__buttons__link">
          <a href="http://" target="_blank" rel="noopener noreferrer" class="btn btn--secundary">
            Solicitar Orçamento
          </a>
        </div>
        <div class="query__buttons__link">
          <a href="#" target="_blank" rel="noopener noreferrer" class="btn btn--secundary">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
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
    transition: all 0.3s;
    box-shadow: var(--shadow-soft);
    height: 100%;

    &:hover {
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

      &--is-active {
        background-color: var(--text-secundary);
        color: var(--bg);
        padding: 1rem;
        margin: 0 auto 1rem;
        border-radius: var(--radius);
        max-width: 4rem;
        max-height: 4rem;
        align-items: center;
      }
    }

    &__title {
      margin-bottom: var(--margin-md);
    }
    &__text {
      font-size: 0.87rem;
      color: var(--text-muted);
    }
  }

  &__link {
    margin-top: var(--margin-md);
  }
}

.certificate {
  background-image: var(--gradient-primary);
  text-align: center;
  color: var(--bg);

  &__icon {
    font-size: 3rem;
    background-color: #ffffff1a;
    padding: 1.15rem;
    margin: 0 auto;
    width: 6.2rem;
    height: 6rem;
    border-radius: 9999px;
  }
  &__title {
    margin-top: var(--margin-md);
  }
  &__text {
    margin: var(--margin-md) auto;
    max-width: 53rem;
    width: 100%;
  }

  &__card {
    background-color: #ffffff1a;
    margin-top: var(--margin-md);
    cursor: default;
    &__icon {
      font-size: 2rem;
    }
    &__title {
      font-size: 1rem;
      margin: calc(var(--margin-md) - 12px) 0;
    }
    &__text {
      font-size: 0.875rem;
    }
  }
}

.qualities {
  background-color: var(--gradient-subtle);
  text-align: center;
  &__title {
    margin-bottom: var(--margin-md);
  }
  &__text {
    margin-bottom: var(--margin-md);
  }
  &__card {
    border: 1px solid var(--text-terciary);
    cursor: default;
    transition: all 0.3s;
    box-shadow: var(--shadow-soft);
    height: 100%;

    &__title {
      margin: calc(var(--margin-md) - 12px) 0;
    }
    &__text {
      font-size: 0.87rem;
      color: var(--text-muted);
    }
  }
}

.query{
  background-image: var(--gradient-primary);
  color: var(--bg);
  text-align: center;

  &__title{
    margin-bottom: var(--margin-md);
  }

  &__buttons{
    margin-top: var(--margin-md);
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 27em){
      display: block;
    }

    &__link{
      margin: var(--margin-md) 0;
    }
  }
}

@media (max-width: 27em) {
  a {
    display: block;
  }
}
</style>
