(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.theSingleSpa = {}));
}(this, (function (exports) { 'use strict';

  const lifecycles = [{
    scriptsWillBeLoaded: () => {
      return new Promise((resolve) => {
        console.log('scriptsWillBeLoaded');
        window.container = document.getElementById('container');
        window.container.innerHTML = 'Bootstrap app2';
        resolve();
      })
    },
    scriptsWereLoaded: () => {
      console.log('scriptsWereLoaded');
      return Promise.resolve()
    },
    applicationWillMount: () => {
      console.log('applicationWillMount');
      window.container.innerHTML = 'Hi, this content made for app2!';
      return Promise.resolve()
    },
    applicationWasMounted: () => {
      console.log('applicationWasMounted');
      return Promise.resolve()
    },
    applicationWillUnmount: () => {
      console.log('applicationWillUnmount');
      return Promise.resolve()
    },
    applicationWasUnmounted: () => {
      console.log('applicationWasUnmounted');
      window.container.innerHTML = '';
      return Promise.resolve()
    },
    activeApplicationSourceWillUpdate: () => {
      console.log('activeApplicationSourceWillUpdate');
      return Promise.resolve()
    },
    activeApplicationSourceWillUpdate: () => {
      console.log('activeApplicationSourceWillUpdate');
      return Promise.resolve()
    }
  }];

  const publicRoot = 'example/app2/dist';

  const pathToIndex = 'index.html';

  exports.lifecycles = lifecycles;
  exports.pathToIndex = pathToIndex;
  exports.publicRoot = publicRoot;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=singlespa-config.js.map
