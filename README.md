# TEU — site

Site institucional da TEU: concentrados de fruta, cocktails e shots feitos à mão em Lisboa.
HTML estático, sem build step, sem dependências de npm.

## Páginas

| Ficheiro | URL (Netlify) | Conteúdo |
| --- | --- | --- |
| `index.dc.html` | `/` | Página inicial — hero com garrafas clicáveis, gama, processo |
| `produtos.dc.html` | `/produtos` | Gama completa: 9 concentrados + cocktails + shots + preços |
| `produto/<sabor>.dc.html` | `/produto/<sabor>` | Ficha de cada sabor, com selector de concentração |
| `sobre.dc.html` | `/sobre` | História, valores, equipa, segurança alimentar, clientes |
| `encomendas.dc.html` | `/encomendas` | Contactos + formulário (FormSubmit → infoteupt@gmail.com) |
| `catalogo.dc.html` | `/catalogo` | Catálogo imprimível / PDF de toda a gama |

Sabores: `maracuja`, `pessego`, `manga`, `morango`, `tangerina`, `coco`, `framboesa`, `cereja`, `goiaba`.

## Ficheiros de apoio

- `site.js` — fonte única dos dados de todos os sabores (nutrição, ingredientes, preços, notas PT/EN). As páginas de produto e o catálogo têm estes valores escritos no próprio HTML (para carregarem instantaneamente), por isso ao alterar aqui é preciso alterar também na página correspondente — ou pedir a regeneração.
- `Bottle.dc.html` — garrafa TEU desenhada em SVG (vidro, arame, tampa, rótulo por sabor). Existe uma cópia em `produto/` porque as páginas de produto estão numa subpasta.
- `assets/` — fotografias.
- `support.js` — runtime das páginas. Não editar.
- `index.html` — entrada universal (redireciona para `index.dc.html`), para o caso de o alojamento não usar `netlify.toml`.

## Deploy — Netlify

1. `git push` para o GitHub.
2. No Netlify: **Add new site → Import an existing project** e escolher o repositório.
3. Build command: *(vazio)* · Publish directory: `.`
4. `netlify.toml` já configura os URLs limpos e os cache headers.

## Deploy — GitHub Pages

Funciona sem configuração: `index.html` redireciona para a página inicial. Os URLs
ficam com `.dc.html` (ex.: `/produto/maracuja.dc.html`) porque o GitHub Pages não
suporta rewrites.

## Idioma

Português por omissão, com alternador PT/EN no cabeçalho. A escolha é guardada em
`localStorage` (`teu-lang`). As traduções vivem no objeto `EN` no fim de cada página.

## Formulário

`encomendas.dc.html` envia por `POST` para `https://formsubmit.co/infoteupt@gmail.com`.
Na primeira submissão o FormSubmit envia um email de confirmação que tem de ser aceite uma vez.
Links `Pedir este produto` passam `?produto=<sabor>` e pré-selecionam o produto no formulário.

## A confirmar

- Preços por litro são **indicativos** e foram estimados — confirmar antes de publicar.
- Cargo de Leonardo Cortez indicado como *Co-fundador & Operações*.
- Afirmações de HACCP / rastreabilidade / cadeia de frio devem corresponder à realidade documentada.
