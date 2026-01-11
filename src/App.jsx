import React, { useState, useMemo, useEffect } from 'react';
import LifeGrid from './components/LifeGrid';
import './App.css';

function App() {
  // --- CONFIGURACIÓN ---
  const YEARS_OF_LIFE = 80;
  const TOTAL_WEEKS = YEARS_OF_LIFE * 52;

  // --- ESTADO ---
  // Inicialización perezosa: Solo lee localStorage la primera vez
  const [birthDate, setBirthDate] = useState(() => {
    const savedDate = localStorage.getItem('life-weeks-date');
    return savedDate || "";
  });

  // --- EFECTOS ---
  // Sincroniza el estado con el almacenamiento del navegador
  useEffect(() => {
    if (birthDate) {
      localStorage.setItem('life-weeks-date', birthDate);
    }
  }, [birthDate]);

  // --- LÓGICA DE NEGOCIO (CÁLCULOS) ---
  const stats = useMemo(() => {
    if (!birthDate) return { lived: 0, remaining: TOTAL_WEEKS, percentage: 0 };
    
    const birth = new Date(birthDate);
    const today = new Date(); // Hoy es 2026
    const diffInMs = today - birth;
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    
    const lived = Math.max(0, Math.floor(diffInMs / msInWeek));
    const remaining = Math.max(0, TOTAL_WEEKS - lived);
    const percentage = ((lived / TOTAL_WEEKS) * 100).toFixed(1);

    return { lived, remaining, percentage };
  }, [birthDate, TOTAL_WEEKS]);

  // --- MANEJADORES DE EVENTOS ---
  const handleReset = () => {
    setBirthDate("");
    localStorage.removeItem('life-weeks-date');
  };

  // --- RENDERIZADO ---
  return (
    <div className="app-container">
      <header>
        <h1>LifeWeeks</h1>
        <p>Tu vida en semanas. Cada cuadro representa una semana de una vida de {YEARS_OF_LIFE} años.</p>
        
        <div className="input-group">
          <label htmlFor="birth-date">¿Cuándo naciste?</label>
          <input 
            id="birth-date"
            type="date" 
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)} 
          />
          
          {/* Renderizado condicional del botón de reset */}
          {birthDate && (
            <button className="btn-reset" onClick={handleReset}>
              Reiniciar datos
            </button>
          )}

          {/* Sección de estadísticas visuales */}
          <section className="stats-container">
            <div className="stat-card">
              <span>Semanas vividas</span>
              <strong>{stats.lived}</strong>
            </div>
            <div className="stat-card">
              <span>Semanas restantes</span>
              <strong>{stats.remaining}</strong>
            </div>
            <div className="stat-card">
              <span>Porcentaje de vida</span>
              <strong>{stats.percentage}%</strong>
            </div>
          </section>
        </div>
      </header>

      <main>
        {/* Pasamos los datos calculados al componente de la rejilla */}
        <LifeGrid totalWeeks={TOTAL_WEEKS} weeksLived={stats.lived} />
      </main>
    </div>
  );
}

export default App;