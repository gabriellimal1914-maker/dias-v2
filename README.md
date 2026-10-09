# Dias Beserra Estruturas — Site Institucional

Site institucional para **Dias Beserra Estruturas Metálicas | Engenharia**.
Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS.

Tema **claro** (papel/concreto) com seções escuras pontuais — faixa de
destaques, CTA e rodapé — e laranja `#F26A21` como único acento.
Fotos, vídeo e logo são **arquivos reais enviados pela empresa**.

---

## Rodar o projeto

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
npm start          # servir a build
npm run export     # build estática em /out (hospedagem simples)
```

Node 18.18+ (recomendado 20 ou 22).

---

## O arquivo que você vai editar: `src/config/siteConfig.ts`

Todo o conteúdo institucional, contatos, fotos, galeria, números, serviços e
SEO está centralizado nesse arquivo. Nenhum componente tem texto ou telefone
"chumbado".

| O que mudar | Onde |
|---|---|
| WhatsApp, e-mail, cidade, área de atendimento | `siteConfig` |
| Mensagem automática do WhatsApp | `WHATSAPP_MESSAGE` |
| Instagram da empresa (ainda não existe) | `siteConfig.instagram` / `instagramHandle` |
| Crédito do rodapé | `siteConfig.credit` |
| Fotos do Hero, Empresa, CTA e seção técnica | `photos` |
| Logo oficial | `brand` (arquivos em `public/images/brand/`) |
| **Galeria de obras** (fotos, vídeo, filtros) | `gallery` + `galleryCategories` |
| Faixa de destaques (12+ anos, 300+ projetos…) | `stats` |
| Normas e ferramentas | `technicalRefs` |
| Depoimentos (hoje vazio — seção oculta) | `testimonials` + `features.showTestimonials` |
| Serviços e itens de cada card | `services` |
| Etapas do processo | `processSteps` |
| Palavras do ticker | `marqueeItems` |
| Opções do formulário | `projectTypes` |
| Título, descrição e palavras-chave | `seo` |

### Regra de conteúdo aplicada

Nada é apresentado como real sem confirmação. Telefone fixo, endereço,
clientes, locais e nomes de obra continuam vazios e ocultos. Itens marcados
com **[CONFIRMAR]** no arquivo vieram do material de divulgação da empresa
(flyer e vídeo) e devem ser validados antes de publicar em produção:

- e-mail `contato@diasbeserra.com.br` (veio do briefing; não aparece no material da empresa);
- "12+ anos de experiência" e "300+ projetos executados" (flyer);
- normas NBR 8800 / 6118 / 6120 / 6122 e ferramentas Tekla Structures / AutoCAD (flyer);
- domínio `siteConfig.url`.

---

## Galeria de obras

Fotos em `public/images/obras/` (WebP otimizado; o sufixo `-960` é a versão
leve usada nos cards) e vídeo em `public/videos/` (WebM + MP4, sem a faixa de
áudio original). Cada item da galeria tem:

```ts
{
  id: 'g1', type: 'image', category: 'vigamento',
  title: 'Vigamento metálico em execução',   // descreve a foto — não é nome de obra
  alt: 'Vista superior do vigamento…',         // texto alternativo + legenda ampliada
  src: '/images/obras/xxx.webp',               // alta (visualização ampliada)
  thumb: '/images/obras/xxx-960.webp',         // card
  focus: '50% 55%',                            // enquadramento do recorte no card
  // client / location / year: só com dados confirmados pela empresa
}
```

- Filtros: `galleryCategories` (a contagem de cada filtro é automática).
- Clique/toque no card abre a **visualização ampliada** (`<dialog>` nativo):
  legenda, contador, setas ← → do teclado, Esc para fechar, arrastar no
  celular; o foco volta ao card de origem.
- Vídeo: `type: 'video'`, com `src` (MP4), `srcWebm` e `poster`. Tem controles
  visíveis e nunca toca sozinho — só quando o visitante abre o vídeo.

Para adicionar uma foto nova: exporte em WebP (≈1600 px no lado maior + uma
versão de 960 px), salve em `public/images/obras/` e acrescente um item em
`gallery`.

## Depoimentos

A lista `testimonials` está **vazia de propósito** (nenhum depoimento real
autorizado foi enviado) e, assim, a seção não aparece. Para publicar, adicione
os textos e nomes autorizados pelos clientes e ponha
`features.showTestimonials: true`.

## Instagram da empresa

```ts
instagram: 'https://instagram.com/usuario',
instagramHandle: '@usuario',
```

O ícone aparece sozinho no header, no card de contato e no rodapé.

## Formulário de orçamento

Sem configuração, o formulário monta a mensagem com os dados preenchidos e
**abre o WhatsApp da empresa** — o visitante confere e envia.

Para enviar por HTTP (Formspree, n8n, API própria), crie `.env.local`:

```
NEXT_PUBLIC_FORM_ENDPOINT=https://seu-endpoint/aqui
```

## Logo

`public/images/brand/` tem o emblema e o logo completo recortados do arquivo
oficial (fundo transparente). O cabeçalho usa emblema + nome em texto; o rodapé
usa o logo completo. Se o arquivo não carregar, `Logo.tsx` cai sozinho na
versão vetorial (`LogoMarkVector`). Favicon e ícone da Apple (`src/app/`) e a
imagem de compartilhamento (`public/og-image.jpg`) usam o emblema oficial.

---

## Estrutura

```
src/
├── app/
│   ├── layout.tsx        metadata, Open Graph, Schema.org, fontes
│   ├── page.tsx          composição da home
│   ├── globals.css       design system (tokens, botões, cards, campos, lightbox)
│   ├── icon.png · apple-icon.png · sitemap.ts · robots.ts
├── components/
│   ├── Header · Hero · Marquee · Stats · About · Services · Process
│   ├── TechnicalSection · Projects (galeria) · GalleryLightbox
│   ├── Testimonials · Differentials · CTA · Contact · ContactForm
│   ├── StickyCTA · Footer
│   └── ui/
│       ├── Logo · Icons · Button · SectionHeading
│       ├── Photo            foto + arte técnica por baixo (rede de segurança)
│       ├── TrussDrawing     prancha técnica esquemática
│       ├── ProjectArt       arte por categoria (reserva das fotos)
│       ├── StructureScene · Counter · ScrollReveal
├── config/siteConfig.ts
├── fonts/                Montserrat + Inter (variáveis, auto-hospedadas)
└── lib/utils.ts

