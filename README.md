# Nova Imagem – Site em Vue 3 + Vite

Projeto de modernização do site da **Nova Imagem**, migrando de um CMS para uma aplicação **Vue 3** com **Vite**, componentes reutilizáveis e estilos em **SCSS** (com `scoped`).

---

## 🚀 Tecnologias
- [Vue 3](https://vuejs.org/) + `<script setup>`
- [Vite](https://vitejs.dev/)
- HTML5, CSS3/SCSS e JavaScript ES6+
- Node.js (ambiente)

---

## ✅ Últimas entregas
- **Seção Hero** com título, texto, CTA duplo e imagem.
- **Seção “Nossos Serviços”** com **grid responsivo** (1 col – mobile, 2 col – tablet, 4 col – desktop) e **cards com alturas iguais** (Grid `align-items: stretch` + `height: 100%` nos cards).
- **Migração de CSS para SCSS** com nesting/BEM:
  - `WhatsAppButton.vue`
  - `Navbar.vue`
  - `Footer.vue`

> Observação: componentes utilizam `<style scoped lang="scss">` para melhor leitura e manutenção.

---

## 📂 Estrutura (resumo)
```
src/
├─ assets/
├─ components/
│  ├─ Navbar.vue
│  ├─ Footer.vue
│  └─ WhatsAppButton.vue
├─ pages/
│  └─ Home.vue
├─ App.vue
├─ main.scss
└─ main.js
```

---

## 🧭 Padrões de código
- **BEM** para nomenclatura (`.btn`, `.btn--primary`, `.card__footer`).
- **SCSS** com **nesting** e **mobile-first**.
- **Breakpoints (sugestão)** em `em`:  
  - `48em` (≈768px) → tablet  
  - `64em` (≈1024px) → desktop
- **Grid utilitário**: usar `align-items: stretch` quando precisar de **cartões com mesma altura**.

---

## 🛠️ Rodando o projeto localmente
1. Clone o repositório
   ```bash
   git clone https://github.com/fde95/novaImagemVueJS.git
   cd nova-imagem
   ```

2. Instale as dependências
   ```bash
   npm install
   ```

3. Ambiente de desenvolvimento
   ```bash
   npm run dev
   # abra http://localhost:5173
   ```

4. Build de produção
   ```bash
   npm run build
   npm run preview
   ```

---

## 📌 Status
- Estrutura base ✔️
- Navbar, Footer e WhatsApp Button ✔️ (estilos migrados para SCSS)
- Seção Hero ✔️
- Seção “Nossos Serviços” ✔️ (grid e alturas iguais)
- Demais páginas/conteúdos 🚧

---

## 🗺️ Roadmap próximo
- Preencher conteúdos reais das páginas
- Melhorias de acessibilidade (foco/ARIA) e SEO (metatags/OG)
- Otimização de imagens (WebP/AVIF) e pré‑compressão (Brotli/Gzip)
- Testes de responsividade cross‑device

---

## 👤 Autor
Desenvolvido por **Felipe Espinoza**  
🔗 LinkedIn: https://www.linkedin.com/in/fde95/
