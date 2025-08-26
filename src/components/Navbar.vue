<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="container navbar">
      <RouterLink to="/">
        <img
          src="../assets/logoImages/logo.png"
          alt="Nova Imagem | Manutação de equipamentos de ultrassom"
          class="navbar__logo"
        />
      </RouterLink>
      <nav class="navbar__route">
        <li>
          <RouterLink to="/" class="navbar__route__link">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/sobre-nos" class="navbar__route__link"
            >Sobre Nós</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/servicos" class="navbar__route__link"
            >Serviços</RouterLink
          >
        </li>
        <li>
          <RouterLink to="Contato" class="navbar__route__link"
            >Contato</RouterLink
          >
        </li>
      </nav>
      <ul class="navbar__route">
        <li>
          <button class="btn btn__secundary">(11) 1234-5678</button>
        </li>
        <li>
          <button class="btn btn__primary">WhatsApp</button>
        </li>
      </ul>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid #e7eaef;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.114);
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar__logo {
  max-width: 14rem;
  width: 100%;
}
.navbar__route {
  display: flex;
  align-items: center;
}
.navbar__route__link {
  margin: 0 0.5rem;
  font-weight: 600;
  color: var(--text-muted);
  font-size: var(--text-size);
  transition: .3s ease-in-out;
}
.navbar__route__link:is(:hover, :focus, :active) {
  color: var(--text-secundary);
}
@media (max-width: 1000px) {
  .navbar {
    display: block;
    text-align: center;
  }
  .navbar__logo {
    max-width: 10rem;
    width: 100%;
    padding-top: 1rem;
  }
  .navbar__route {
    margin-top: 1rem;
    justify-content: center;
  }
  .btn {
    display: none;
  }
}
</style>
