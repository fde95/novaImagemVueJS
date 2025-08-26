<script setup>
import { RouterLink } from "vue-router";
import WhatsAppButton from "./WhatsAppButton.vue";

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
</script>

<template>
  <footer>
    <div class="container footer">
      <div class="footer__column">
        <RouterLink to="/">
          <img
            class="footer__column__logo"
            src="../assets/logoImages/logo-branco.png"
            alt="Nova Imagem | Manutenção de equipamentos de ultrassom"
          />
        </RouterLink>
        <p class="footer__column__text">
          Especialistas em manutenção e diagnóstico de equipamentos médicos.
        </p>
      </div>
      <div class="footer__column">
        <h3 class="footer__column__title">Serviços</h3>
        <ul class="footer__column__text">
          <li class="footer__column__item">Transesofágico</li>
          <li class="footer__column__item">Volumétricos</li>
          <li class="footer__column__item">Ecocardiograma</li>
          <li class="footer__column__item">Ultrassonografia</li>
          <li class="footer__column__item">Fontes de Alimentação</li>
        </ul>
      </div>
      <div class="footer__column">
        <h3 class="footer__column__title">Navegação</h3>
        <ul class="footer__column__text">
          <li class="footer__column__item">
            <RouterLink class="footer__column__item__link" to="/">
              Início
            </RouterLink>
          </li>
          <li class="footer__column__item">
            <RouterLink class="footer__column__item__link" to="/sobre-nos">
              A Empresa
            </RouterLink>
          </li>
          <li class="footer__column__item">
            <RouterLink class="footer__column__item__link" to="/servicos">
              Serviços
            </RouterLink>
          </li>
          <li class="footer__column__item">
            <RouterLink class="footer__column__item__link" to="contato">
              Contato
            </RouterLink>
          </li>
          <li class="footer__column__item">Políticas de Privacidade</li>
        </ul>
      </div>
      <div class="footer__column">
        <h3 class="footer__column__title">Contato</h3>
        <ul class="footer__column__text">
          <li class="footer__column__item">
            <a
              href="tel:+551135077295"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__column__item__link"
            >
              (11) 3507-7295
            </a>
          </li>
          <li class="footer__column__item">
            <a
              href="https://wa.me/5511958557779?text=Ol%C3%A1%2C+tudo+bem%3F+Venho+atrav%C3%A9s+do+site+e+gostaria+de+falar+com+um+atendente."
              target="_blank"
              rel="noopener noreferrer"
              class="footer__column__item__link"
            >
              Whatsapp
            </a>
          </li>
          <li class="footer__column__item">
            <a
              href="mailto:contato@novaimagem.com.br?subject=CONTATO%20VIA%20SITE"
              class="footer__column__item__link"
            >
              contato@novaimagem.com.br
            </a>
          </li>
          <li class="footer__column__item">
            <a
              href="https://maps.app.goo.gl/rTUUj7mEF4rzw6X56"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__column__item__link"
            >
              São Paulo, SP<br/>Atendimento em todo Brasil
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr />
    <div class="container copyright">
      <div class="copyright__column">
        <p class="copyright__column__text">
          {{ anoAtual }} © Nova Imagem Com. e Serv. de Equip. Médicos e Hospitalares LTDA. Todos os direitos reservados.
        </p>
      </div>
      <div class="copyright__column">
        <p class="copyright__column__text">Desenvolvido por Felipe Espinoza</p>
      </div>
    </div>
  </footer>
  <WhatsAppButton/>
</template>

<style scoped>
footer {
  background-color: var(--bg-secundary);
  padding: 2rem 1rem;
}
.footer {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  color: var(--text-terciary);
}
.footer__column__logo {
  max-width: 16rem;
  margin-bottom: 0.5rem;
  background-image: var(--gradient-primary);
  padding: .5rem;
}
.footer__column__title {
  font-size: 18px;
  margin-bottom: 0.5rem;
}
.footer__column__item {
  margin-bottom: 0.5rem;
}
.footer__column__text,
.footer__column__item__link,
.copyright__column__text {
  font-size: 14px;
  color: var(--text-muted-secundary);
  transition: 0.3s ease-in-out;
}
.footer__column__item__link:hover {
  color: white;
}
hr {
  max-width: 1200px;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid var(--text-muted);
  margin-top: 1rem;
  opacity: 0.3;
}
.copyright {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
@media (min-width: 843px) and (max-width: 1200px) {
  .footer__column__logo {
    max-width: 11rem;
  }
}

@media (max-width: 842px) {
  .footer,
  .copyright {
    display: block;
    text-align: center;
  }
  .footer__column__title {
    margin-top: 1.5rem;
  }
  .copyright__column__text {
    margin-bottom: 0.5rem;
  }
}
</style>
