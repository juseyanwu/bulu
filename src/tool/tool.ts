export function Throttle(fn: Function) {
    let lock = false;
    return function (this: any, ...args: any[]) {
      if (lock) return;
      lock = true;
      window.requestAnimationFrame(() => {
        fn.apply(this, args);
        lock = false;
      });
    };
  }



  export function rafThrottle(fn: Function) {
    let lastExecutedTime = 0;
    return function(this: any, ...args: any[]) {
        const currentTime = Date.now();
        if (currentTime - lastExecutedTime < 10) return;
        lastExecutedTime = currentTime;
        fn.apply(this, args);
    };
}

  
  export function debounce(fn: Function, delay = 200) {
    let timer: any = null;
    return function (this: any, ...args: any[]) {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }
  