# Sistema de Design - Ateste.me
**Nova Paleta 2026 - Cores Frias e Quentes**

## 🎨 Paleta de Cores Principal

### Cores da Marca
```css
/* Obsidian - Azul escuro quase preto (substitui preto nos textos) */
--color-obsidian: #0B0815

/* Atesteme - Roxo vibrante da marca (USAR EM BOTÕES) */
--color-atesteme: #AB03F4

/* Purple Bluest - Roxo azulado (cor fria) */
--color-purple-bluest: #6E29DA

/* Purple Blue Gray - Roxo azul acinzentado (cor fria) */
--color-purple-blue-gray: #B29CFB

/* Coral - Cor quente para detalhes */
--color-coral: #E8674F
```

### Gradientes

#### Página Principal
```css
--gradient-home: linear-gradient(135deg, #0B0815 0%, #6E29DA 50%, #8431FF 100%);
```

#### Gradiente Principal
```css
--gradient-main: linear-gradient(140deg, #0B0815 0%, #270a3e 50%, #8431FF 100%);
```

### Cores para Personas

#### Gestores (Cores Frias - Purple Blues)
```css
--color-gestores-primary: #6E29DA      /* Purple Bluest */
--color-gestores-secondary: #B29CFB    /* Purple Blue Gray */
--color-gestores-dark: #0B0815         /* Obsidian */
--gradient-gestores: linear-gradient(135deg, #0B0815 0%, #6E29DA 50%, #B29CFB 100%);
```

#### Professores (Purple + Cores Quentes)
```css
--color-professores-primary: #AB03F4   /* Atesteme */
--color-professores-secondary: #B29CFB /* Purple Blue Gray */
--color-professores-warm: #E8674F      /* Coral - para detalhes */
--gradient-professores: linear-gradient(135deg, #B29CFB 0%, #AB03F4 50%, #E8674F 100%);
```

## 🔧 Como Trocar as Cores

Para mudar as cores do site inteiro, edite o arquivo:
`src/styles/colors.css`

### Exemplo: Trocar cor da marca

```css
/* DE */
--color-atesteme: #AB03F4;

/* PARA */
--color-atesteme: #sua-nova-cor;
```

### Exemplo: Trocar gradiente da página principal

```css
/* DE */
--gradient-home: linear-gradient(135deg, #0B0815 0%, #6E29DA 50%, #8431FF 100%);

/* PARA */
--gradient-home: linear-gradient(135deg, #cor1 0%, #cor2 50%, #cor3 100%);
```

## 📦 Componentes Reutilizáveis

### Button
Localização: `src/app/components/ui/Button.tsx`

Variantes disponíveis:
- `primary` - Atesteme (#AB03F4) - cor da marca
- `secondary` - Purple Bluest (#6E29DA)
- `gestores` - Cores frias (purple blues)
- `professores` - Purple + coral (quente)
- `outline` - Borda apenas

```tsx
<Button variant="gestores" size="lg" showArrow>
  Texto do Botão
</Button>
```

### Card
Localização: `src/app/components/ui/Card.tsx`

Variantes disponíveis:
- `default` - Card branco padrão
- `gestores` - Card com tema gestores
- `professores` - Card com tema professores
- `gradient` - Card com gradiente roxo

```tsx
<Card variant="gestores" hover={true}>
  Conteúdo do card
</Card>
```

### Section
Localização: `src/app/components/ui/Section.tsx`

Backgrounds disponíveis:
- `white` - Fundo branco
- `gray` - Fundo cinza claro
- `purple` - Fundo roxo claro
- `gradient` - Gradiente roxo
- `dark` - Fundo escuro

```tsx
<Section background="purple" id="minha-secao">
  <SectionHeader 
    badge="Badge" 
    title="Título" 
    description="Descrição"
  />
</Section>
```

### Badge
Localização: `src/app/components/ui/Badge.tsx`

```tsx
<Badge variant="primary" size="md">
  Texto do Badge
</Badge>
```

## 🎯 Tipografia

Fonte principal: **Sora**

Importada em: `src/styles/fonts.css`

Pesos disponíveis: 200, 300, 400, 500, 600, 700, 800

## 📝 Estrutura de Arquivos

```
src/
├── styles/
│   ├── colors.css      # ⭐ SISTEMA DE CORES
│   ├── fonts.css       # Importação da fonte Sora
│   ├── theme.css       # Configurações do tema
│   └── index.css       # Importação de todos os estilos
├── app/
│   ├── components/
│   │   ├── ui/         # ⭐ COMPONENTES REUTILIZÁVEIS
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Section.tsx
│   │   │   └── Badge.tsx
│   │   └── shared/     # Componentes compartilhados
│   │       ├── Navbar.tsx
│   │       └── Footer.tsx
│   └── pages/          # Páginas do site
│       ├── HomePage.tsx
│       ├── GestoresPage.tsx
│       ├── ProfessoresPage.tsx
│       └── GuiaPNEDPage.tsx
```

## 🚀 Boas Práticas

1. **Sempre use as variáveis CSS** ao invés de cores diretas
   ✅ `style={{ color: 'var(--color-atesteme)' }}`
   ❌ `style={{ color: '#AB03F4' }}`

2. **Use OBSIDIAN em vez de preto para textos**
   ✅ `style={{ color: 'var(--color-obsidian)' }}`  /* #0B0815 */
   ❌ `style={{ color: '#000000' }}`

3. **Use a cor ATESTEME em botões**
   ✅ `<Button variant="primary">Texto</Button>`  /* Usa --color-atesteme */

4. **Use os componentes prontos** ao invés de criar do zero
   ✅ `<Button variant="gestores">Texto</Button>`
   ❌ `<button className="bg-purple-600...">Texto</button>`

5. **Mantenha a consistência entre personas:**
   - Gestores: cores frias (purple blues)
   - Professores: purple + cores quentes (coral)

6. **Componentes isolados** facilitam manutenção e testes

## 🎨 Guia de Uso de Cores por Página

### Página Principal (Home)
- Background: Gradiente (`--gradient-home`)
- Cores: Mix de frias e quentes
- Botões: Atesteme (#AB03F4)

### Gestores
- Paleta: **Cores Frias** (Purple Blues)
- Cor principal: Purple Bluest (#6E29DA)
- Cor secundária: Purple Blue Gray (#B29CFB)
- Cor escura: Obsidian (#0B0815)
- Background: `--gradient-gestores` ou `--color-gestores-bg`
- **SEM CORAL** (sem cores quentes)

### Professores  
- Paleta: **Purple + Cores Quentes**
- Cor principal: Atesteme (#AB03F4)
- Cor secundária: Purple Blue Gray (#B29CFB)
- **Detalhes quentes**: Coral (#E8674F)
- Background: `--gradient-professores` ou `--color-professores-bg`

## 📋 Checklist de Cores

- [ ] Textos em fundo claro: usar `--color-obsidian` (#0B0815)
- [ ] Botões principais: usar `--color-atesteme` (#AB03F4)
- [ ] Página Gestores: só cores frias (sem coral)
- [ ] Página Professores: purple + detalhes em coral
- [ ] Página Principal: gradiente (`--gradient-home`)
