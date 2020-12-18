import event from './event.js';

let setupIsDefined, loopIsDefined, begin;
const setup = ( setup ) => {
  
  if( setupIsDefined ) return console.error( 'Setup is already defined.' );
  if( typeof setup !== 'function' ) return console.error( 'Invalid argument type in setup. Valid type is function.' );
  
  event( () => {
    setup();
    if( loopIsDefined ) begin();
  }, window, 'load', false );
  
  setupIsDefined = true;
  
};

const loop = ( loop, rate ) => {
  
  if( loopIsDefined ) return console.error( 'Loop is already defined.' );
  if( typeof loop !== 'function' ) return console.error( 'Invalid first argument type in loop. Valid type is function.' );
  if( typeof rate !== 'number' ) return console.error( 'Invalid second argument type in loop. Valid type is number.' );
  
  rate = rate < 1 ? 1: rate > 30 ? 30: rate;
  const Tms = ~~( ( 1000 / rate ) + .5 );
  
  let pastScreenTime = 0, screenFrameCount = 0, drawNewFrame = true,
  renderFrameCount = 0, pastRenderTime = 0, renderFrameRate = 0;
  
  const render = () => {
    if( drawNewFrame ) {
      
      drawNewFrame = false;
      pastRenderTime = window.performance.now();
      
      loop( {
        screenFrameCount: screenFrameCount,
        screenFrameRate: ~~( ( 1000 / ( window.performance.now() - pastScreenTime ) ) + .5 ),
        renderFrameCount: renderFrameCount,
        renderFrameRate: renderFrameRate
      } );
      
      renderFrameCount = window.setTimeout( () => {
        renderFrameRate = ~~( ( 1000 / ( window.performance.now() - pastRenderTime ) ) + .5 );
        drawNewFrame = true;
      }, Tms );
      
    }
    
    pastScreenTime = window.performance.now();
    screenFrameCount = window.requestAnimationFrame( render );
    
  };
  
  begin = render;
  loopIsDefined = true;
  
};

export { setup, loop };
export default setup;