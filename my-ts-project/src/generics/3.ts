export function merge<T extends object, K extends object>(
    objA: T,
    objB: K
  ): T & K {
    return Object.assign({}, objA, objB);
  }
  