
import Week from "./Week";

const LifeGrid = ({ totalWeeks, weeksLived }) => {
  return (
    <div className="grid-container">
     
{Array.from({ length: totalWeeks }).map((_, index) => (
  <Week 
    key={index} 
    index={index} 
    isLived={index < weeksLived} 
    isCurrent={index === weeksLived} // <--- Nueva condición
  />
))}
    </div>
  );
};


export default LifeGrid;