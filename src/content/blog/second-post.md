---
title: 'Git: La Guía de Supervivencia'
description: 'Git es la máquina del tiempo para tu código. Te permite guardar estados de tu proyecto, experimentar sin miedo a romper nada y colaborar con otros.'
pubDate: 'Mar 15 2026'
heroImage: '../../assets/blog-placeholder-4.jpg'
---

Git es el estándar de la industria para el control de versiones. Si Obsidian es tu "segundo cerebro" para notas, Git es la **máquina del tiempo** para tu código. Te permite guardar estados de tu proyecto, experimentar sin miedo a romper nada y colaborar con otros.

Aquí tienes la guía esencial para dominar el flujo de trabajo básico desde la terminal.

---

## 📘 Guía práctica de Git: de cero a producción

### 1. Instalación y configuración inicial

Antes de empezar a guardar cambios, Git necesita saber quién eres. Esto es lo que aparecerá en el historial de tus proyectos.

- **Verificar version:** `git --version`
- **Configurar nombre y correo:**

```bash
git config --global user.name "Nombre Completo"
git config --global user.email "correo@ejemplo.com"
```

- **Definir editor por defecto:** `git config --global core.editor "code --wait"`

---

### 2. Primeros pasos con un repositorio

**Objetivo:** Crear y clonar repositorios, entender el estado del proyecto.

- **Crear un repositorio nuevo:** `git init`
- **Clonar repositorio existente:**

```bash
git clone https://github.com/usuario/proyecto.git
```

- **Ver estado del repositorio:** `git status`

---

### 3. Ciclo básico de trabajo

Comprender el flujo de cambios: agregar, confirmar y revisar historial.

- **Agregar archivos:** `git add archivo.txt` o `git add .` (para añadir todo)
- **Confirmar cambios:** `git commit -m "Mensaje descriptivo"`
- **Ver historial:** `git log --oneline --graph --decorate`.

---

### 4. Trabajo con ramas

Manejar ramas para separar funcionalidades.

- **Crear y cambiar a nueva rama:** `git checkout -b feature/nueva-funcionalidad`
- **Cambiar de rama:** `git checkout main`
- **Fusionar ramas:** `git merge feature/nueva-funcionalidad`

---

### 5. Colaboración remota

Sincronizar repositorios locales con remotos.

- **Ver repositorios remotos:** `git remote -v`
- **Subir cambios:** `git push origin main`
- **Traer cambios:** `git pull origin main`
- **Descargar sin fusionar:** `git fetch origin`

---

### 6. Comandos útiles en producción

Resolver problemas comunes y gestionar versiones.

- **Ver diferencias:** `git diff`
- **Revertir archivo:** `git checkout -- archivo.txt`
- **Deshacer commit:** `git pull origin main`
- **Descargar sin fusionar:** `git reset --soft HEAD~1` o `git reset --hard HEAD~1`
- **Etiquetar versión:**

```bash
git tag -a v1.0.0 -m "Descripción de la versión"
git push origin v1.0.0
```

---

### 7. Flujo de trabajo recomendado (Git Flow simplificado)

Adoptar un flujo organizado para equipos.

- **main:** rama estable, siempre desplegable
- **develop:** rama de integración
- **feature/:** nuevas funcionalidades
- **release/:** preparar versiones
- **hotfix/:** correcciones críticas

```bash
git checkout -b feature/login
git push origin feature/login
```

Luego se crea un **Pull Request** para revisión y fusión.

---

### 8. Buenas prácticas

Adoptar hábitos que mejoren la calidad del código.

- Commits pequeños y descriptivos
- Usar ramas para cada funcionalidad
- Revisar código con Pull Requests
- Etiquetar versiones para despliegues
- Mantener `main` siempre estable

---

### Conclusión

Dominar Git no se trata de memorizar 100 comandos, sino de entender el flujo:

**Cambiar** → **Preparar** → **Confirmar**.

Con estos pasos, ya tienes el control total de la evolución de tus proyectos.
