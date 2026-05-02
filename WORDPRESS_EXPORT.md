# Guia de Exportação para WordPress

## 🎯 Método Recomendado: Elementor

### Passo 1: Instalar Plugins Necessários
```
1. Elementor (gratuito)
2. Elementor Pro (opcional, para mais widgets)
```

### Passo 2: Configurar Fonte Global
No WordPress Admin:
1. **Elementor → Settings → Style**
2. **Tipografia Global:**
   - Font Family: Sora
   - Font Weight: 400 (padrão), 600 (títulos), 700 (negrito)

### Passo 3: Configurar Cores Globais (NOVA PALETA 2026)
**Elementor → Settings → Style → Colors**

Adicione estas cores personalizadas:

| Nome | Código Hex | Uso |
|------|------------|-----|
| Obsidian | #0B0815 | Textos em fundo claro (substitui preto) |
| Atesteme | #AB03F4 | **Botões principais** (cor da marca) |
| Purple Bluest | #6E29DA | Gestores - cor fria |
| Purple Blue Gray | #B29CFB | Secundária - cor fria |
| Coral | #E8674F | Professores - detalhes quentes |
| Verde Sucesso | #10b981 | Checkmarks |

---

## 📦 Estrutura das Seções

### 🎯 SEÇÃO 1: Hero (Topo)

**Elementor:**
1. Adicionar Container
2. Layout: 2 Colunas (50/50)
3. Background: **Gradiente NOVO**
   - Cor 1: #0B0815 (obsidian)
   - Cor 2: #6E29DA (purple bluest)
   - Cor 3: #8431FF
   - Direção: 135deg

**Coluna 1 - Conteúdo:**
```
- Título (H1): "Plataforma de Inclusão e Educação Digital"
  - Fonte: Sora
  - Tamanho: 48px
  - Peso: 700 (Bold)
  - Cor: #0B0815 (Obsidian - em vez de preto)
  - Palavra "Educação Digital": Cor #AB03F4 (Atesteme)

- Descrição:
  - Texto: "Avaliamos, desenvolvemos e certificamos..."
  - Tamanho: 20px
  - Cor: #525252

- Badge no topo:
  - Background: rgba(178,156,251,0.2)
  - Texto: "Alinhada à PNED"
  - Cor texto: #6E29DA (Purple Bluest)
  - Border radius: 50px
  - Padding: 8px 16px
```

**Coluna 2 - Cards:**
```
Container com 2 cards:

CARD GESTORES (Cores Frias):
- Background: #ffffff
- Border: 2px solid #e5e5e5
- Border radius: 16px
- Padding: 32px
- Hover: Border #6E29DA (Purple Bluest)

  Conteúdo:
  - Ícone: 👥
  - Título: "Para Gestores"
  - Cor título: #0B0815 (Obsidian)
  - Subtítulo: "Secretários e coordenadores"
  - Lista com checkmarks (#6E29DA - Purple Bluest)
  - Botão: Background #6E29DA, Texto branco

CARD PROFESSORES (Purple + Coral):
- Background: Gradiente #B29CFB → #AB03F4 → #E8674F
- Border radius: 16px
- Padding: 32px
- Texto: Branco

  Conteúdo:
  - Ícone: 🎓
  - Título: "Para Professores"
  - Lista com checkmarks brancos
  - Botão: Background #AB03F4 (Atesteme), Texto branco
```

---

### 📊 SEÇÃO 2: Estatísticas

**Elementor:**
1. Container com 3 colunas (33/33/33)
2. Background: Transparente
3. Padding: 60px 0

**Cada coluna:**
```
- Ícone: 40px
  - Cor: #9333ea
- Número: 
  - Tamanho: 48px
  - Peso: 700
  - Cor: #171717
- Label:
  - Tamanho: 14px
  - Cor: #525252

Conteúdo:
1. 👥 32.000+ | Alunos Certificados
2. 🎓 1.500+ | Professores Formados
3. 📈 95% | Taxa de Conclusão
```

---

### 🎯 SEÇÃO 3: Como Funciona

**Elementor:**
1. Container
2. Background: #ffffff
3. Padding: 80px 0

**Header da Seção:**
```
- Badge: "Como Funciona"
  - Background: #e9d5ff
  - Cor: #7e22ce
- Título (H2): "Entenda como funciona"
  - Tamanho: 40px
  - Cor: #171717
- Descrição:
  - Cor: #525252
```

**Grid de Features (3 colunas):**
```
Cada card:
- Emoji (ícone): 64px
- Título: 20px, Bold, #171717
- Descrição: 16px, #525252

Lista de 6 items:
1. 🎯 Simples e adaptativa
2. 📚 Sugestões de conteúdos
3. 🏆 Certificação
4. 💻 100% on-line
5. 💰 Planos sob medida
6. 🎮 Ambiente gamificado
```

