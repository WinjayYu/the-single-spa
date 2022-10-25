export const lifecycles = [{
  scriptsWillBeLoaded: () => {
    return new Promise((resolve) => {
      console.log('scriptsWillBeLoaded');
      window.container = document.getElementById('container');
      window.container.innerHTML = 'Bootstrap app2'
      resolve()
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
}]

export const publicRoot = 'example/app2/dist'

export const pathToIndex = 'index.html'