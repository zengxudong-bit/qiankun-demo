const render = ($,props) => {
  // console.log(props);
  storeTest(props);

  $('#jquery-container').html(props.say);
  return Promise.resolve();
};

function storeTest(props) {
  props.onGlobalStateChange((value, prev) => console.log(`[jquery的数据监听行为 - ${props.name}]:`, value, prev), true);
  // props.setGlobalState({
  //   globalToken: 'jquery给全局Token赋值了'
  // });
}

((global) => {
  global['jquery'] = {
    bootstrap: () => {
      // console.log('jquery bootstrap');
      return Promise.resolve();
    },
    mount: (props) => {
      // console.log('jquery mount');
      return render($,props);
    },
    unmount: () => {
      // console.log('jquery unmount');
      return Promise.resolve();
    },
  };
})(window);