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

## Sintaxis básica

La sintaxis básica de **Markdown** incluye encabezados, párrafos, énfasis, listas, enlaces, imágenes, citas y bloques de código. Hoy, su evolución es *CommonMark*, estándar que busca formalizar el uso de Markdown sin añadir muchas funciones nuevas, consolidándose como referencia actual.

### Headings | Encabezados

Los siguientes elementos **HTML** `<h1>`—`<h6>` representan seis niveles de encabezados de sección. `<h1>` es el nivel de sección más alto, mientras que `<h6>` es el más bajo.

```markdown
  # Título de nivel 1 - (h1)  
  ## Título de nivel 2 - (h2)
  ### Título de nivel 3 - (h3)
  #### Título de nivel 4 - (h4)
  ##### Título de nivel 5 - (h5)
  ###### Título de nivel 6 - (h6)
```

**Ejemplo de encabezados:**

## H2

### H3

#### H4

### Paragraph | Párrafo

Para escribir un párrafo solo tienes que escribir una o varias líneas de texto. Si quieres que el párrafo sea más largo, puedes añadir un salto de línea (`<br>`) para que quede más claro. **Por ejemplo**:

lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.

### Reglas horizontales

Las reglas horizontales son útiles para separar/dividir visualmente secciones de texto. Puedes usar tres guiones o asteriscos para crear una regla horizontal `---`:

```markdown
---
***
___
- - -
* * *
_ _ _
```

Todas estas combinaciones acabarán produciendo esta división:

---

### Emphasis | Énfasis (negrita y cursiva)

Esta sección se centra en el uso de **negrita** y **cursiva** en Markdown.

```markdown
  Esto es un **texto en negrita**.
  Esto es un _texto en cursiva_.
```

Asi se puede ver el resultado:

- Esto es un **texto en negrita**.
- Esto es un *texto en cursiva*.

---

### Links | Enlaces (Hipervínculos)

Los enlaces son una forma de crear un enlace a un sitio web o a otro recurso en línea.

```markdown
  [Ir a Google](https://google.com)
  <https://google.com>
```

