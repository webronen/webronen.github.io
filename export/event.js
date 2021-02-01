const event = ( listener, target, type, usecapture ) => {
  if( typeof listener !== 'function' ) return console.error( 'Invalid first argument type in event. Valid type is function.' );
  if( typeof target !== 'object' ) return console.error( 'Invalid second argument type in event. Valid type is object.' );
  if( typeof type !== 'string' ) return console.error( 'Invalid third argument type in event. Valid type is string.' );
  if( typeof usecapture !== 'boolean' ) return console.error( 'Invalid fourth argument type in event. Valid type is boolean.' );
  if( !window.addEventListener ) return console.error( 'Your browser does not support event listeners.' );
  target.addEventListener( type, listener, usecapture );
};

export default event;
