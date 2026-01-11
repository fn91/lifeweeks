import React from 'react';

const Week = React.memo(({ isLived, isCurrent, index }) => {
  const year = Math.floor(index / 52);
  const weekOfYear = (index % 52) + 1;
  
  const style = isLived 
    ? { '--delay': `${Math.min(index * 0.002, 2)}s` } 
    : {};

  // Construimos el texto del tooltip
  const tooltipText = `Año ${year}, Semana ${weekOfYear}${isCurrent ? ' (¡Esta semana!)' : ''}`;

  return (
    <div 
      className={`week ${isLived ? 'lived' : ''} ${isCurrent ? 'current' : ''}`} 
      style={style}
      title={tooltipText} // <-- El Tooltip
    />
  );
});

export default Week;