# ⏳ LifeWeeks - Visualizador de Vida en Semanas

**LifeWeeks** es una herramienta de introspección visual que representa una vida de 80 años dividida en semanas. El objetivo es proporcionar una perspectiva tangible sobre el paso del tiempo y fomentar el aprovechamiento del presente.

---

## 📁 Estructura del Proyecto

Organización profesional de la carpeta `src/`. Esta estructura modular permite mantener la lógica separada de la representación visual, facilitando la escalabilidad del proyecto:

```text
src/
├── components/
│   ├── LifeGrid.jsx   # Molécula: Maneja el renderizado del mapa completo
│   └── Week.jsx       # Átomo: Lógica visual y estado de cada celda individual
├── App.jsx            # Contenedor: Lógica global, gestión de estado y cálculos
├── App.css            # Estilos: Grid, animaciones y diseño responsivo optimizado
└── main.jsx           # Punto de entrada de la aplicación React (Vite)
```

---

## 🚀 Desafíos Técnicos y Soluciones

### 1. Renderizado Masivo y Rendimiento
Representar **4,160 elementos** simultáneamente puede ser costoso para el navegador.
* **Solución:** Implementé `React.memo` en el componente `Week` para evitar re-renderizados innecesarios y utilicé `useMemo` para los cálculos de fechas, asegurando que solo se ejecuten cuando el usuario cambia su fecha de nacimiento.

### 2. Layout Responsivo Complejo
Visualizar 52 columnas en pantallas móviles es un reto de UX.
* **Solución:** Utilicé **CSS Grid** con media queries dinámicas para adaptar el grid de 52 columnas (escritorio) a 26 o 13 columnas en dispositivos móviles, manteniendo la legibilidad de cada "semana".

### 3. Persistencia de Datos
* **Solución:** Implementé **LocalStorage** con un "Lazy Initializer" en el estado de React para que la aplicación recuerde la fecha del usuario incluso después de cerrar el navegador.

### 4. UX Emocional
* **Solución:** Añadí una **animación escalonada (staggered)** mediante variables CSS dinámicas, creando un efecto de "llenado de vida" progresivo, y una animación de pulso para resaltar la semana actual.

---

## 🛠️ Tecnologías Utilizadas
- **React (Vite)** - Framework principal y entorno de desarrollo.
- **CSS3 (Grid, Animations, Variables)** - Para un diseño fluido y moderno.
- **JavaScript (ES6+, Date API)** - Lógica de negocio y manejo de tiempo.

---

## 📦 Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/lifeweeks.git
   ```
2. **Instalar dependencias:**
   ```bash
   npm install
   ```
3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
