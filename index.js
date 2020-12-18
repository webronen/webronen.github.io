import { setup, loop } from './export/begin.js';

setup( () => {
  
  document.body.style.visibility = 'visible';
  
} );

const screenFrameRate = 10;
loop( ( display ) => {

  document.getElementById('performance').innerText = `
    SCREEN_FRAME_COUNT ${ display.screenFrameCount }
    SCREEN_FRAME_RATE ${ display.screenFrameRate }
    RENDER_FRAME_COUNT ${ display.renderFrameCount }
    RENDER_FRAME_RATE ${ display.renderFrameRate }\n
  `;
  
}, screenFrameRate );