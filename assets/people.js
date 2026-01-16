document.addEventListener('DOMContentLoaded', function() {

function drawConnections() {
  const container = document.querySelector('.graph-container');
  const svg = document.querySelector('.graph-svg');
  const svgRect = svg.getBoundingClientRect();
  
  // Clear existing paths
  const existingPaths = svg.querySelectorAll('path');
  existingPaths.forEach(path => path.remove());

  // Draw curved arrows from influences to main artist
  const centerEl = document.querySelector(`[data-profilephoto="${mainPerson}"]`);
  const centerRect = centerEl.getBoundingClientRect();
  influences.forEach((id, index) => {
    const fromEl = document.querySelector(`[data-person="${id}"]`);

    if (fromEl) {
      const fromRect = fromEl.getBoundingClientRect();
      const toRect = centerRect;

      const x1 = fromRect.right - svgRect.left;
      const y1 = fromRect.top + fromRect.height / 2 - svgRect.top;
      const x2 = toRect.left - svgRect.left;
      const y2min = toRect.top- svgRect.top;
      const y2step = toRect.height / (influences.length + 2);
      const y2 = y2min + (index + 1) * y2step;

      // Create curved path using quadratic bezier
      const midX = (2 * x1 + x2) / 3;
      const controlX = midX;
      
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M ' + x1 + ' ' + y1 + ' C ' + controlX + ' ' + y1 + ', ' + controlX + ' ' + y2 + ', ' + (x2-10) + ' ' + y2 + ' l 8 0');
      path.setAttribute('stroke', '#94a3b8');
      path.setAttribute('stroke-width', '2');
      path.setAttribute('fill', 'none');
      path.setAttribute('marker-end', 'url(#arrowhead)');
      
      svg.appendChild(path);
    }
  });

  // Draw curved arrows from main artist to influenced
  influenced.forEach((id, index) => {
    const toEl = document.querySelector(`[data-person="${id}"]`);
    
    if (toEl) {
      const fromRect = centerRect;
      const toRect = toEl.getBoundingClientRect();

      const x1 = fromRect.right - svgRect.left;
      const y1min = fromRect.top - svgRect.top;
      const y1step = fromRect.height / (influenced.length + 2);
      const y1 = y1min + (index + 1) * y1step;
      const x2 = toRect.left - svgRect.left;
      const y2 = toRect.top + toRect.height / 2 - svgRect.top;

      // Create curved path using quadratic bezier
      const midX = (x2 - x1) * .3 + x1;
      const controlX = midX;
      
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M ' + x1 + ' ' + y1 + ' C ' + controlX + ' ' + y1 + ', ' + controlX + ' ' + y2 + ', ' + (x2-10) + ' ' + y2 + ' l 8 0');
      path.setAttribute('stroke', '#94a3b8');
      path.setAttribute('stroke-width', '2');
      path.setAttribute('fill', 'none');
      path.setAttribute('marker-end', 'url(#arrowhead)');
      
      svg.appendChild(path);
    }
  });
}

// Draw connections on load and resize
window.addEventListener('load', drawConnections);
window.addEventListener('resize', drawConnections);
});

