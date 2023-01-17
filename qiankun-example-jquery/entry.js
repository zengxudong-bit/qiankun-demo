const render = ($) => {
  $('#jquery-container').html('Hello, render with jQuery');
  return Promise.resolve();
};

((global) => {
  global['jquery'] = {
    bootstrap: () => {
      console.log('jquery bootstrap');
      return Promise.resolve();
    },
    mount: () => {
      console.log('jquery mount');
      return render($);
    },
    unmount: () => {
      console.log('jquery unmount');
      return Promise.resolve();
    },
  };
})(window);