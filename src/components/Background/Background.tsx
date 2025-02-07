import { useMemo } from 'react';
import pawImage from '@/assets/paw.png';

interface PawProps {
  count?: number;
  minSize?: number;
  maxSize?: number;
}

function generateRandomPaws(count: number, minSize: number, maxSize: number) {
  // Create a grid to track occupied spaces
  const gridSize = Math.ceil(Math.sqrt(count)) + 1;
  const cellSize = 100 / gridSize; // percentage
  const grid: boolean[][] = Array(gridSize).fill(null).map(() => Array(gridSize).fill(false));
  const paws: Array<{
    left: string;
    top: string;
    size: number;
    rotation: number;
    opacity: number;
  }> = [];

  let attempts = 0;
  const maxAttempts = count * 3;

  while (paws.length < count && attempts < maxAttempts) {
    // Pick a random grid cell
    const gridX = Math.floor(Math.random() * gridSize);
    const gridY = Math.floor(Math.random() * gridSize);

    // Check if this cell and adjacent cells are empty
    if (!grid[gridY]?.[gridX] && 
        !grid[gridY-1]?.[gridX] && 
        !grid[gridY+1]?.[gridX] && 
        !grid[gridY]?.[gridX-1] && 
        !grid[gridY]?.[gridX+1]) {
      
      // Mark this cell as occupied
      grid[gridY][gridX] = true;

      // Calculate position within the cell (add some randomness within the cell)
      const baseX = gridX * cellSize;
      const baseY = gridY * cellSize;
      const offsetX = (Math.random() * 0.5 + 0.25) * cellSize; // 25%-75% of cell size
      const offsetY = (Math.random() * 0.5 + 0.25) * cellSize;

      paws.push({
        left: `${baseX + offsetX}%`,
        top: `${baseY + offsetY}%`,
        size: Math.floor(minSize + Math.random() * (maxSize - minSize)),
        rotation: Math.random() * 360,
        opacity: 0.3 + Math.random() * 0.4,
      });
    }

    attempts++;
  }

  return paws;
}

export default function Background({ count = 50, minSize = 20, maxSize = 60 }: PawProps) {
  const paws = useMemo(() => generateRandomPaws(count, minSize, maxSize), [count, minSize, maxSize]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {paws.map((paw, index) => (
        <img
          key={index}
          src={pawImage}
          alt=""
          className="absolute"
          style={{
            left: paw.left,
            top: paw.top,
            width: `${paw.size}px`,
            height: `${paw.size}px`,
            transform: `rotate(${paw.rotation}deg)`,
            opacity: paw.opacity,
          }}
        />
      ))}
    </div>
  );
} 