---

### 📸 SEÇÃO 4: Vantagens

**Elementor:**
1. Container com 2 colunas (50/50)
2. Background: #faf5ff (roxo muito claro)
3. Padding: 80px 0

**Coluna 1 - Texto:**
```
- Título: "Vantagens de assinar nossa plataforma"
  - Tamanho: 36px
  - Cor: #171717
- Lista:
  - Tamanho: 18px
  - Cor: #404040
  - Checkmark: ✓
```

**Coluna 2 - Imagem:**
```
- URL: https://atesteme.com/wp-content/uploads/2023/03/visual.png
- Border radius: 16px
- Box shadow: 0 10px 30px rgba(0,0,0,0.1)
```

---

### 🚀 SEÇÃO 5: CTA Final

**Elementor:**
1. Container
2. Background: #171717 (preto)
3. Padding: 100px 40px
4. Texto centralizado

**Conteúdo:**
```
- Título: "Pronto para começar?"
  - Tamanho: 40px
  - Cor: #ffffff
  - Peso: 700
- Descrição:
  - Cor: rgba(255,255,255,0.8)
  - Tamanho: 20px
- Botões (lado a lado):
  1. "Iniciar Autodiagnóstico"
     - Background: #9333ea
     - Cor: branco
  2. "Falar com Especialista"
     - Background: transparente
     - Border: 2px solid branco
     - Cor: branco
```

---

## 🔧 CSS Personalizado (Cole no WordPress)

Se precisar adicionar CSS customizado:

**Appearance → Customize → Additional CSS**

```css
/* Importar fonte Sora */
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@200;300;400;500;600;700;800&display=swap');

/* ========================================
   NOVA PALETA 2026 - Cores Frias e Quentes
   ======================================== */
:root {
  /* Cores da Marca */
  --obsidian: #0B0815;           /* Textos (substitui preto) */
  --atesteme: #AB03F4;           /* Botões principais */
  --purple-bluest: #6E29DA;      /* Gestores - cor fria */
  --purple-blue-gray: #B29CFB;   /* Secundária - cor fria */
  --coral: #E8674F;              /* Professores - cor quente */
  --verde-sucesso: #10b981;

  /* Gradientes */
  --gradient-home: linear-gradient(135deg, #0B0815 0%, #6E29DA 50%, #8431FF 100%);
  --gradient-gestores: linear-gradient(135deg, #0B0815 0%, #6E29DA 50%, #B29CFB 100%);
  --gradient-professores: linear-gradient(135deg, #B29CFB 0%, #AB03F4 50%, #E8674F 100%);
}

/* Aplicar fonte Sora globalmente */
body, h1, h2, h3, h4, h5, h6 {
  font-family: 'Sora', sans-serif !important;
}

/* Textos em fundo claro - usar Obsidian */
.texto-principal {
  color: var(--obsidian) !important;
}

/* Hover nos cards */
.atesteme-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.atesteme-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(11,8,21,0.15);
}

/* Botões com cor Atesteme */
.atesteme-button {
  background: var(--atesteme) !important;
  color: white !important;
  transition: all 0.3s ease;
}

.atesteme-button:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 30px rgba(171,3,244,0.3);
}

/* Card Gestores - Cores Frias */
.card-gestores {
  border-color: var(--purple-bluest) !important;
}

.card-gestores .botao {
  background: var(--purple-bluest) !important;
}

/* Card Professores - Purple + Coral */
.card-professores {
  background: var(--gradient-professores) !important;
}

.card-professores .detalhe {
  color: var(--coral) !important;
}
```

---

## 📱 Responsividade

**Configurações Mobile no Elementor:**

Para cada seção, configure:
- **Desktop:** Conforme descrito acima
- **Tablet:** 
  - Reduzir tamanhos de fonte em 20%
  - Grid de 2 colunas
- **Mobile:**
  - Reduzir tamanhos de fonte em 30%
  - Grid de 1 coluna
  - Padding reduzido (40px)

---

## ⚡ Plugins Úteis

1. **WP Fastest Cache** - Para performance
2. **Elementor** - Page builder
3. **Font Awesome** - Ícones extras
4. **Contact Form 7** - Formulários

---

## 🎨 Checklist Final

- [ ] Fonte Sora instalada globalmente
- [ ] Cores personalizadas adicionadas no Elementor
- [ ] Todas as seções criadas
- [ ] Imagens otimizadas (WebP)
- [ ] Testado em mobile
- [ ] Botões linkados corretamente
- [ ] Performance otimizada (cache)

---

## 📞 Alternativa Rápida: HTML Direto

Se preferir colar HTML direto:

1. Crie uma página no WordPress
2. Edite com **Gutenberg** ou **Classic Editor**
3. Mude para modo **HTML/Código**
4. Cole o código da próxima seção...
