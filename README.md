

1. Estructura Final del Proyecto
Asegúrate de que tu carpeta src/ tenga este orden. Esto demuestra a cualquier reclutador que sabes organizar código escalable:

Plaintext

src/
├── components/
│   ├── LifeGrid.jsx   # Molécula: Maneja el renderizado del mapa
│   └── Week.jsx       # Átomo: Lógica visual de cada celda
├── App.jsx            # Contenedor: Lógica global, estado y cálculos
├── App.css            # Estilos: Grid, animaciones y diseño responsivo
└── main.jsx           # Punto de entrada de React



Markdown

# ⏳ LifeWeeks - Visualizador de Vida en Semanas

**LifeWeeks** es una herramienta de introspección visual que representa una vida de 80 años dividida en semanas. El objetivo es proporcionar una perspectiva tangible sobre el paso del tiempo y fomentar el aprovechamiento del presente.

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

## 🛠️ Tecnologías utilizadas
- **React (Vite)**
- **CSS3 (Grid, Animations, Variables)**
- **JavaScript (ES6+, Date API)**

## 📦 Instalación
1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Iniciar con `npm run dev`.
