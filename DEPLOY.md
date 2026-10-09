# Subir no GitHub e publicar na Vercel

O projeto já vem com um repositório Git iniciado e o primeiro commit feito.
Você só precisa apontar para o seu GitHub e conectar na Vercel.

---

## 1. GitHub

Crie um repositório **vazio** em <https://github.com/new>
(sem README, sem .gitignore, sem licença) — por exemplo `dias-beserra-site`.

Depois, na pasta do projeto:

```bash
git remote add origin https://github.com/SEU-USUARIO/dias-beserra-site.git
git branch -M main
git push -u origin main
```

> Se preferir repositório privado, marque "Private" ao criar. A Vercel
> funciona igual com repositório privado.

**Se o Git pedir login:** o GitHub não aceita mais senha no push. Use o
GitHub CLI (`gh auth login`) ou crie um Personal Access Token em
Settings → Developer settings → Tokens e use ele no lugar da senha.

---

## 2. Vercel

1. Entre em <https://vercel.com> com a conta do GitHub.
2. **Add New → Project** e escolha o repositório que você acabou de subir.
3. Não mude nada nas configurações — a Vercel detecta Next.js sozinha:
   - Framework: **Next.js**
   - Build Command: `next build` (padrão)
   - Output Directory: padrão
   - Install Command: `npm install` (padrão)
4. **Deploy.**

Em cerca de um minuto o site sobe num endereço
`https://dias-beserra-site.vercel.app`.

A partir daí, todo `git push` na branch `main` publica sozinho.

### Variável de ambiente (opcional)

Só é necessária se você for integrar o formulário a um endpoint HTTP.
Em **Settings → Environment Variables**:

| Name | Value |
|---|---|
| `NEXT_PUBLIC_FORM_ENDPOINT` | a URL do seu Formspree / n8n / API |

Sem essa variável, o formulário abre o WhatsApp da empresa com os dados
preenchidos — que é como está funcionando hoje.

---

## 3. Domínio próprio

Quando o cliente liberar o `diasbeserra.com.br`:

1. Na Vercel: **Settings → Domains → Add** e digite `diasbeserra.com.br`.
2. A Vercel mostra os registros de DNS. No painel do registrador
   (Registro.br, Hostinger, GoDaddy…), crie:

   | Tipo | Nome | Valor |
   |---|---|---|
   | A | `@` | `76.76.21.21` |
   | CNAME | `www` | `cname.vercel-dns.com` |

   > Confira sempre os valores que a **própria tela da Vercel mostrar** —
   > eles são a fonte oficial e podem mudar.

3. Espere a propagação (de minutos a algumas horas). O HTTPS é emitido
   automaticamente.
4. **Importante:** depois que o domínio estiver no ar, abra
   `src/config/siteConfig.ts` e ajuste:

   ```ts
   url: 'https://www.diasbeserra.com.br',
   ```

   Esse campo alimenta o canonical, o Open Graph e o sitemap. Commit e push.

---

## 4. Antes de considerar publicado

- [ ] Cliente confirmou os itens **[CONFIRMAR]** do `siteConfig.ts`: e-mail,
      "12+ anos" e "300+ projetos", normas NBR e ferramentas (Tekla / AutoCAD)
- [ ] `siteConfig.url` com o domínio final
- [ ] Instagram da empresa preenchido, se já existir
- [ ] Depoimentos só com textos e nomes autorizados (`showTestimonials: true`)
- [ ] Ao subir pelo site do GitHub: `package.json` e `src/` na **raiz** do
      repositório (arraste o conteúdo da pasta, não a pasta) — senão a Vercel
      acusa "Couldn't find any `pages` or `app` directory"

Os detalhes de cada item estão no `README.md`.

---

## Hospedagem estática (alternativa à Vercel)

Se o cliente já tiver hospedagem tipo Hostinger ou cPanel:

```bash
npm run export
```

Gera a pasta `out/` — basta enviar o conteúdo dela para a pasta pública do
servidor. Nesse modo a otimização de imagem da Vercel não roda (as imagens
são servidas como estão) e os headers de segurança precisam ser configurados
no próprio servidor.
