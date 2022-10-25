export const lifecycles = [{
  scriptsWillBeLoaded: () => {
    return new Promise((resolve) => {
      console.log('scriptsWillBeLoaded');
      window.container = document.getElementById('container');
      window.container.innerHTML = 'Bootstrap app1'
      resolve()
    })
  },
  scriptsWereLoaded: () => {
    console.log('scriptsWereLoaded');
    return Promise.resolve()
  },
  applicationWillMount: () => {
    console.log('applicationWillMount');
    return Promise.resolve()
  },
  applicationWasMounted: () => {
    console.log('applicationWasMounted');
    window.container.innerHTML = 'Hello, this content made for app1!';
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

export const publicRoot = 'example/app1/dist'

export const pathToIndex = 'index.html'