- [Ir a Google](https://google.com)
- <https://google.com>

---

### Images | Imágenes

La sintaxis de las imágenes es similar a la de los enlaces, con la diferencia de que
comienza con un signo de exclamación `!`. La URL puede ser absoluta o relativa al documento.

```markdown
![Alt text](./full/or/relative/path/of/image)
```

Este es el resultado:

![blog placeholder](../../assets/blog-placeholder-about.jpg)

---

### Blockquotes | Citas

El elemento `blockquote` representa contenido citado de otra fuente, opcionalmente con una referencia que debe aparecer dentro de un elemento `footer` o `cite`, y opcionalmente con modificaciones en el texto, como anotaciones y abreviaturas. Para resaltar pensamientos o referencias externas:

```markdown
  Sintaxis de Markdown:
  > "La simplicidad es la máxima sofisticación.".
  Niveles:
  > Cita de primer nivel
  >> Cita de segundo nivel dentro de la anterior
  >>> Cita de tercer nivel
```

**Resultados:** Son una coqueteria.

> "La simplicidad es la máxima sofisticación."
> Cita de primer nivel
>> Cita de segundo nivel dentro de la anterior
>>> Cita de tercer nivel

Otro ejemplo:

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Ten en cuenta** que puedes utilizar la _sintaxis Markdown_ dentro de una cita con bloque.
```

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Ten en cuenta** que puedes utilizar la *sintaxis Markdown* dentro de una cita con bloque.

Ejemplo de Cita destacada con referencia

```markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
```

> Don't communicate by sharing memory, share memory by communicating.
> — *Rob Pike*[^1]

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

---

### Code Blocks | Bloques de código (fragmentos de código)

Podemos usar *tres comillas invertidas* (backticks) ` ``` ` en una nueva línea, escribir el fragmento de código y cerrarlo con otras tres comillas invertidas en una nueva línea; para **resaltar** la sintaxis específica de un lenguaje, escribe el nombre del lenguaje después de las tres primeras comillas invertidas, por ejemplo: html, javascript, css, markdown, typescript, txt, bash

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

Resultado del ejemplo:

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

---

### Caracteres especiales (Como mostrarlos)

Cuando necesitas **mostrar** literalmente caracteres que Markdown usa para dar formato (como * o #), debes “*escaparlos*”. Esto se logra colocando una barra invertida \ antes del carácter especial, indicando a Markdown que lo trate como texto y no como instrucción de estilo.

```markdown
  Esto es un \* texto en negrita \*.
  \# No se muestra como un titulo h1 
```

Mira el resultado:

- Esto es un \* texto en negrita \*.
- \# No se muestra como un titulo h1

---

### Uso de etiquetas HTML

Markdown tiene un truco bastante *cool*: si lo que quieres no está en su repertorio (como incrustar un video, armar una tabla compleja o aplicar un estilo muy específico), puedes meter directamente **código HTML** en tu texto. La mayoría de procesadores lo aceptan y lo muestran tal cual. ***Eso sí, ojo***: no todos los entornos soportan cualquier tipo de HTML.

```markdown
  <p style="color: green; text-align: center;">
    Este es un texto de prueba
  </p>
```

Mira el resultado:

<p style="color: green; text-align: center;">
  Este es un texto de prueba
</p>

---

### Markdown soporta emojis

En **Markdown** puedes insertar emojis de forma sencilla: basta con copiarlos y pegarlos directamente en tu texto 😀. También, en algunos entornos, puedes usar códigos cortos entre dos puntos, por ejemplo `:smile:` → 😄. Así tu contenido se vuelve más expresivo y divertido. En windows también puedes usar `win + .` para insertar emojis.

---

### Usos de listas

Las listas en **Markdown** son súper fáciles: puedes hacerlas con *viñetas*(no ordenadas) o con *números*(ordenadas).

#### Lista ordenada

```markdown
1. First item
2. Second item
3. Third item
  1. sub-item
  2. sub-item
    1. sub-item 2.2.1
4. Fourth item
```

Ejemplo:

1. First item
2. Second item
3. Third item
    1. sub-item
    2. sub-item
        1. sub-item 2.2.1
4. Fourth item

#### Lista desordenada

Para las no ordenadas usas `-`, `*` o `+` seguido de un espacio. Y si quieres sub-listas, solo metes una tabulación o cuatro espacios… ¡y listo, ya tienes tu lista anidada!

```markdown
- List item
- Another item
- And another item
  - sub-item
  - sub-item
    - sub-item
- And another item
* List item
+ Another item
```

😜 Como la ven ahí, pues:

- List item
- Another item
- And another item
  - sub-item
  - sub-item
    - sub-item
- And another item
- List item
- Another item

---

## Uso de la sintaxis extendida Markdown de GitHub

Markdown ya es bastante poderoso, pero `GitHub` le metió su propio *“sabor”* 😎: **GitHub Flavored Markdown (GFM)**. Esta versión extiende el estándar *CommonMark* y trae cositas extra súper útiles: tablas 📊, tachado ~~así~~, enlaces automáticos 🔗, listas de tareas ✅ y más. En resumen, GFM es como el Markdown clásico… pero con esteroides 💪.

---

### Tables | Tablas

Se construyen con tuberías `|` y guiones `-`. Para alinear el contenido, usa dos puntos `:`.

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

```markdown
| Herramientas | Uso | Popularidad |
| :--- | :---: | ---: |
| Astro | Web | Alta |
| React | Frontend | Media |
```

**Ejemplo básico:**

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| *italics* | **bold** | `code` |

**Ejemplo con alineaciones:**

| Herramientas | Uso | Popularidad |
| :--- | :---: | ---: |
| Astro | Web | Alta |
| React | Frontend | Media |

---

### Tachado

Para **tachar** texto, usa dos tildes (`~`).

```markdown
  Esto es un ~~texto tachado~~.
```

Mira el resultado:

- Esto es un ~~texto tachado~~.

---

### Listas de tareas (Uso avanzado)

Las listas de tareas en Markdown son como tu checklist digital 📝. Básicamente, armas una lista normal y le metes casillas: [ ] para pendiente y [x] para completado. Es como decirle a tu código: “¡Mira, ya hice esto!” ✔️ o “Ups, falta esto…” ❌. Perfecto para proyectos en GitHub sin perder el estilo geek.

**Sintaxis:**

```markdown
- [ ] List item
- [x] List item
- [ ] List item
```

**Resultado:**

- [ ] Aprender Markdown
- [x] Aprender Astro
- [ ] Terminar el portafolio

---

### Referencias y menciones

En GitHub, cuando trabajas en issues, commits, pull requests o comentarios, tienes un truco bastante práctico: con GFM puedes poner atajos para mencionar gente o enlazar cosas del repo sin esfuerzo. Es como decir “@usuario” y ¡pum!, queda referenciado automáticamente. También puedes usar # para señalar un issue o PR y GitHub lo enlaza solito. En pocas palabras, es como tener un GPS dentro del repo que te lleva directo a la persona o al archivo que necesitas 🚀.

```markdown
  Esto es una mencion de usuario @Edirju
  Esto es un #Número #123 propietario/repositorio#456
  Esto es un autolink https://github.com/usuario/repo/issues/1
```

Mira el resultado:

- Esto es una mencion de usuario: @edirju.
- Esto es un #Número #123 propietario/repositorio#456
- Esto es un autolink <https://github.com/usuario/repo/issues/1>

---

### Pies de página

Las notas a pie de página son como esos amigos que interrumpen la conversación para soltar un dato extra 🤓📚. En vez de cortar el ritmo del texto, se van discretamente al final y te dicen: “oye, por si acaso, aquí va la explicación”. Así tu lectura fluye sin tropiezos y los detalles quedan guardados abajo 👣.

```markdown
Markdown es un lenguaje de marcado ligero.[^2] Fue creado en 2004 por John Gruber.

[^2]: Su objetivo principal es permitir crear texto rico mediante texto plano fácilmente convertible a HTML.
```

**Ojo al lance:**

Markdown es un lenguaje de marcado ligero.[^2] Fue creado en 2004 por John Gruber.

[^2]: Su objetivo principal es permitir crear texto rico mediante texto plano fácilmente convertible a HTML.

---

### Alertas

Las alertas sirven para resaltar lo que es realmente importante ⚠️. En GitHub aparecen con colores llamativos e íconos que te dicen de inmediato: “¡Ojo, esto es crítico!”. Así no se te pasa por alto la información clave y sabes al instante qué merece tu atención.

```markdown
> [!NOTE]   
> Explicación

> [!TIP] 
> Explicación 

> [!IMPORTANT]   
> Explicación 

> [!WARNING]   
> Explicación 

> [!CAUTION] 
> Explicación
```

---

### Abreviaturas `<abbr>`

Este elemento sirve para marcar abreviaturas o acrónimos. Su gracia es que, cuando pasas el cursor por encima, aparece la explicación completa del término. Así, no interrumpe el texto principal y te da el dato justo cuando lo necesitas.

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> es un formato de imagen de mapa de bits.
```

El atributo `title` contiene el texto completo. **Al renderizarse**, el navegador suele mostrar el acrónimo con un subrayado punteado; al posicionar el ratón encima, aparece un *"tooltip"* con el nombre completo (en este caso, el significado de las siglas GIF).

**...pille:**

<abbr title="Graphics Interchange Format">GIF</abbr> es un formato de imagen de mapa de bits.

---

### Subíndice `<sub>`

El subíndice \<sub> es como ponerle un *“bajón”* al texto 👇. Básicamente, hace que las letras se vean más chiquitas y se acomoden debajo de la línea normal. Ideal para **fórmulas químicas** (H₂O 💧) o matemáticas, donde necesitas que algo quede “debajo” del resto del texto.

```markdown
Sintaxis:
H<sub>2</sub>O
```

Es el estándar para representar fórmulas químicas. En el ejemplo, el número 2 baja de nivel respecto a la H y la O, indicando la cantidad de átomos de hidrógeno en la molécula de agua.

🥸 Mira el resultado:

H<sub>2</sub>O

---

### Superíndice `<sup>`

Al contrario que el anterior 🫣, este elemento sitúa el texto por encima de la línea base.

```markdown
X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>
```

Se utiliza principalmente para exponentes matemáticos, notas al pie de página o indicadores ordinales. Aquí, las letras ***n*** se elevan para representar una potencia en una ecuación.

Resultado:

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

---

### Entrada de Teclado `<kbd>`

Este elemento representa una entrada de usuario, normalmente a través del teclado, aunque también puede referirse a comandos de voz.

```markdown
Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.
```

Semánticamente, le indica al navegador y a los lectores de pantalla que ese texto es una tecla física. Visualmente, muchos navegadores le aplican una fuente monoespaciada (como la de una terminal) o un borde que simula la forma de una tecla.

Ejemplo:

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> para terminar la sesión.

---

### Marca | Resaltado `<mark>`

Se utiliza para *resaltar / marcar* un fragmento de texto debido a su relevancia contextual en el momento.

```markdown
Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

Es el equivalente digital a usar un marcador fluorescente. A diferencia de la negrita (que denota importancia), <mark> se usa para captar la atención del lector sobre una palabra específica dentro de una cita o párrafo. Por defecto, los navegadores lo muestran con un fondo amarillo.

Ejemplo:

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

---
