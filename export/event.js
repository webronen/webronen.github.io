const event = ( listener, target, type, usecapture ) => {
  target.addEventListener( type, listener, usecapture );
};

export default event;