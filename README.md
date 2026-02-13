# ProAASI Web

Plataforma web do **Programa de Orientação e Adaptação do Aparelho de Amplificação Sonora Individual (ProAASI)**.

Projeto desenvolvido com foco em **acessibilidade, usabilidade e inclusão digital**, especialmente voltado para pessoas idosas e usuários de aparelhos auditivos.

---

## 📌 Sobre o Projeto

O ProAASI Web tem como objetivo disponibilizar conteúdos educativos sobre:

- Uso e manuseio de aparelhos auditivos  
- Estratégias de comunicação  
- Dúvidas frequentes  
- Orientações práticas  

A aplicação é totalmente responsiva e multilíngue (PT/EN).

---

## 🛠️ Tecnologias Utilizadas

- **Vue 3**
- **Vite**
- **Vue Router**
- **Vue I18n**
- **Netlify (Deploy)**
- **HTML5 + CSS3 (Scoped CSS)**

---

## 📁 Estrutura do Projeto

src/
├── components/
│ ├── layout/
│ └── ui/
│
├── pages/
│ ├── intro/
│ ├── aparelhos/
│ ├── comunicacao/
│ └── ...
│
├── content/
│ ├── pt/
│ │ ├── home.json
│ │ ├── intro.json
│ │ ├── aparelhos.json
│ │ └── ...
│ └── en/
│ ├── home.json
│ ├── intro.json
│ ├── aparelhos.json
│ └── ...
│
├── router/
├── i18n.js
└── main.js


---

## 🌍 Internacionalização (i18n)

O projeto utiliza **vue-i18n** para gerenciamento de idiomas.

### 📌 Regras Importantes

1. A estrutura dos arquivos `pt` e `en` deve ser **idêntica**.
2. Nunca remover chaves de um idioma sem atualizar o outro.
3. Nunca inserir textos fixos diretamente nas páginas.
4. Todo conteúdo textual deve estar centralizado nos arquivos JSON.

### 📌 Uso correto

Para textos simples:

js
t('caminho.da.chave')
Para listas estruturadas (arrays no JSON):

tm('caminho.da.lista')
Para garantir reatividade ao trocar idioma:

const lista = computed(() => tm('caminho.da.lista'))

---

## ▶️ Como Rodar Localmente
1️⃣ Instalar dependências
npm install
2️⃣ Rodar ambiente de desenvolvimento
npm run dev
A aplicação estará disponível em:

http://localhost:5173

---

## 🏗️ Build de Produção
Gerar arquivos otimizados:

npm run build
Arquivos finais serão gerados em:

dist/
Para testar o build localmente:

npm run preview
🚀 Deploy
O deploy é realizado via Netlify.

Configuração padrão
Build command: npm run build

Publish directory: dist

---

## ⚠️ Atenção
Se forem adicionados novos vídeos:

Verificar tamanho total da pasta public/videos

Conferir limite do plano Netlify

Garantir que exista versão PT e EN dos vídeos

---

## ♿ Diretrizes de Acessibilidade
O projeto foi desenvolvido considerando:

Contraste adequado de cores

Layout responsivo

Hierarquia clara de títulos

Uso de elementos semânticos (header, main, section)

Navegação simplificada

Interações acessíveis via teclado quando aplicável

Linguagem clara e objetiva

---

## 📹 Arquivos de Vídeo
Os vídeos estão armazenados em:

public/videos/
Estrutura recomendada:

videos/
├── audicao/
│   ├── audicao-pt.mp4
│   └── audicao-en.mp4

---

## 🧩 Fluxo para Adição de Novo Conteúdo
Criar as chaves no JSON em pt

Replicar exatamente a mesma estrutura no en

Criar a página correspondente em pages/

Registrar a rota no router

Testar troca de idioma

Testar responsividade (mobile, tablet e desktop)

## 🛠️ Boas Práticas de Manutenção
Evitar lógica complexa diretamente nas páginas

Priorizar componentização

Manter separação clara entre estrutura (Vue) e conteúdo (JSON)

Testar sempre a troca de idioma após alterações

Manter commits descritivos

Validar navegação após alterações no router

## 📚 Contexto Acadêmico
Projeto desenvolvido no âmbito do:

Programa de Pós-Graduação em Fonoaudiologia
Faculdade de Odontologia de Bauru – Universidade de São Paulo (USP)

## 📄 Licença
Projeto acadêmico institucional.
Uso restrito para fins educacionais e científicos.


---