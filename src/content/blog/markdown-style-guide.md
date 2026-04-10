---
title: 'Markdown: Guía rápida de uso'
description: 'Aqui tienes una guia estructurada para que cualquier persona pueda dominarlo, desde los cimientos hasta los trucos que ofrece Github.'
pubDate: 'Apr 05 2026'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

**Markdown** es, en esencia, la forma más sencilla de escribir para la web. Es un lenguaje de marcado ligero que te permite dar formato a un texto usando caracteres comunes del teclado, los cuales luego se convierten en HTML de forma automática.

> Aquí tienes la guía definitiva, práctica y sin rodeos para dominarlo.

## ¿Qué es y por qué usarlo?

- **Es legible:** Un archivo Markdown `(.md)` se entiende perfectamente incluso sin procesar.
- **Es universal:** Funciona en GitHub, editores de código (como VS Code), plataformas de blog (Astro, Jekyll) y aplicaciones de notas.
- **Enfoque en el contenido:** No te distraes con menús de herramientas, *solo* *escribes*.

---

## Headings | Encabezados

Los siguientes elementos **HTML** `<h1>`—`<h6>` representan seis niveles de encabezados de sección. `<h1>` es el nivel de sección más alto, mientras que `<h6>` es el más bajo.

```markdown
  # h1
  ## h2
  ### h3
  #### h4
  ##### h5
  ###### h6
```

#### Resultado:

## H2

### H3

#### H4

## Paragraph | Párrafo

Para escribir un párrafo solo tienes que escribir una o varias líneas de texto. Si quieres que el párrafo sea más largo, puedes añadir un salto de línea (`<br>`) para que quede más claro. Por ejemplo:

lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.

## Images | Imágenes

### Sintaxis

```markdown
![Alt text](./full/or/relative/path/of/image)
```

### Resultado:

![blog placeholder](../../assets/blog-placeholder-about.jpg)

## Blockquotes | Citas

El elemento `blockquote` representa contenido citado de otra fuente, opcionalmente con una referencia que debe aparecer dentro de un elemento `footer` o `cite`, y opcionalmente con modificaciones en el texto, como anotaciones y abreviaturas. Para resaltar pensamientos o referencias externas:

```markdown
> "La simplicidad es la máxima sofisticación.".
```

### Cita sin indicación de la fuente

#### Sintaxis

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.
```

#### Resultado:

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

### Cita destacada con referencia

#### Sintaxis

```markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Resultado:

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables | Tablas

Se construyen con tuberías `|` y guiones `-`. Para alinear el contenido, usa dos puntos `:`.

### Sintaxis

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

Ejemplo:

```markdown
| Herramientas | Uso | Popularidad |
| :--- | :---: | ---: |
| Astro | Web | Alta |
| React | Frontend | Media |
```

### Resultado:

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

---

| Herramientas | Uso | Popularidad |
| :--- | :---: | ---: |
| Astro | Web | Alta |
| React | Frontend | Media |

## Code Blocks | Bloques de código

### Sintaxis

Podemos usar *tres comillas invertidas* (backticks) ` ``` ` en una nueva línea, escribir el fragmento de código y cerrarlo con otras tres comillas invertidas en una nueva línea; para resaltar la sintaxis específica de un lenguaje, escribe el nombre del lenguaje después de las tres primeras comillas invertidas, por ejemplo: html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

### Resultado:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## Tipos de listas

### Lista ordenada

#### Sintaxis

```markdown
1. First item
2. Second item
3. Third item
```

#### Resultado:

1. First item
2. Second item
3. Third item

### Lista desordenada

#### Syntax

```markdown
- List item
- Another item
- And another item
```

#### Resultado:

- List item
- Another item
- And another item

### Lista anidada

#### Sintaxis

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

#### Resultado:

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

### Listas de tareas (Uso avanzado)

Perfectas para Readmes, gestión de proyectos o los famosos `Checklists` de GitHub.

#### Sintaxis

```markdown
- [ ] List item
- [x] List item
- [ ] List item
```

#### Resultado:

- [ ] Aprender Markdown
- [x] Aprender Astro
- [ ] Terminar el portafolio

### Lineas de Separación

Usa tres guiones o asteriscos para crear una regla horizontal `---`:

## Otros Elementos — abbr, sub, sup, kbd, mark

### Abreviaturas `<abbr>`

Este elemento se utiliza para marcar abreviaturas o acrónimos. Su función principal es proporcionar una expansión o descripción del término cuando el usuario pasa el cursor sobre él.

#### Sintaxis

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> es un formato de imagen de mapa de bits.
```

El atributo `title` contiene el texto completo. **Al renderizarse**, el navegador suele mostrar el acrónimo con un subrayado punteado; al posicionar el ratón encima, aparece un *"tooltip"* con el nombre completo (en este caso, el significado de las siglas GIF).

#### Resultado:

<abbr title="Graphics Interchange Format">GIF</abbr> es un formato de imagen de mapa de bits.

### Subíndice `<sub>`

Define un texto que se muestra en una posición inferior a la línea base y con un tamaño de fuente más pequeño.

#### Sintaxis

```markdown
H<sub>2</sub>O
```

Es el estándar para representar fórmulas químicas. En el ejemplo, el número 2 baja de nivel respecto a la H y la O, indicando la cantidad de átomos de hidrógeno en la molécula de agua.

#### Resultado:

H<sub>2</sub>O

### Superíndice `<sup>`

Al contrario que el anterior, este elemento sitúa el texto por encima de la línea base.

#### Sintaxis

```markdown
X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>
```

Se utiliza principalmente para exponentes matemáticos, notas al pie de página o indicadores ordinales. Aquí, las letras n se elevan para representar una potencia en una ecuación.

#### Resultado:

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

### Entrada de Teclado `<kbd>`

Este elemento representa una entrada de usuario, normalmente a través del teclado, aunque también puede referirse a comandos de voz.

#### Sintaxis

```markdown
Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.
```

Semánticamente, le indica al navegador y a los lectores de pantalla que ese texto es una tecla física. Visualmente, muchos navegadores le aplican una fuente monoespaciada (como la de una terminal) o un borde que simula la forma de una tecla.

#### Resultado:

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> para terminar la sesión.

### Marca | Resaltado `<mark>`

Se utiliza para *resaltar / marcar* un fragmento de texto debido a su relevancia contextual en el momento.

#### Sintaxis

```markdown
Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

Es el equivalente digital a usar un marcador fluorescente. A diferencia de la negrita (que denota importancia), <mark> se usa para captar la atención del lector sobre una palabra específica dentro de una cita o párrafo. Por defecto, los navegadores lo muestran con un fondo amarillo.

#### Resultado:

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
