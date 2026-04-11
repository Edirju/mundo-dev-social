---
title: 'Git: Guía rápida de uso'
description: 'Git es la máquina del tiempo para tu código. Te permite guardar estados de tu proyecto, experimentar sin miedo a romper nada y colaborar con otros.'
pubDate: 'Mar 15 2026'
heroImage: '../../assets/blog-placeholder-4.jpg'
---

Git es el estándar de la industria para el control de versiones. Si Obsidian es tu "segundo cerebro" para notas, Git es la **máquina del tiempo** para tu código. Te permite guardar estados de tu proyecto, experimentar sin miedo a romper nada y colaborar con otros.

Aquí tienes la guía esencial para dominar el flujo de trabajo básico desde la terminal.

---

## 🛠️ Git: La Guía de Supervivencia para Desarrolladores

### 1. Configuración Inicial (Solo una vez)

Antes de empezar a guardar cambios, Git necesita saber quién eres. Esto es lo que aparecerá en el historial de tus proyectos.

```bash
git config --global user.name "Nombre Completo"
git config --global user.email "correo@ejemplo.com"
```

---

### 2. El Ciclo de Vida del Código

El flujo de trabajo en Git se divide en tres áreas: el directorio de trabajo (tus archivos), el área de preparación (*Staging*) y el repositorio (*el historial guardado*).

1. **Inicializar o Clonar.** Empezando el proyecto:
  - Si empiezas desde cero en una carpeta: `git init`.
  - Si vas a trabajar en un proyecto existente: `git clone <https://github.com/usuario/repo.git>`.
2. **Preparar cambios (Add).** El área de Staging: Cuando modificas archivos, Git los ve como "no preparados". Para incluirlos en tu próximo guardado, usa: `git add archivo.js` o `git add .` (para añadir todo).
3. **Confirmar cambios (Commit).** Creando un punto de restauración: 
Aquí es donde grabas la "foto" de tu código en el historial. Sé descriptivo:
`git commit -m "feat: agregar componente de navegación"`
4. **Sincronizar (Push).** Subir a la nube
Para enviar tus fotos guardadas a un servidor como GitHub o GitLab:
`git push origin main`

---

### 3. Ramas: Experimentación Segura

Las **ramas (branches)** te permiten trabajar en una funcionalidad nueva sin tocar el código que ya funciona (la rama `main`).

- **Crear una rama:** `git checkout -b feature-nueva-idea`
- **Volver a la principal:** `git checkout main`
- **Fusionar cambios:** Si tu idea funcionó, vuelve a main y usa `git merge feature-nueva-idea`.

**Tip de Oro:** Haz commits pequeños y frecuentes. Es mucho más fácil volver atrás 5 minutos que intentar arreglar un desastre de hace 3 días.

---

### 4. Tabla de Comandos Imprescindibles

| Comando | Acción |
| :--- | :--- |
| `git status` | Mira qué archivos han cambiado y qué falta por preparar |
| `git log --oneline` | Ver el historial de guardados de forma resumida. |
| `git pull` | Traer y fusionar los cambios más recientes del servidor. |
| `git diff` | Ver exactamente qué líneas de código cambiaste. |
| `git checkout -- .` | **¡Pánico!** Descartar todos los cambios locales y volver al último commit. |

---

### Conclusión

Dominar Git no se trata de memorizar 100 comandos, sino de entender el flujo:

**Cambiar** → **Preparar** → **Confirmar**.

Con estos pasos, ya tienes el control total de la evolución de tus proyectos.