public/
├── images/obras/         fotos reais (WebP) + capa do vídeo
├── images/brand/         emblema e logo oficiais
├── videos/               vídeo da obra (WebM + MP4)
└── og-image.jpg          imagem de compartilhamento

scripts/
├── build-preview.mjs     gera o preview de demonstração (após npm run export)
└── og.html + gen-assets.mjs   geram public/og-image.jpg
```

---

## Decisões técnicas

- **Sem bibliotecas de animação.** Um único `IntersectionObserver` global anima
  os elementos `.reveal`; movimento leve e desligado com
  `prefers-reduced-motion`.
- **Fontes auto-hospedadas** (`next/font/local`): zero requisição externa.
- **Imagens 100% locais** — nenhum host externo; `next/image` gera AVIF/WebP.
- **Toda foto tem arte técnica por baixo** — o layout nunca mostra vazio nem
  ícone de imagem quebrada.
- **Caminho até o orçamento**: CTA no header, Hero, cada serviço (WhatsApp já
  com o serviço na mensagem), galeria, seção técnica, CTA final, contato,
  rodapé, pílula flutuante no desktop e barra fixa no mobile.
- **Acessibilidade**: contraste AA nos textos, foco visível, alvos de toque
  ≥ 40 px, rótulos em todos os campos, textos alternativos descritivos,
  filtros com `aria-pressed`, galeria ampliada com foco preso e teclado,
  skip link, conteúdo legível sem JavaScript.
- **SEO**: título e descrição com os serviços e "São Paulo", H1 com a palavra
  principal, hierarquia de cabeçalhos por seção, Open Graph 1200×630 com foto
  real, `sitemap.xml`, `robots.txt` e JSON-LD `EngineeringService` apenas com
  dados confirmados.

## Publicação

Feito para a **Vercel** (deploy direto do repositório, sem configuração) —
veja `DEPLOY.md`. Ao enviar pelo site do GitHub, arraste **o conteúdo** da
pasta do projeto (para que `package.json` e `src/` fiquem na raiz do
repositório), não a pasta em si.

Antes de publicar, ajuste `siteConfig.url` para o domínio final — ele alimenta
canonical, Open Graph e sitemap.
