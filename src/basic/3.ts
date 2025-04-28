// export let mixType = (
//   param1: string | number,
//   param2: string | number
// ): string => {
//   return `${param1} ${param2}`;
// };

// =================== варіант 2 роблю через массив обьєктів ================================

type Mix = {
    stringA: string | number;
    numberB: string | number;
  };
  
  export let mixType = (arr: Mix[]): void => {
    arr.map((arr) => console.log(arr.stringA, arr.numberB));
  };
  
  // =================== /роблю через массив обьєктів ================================
  
  // =================== перший варіант 1 ================================
  
  // export let mixType = (
  //   param1: string | number,
  //   param2: string | number
  // ): void => {
  //   console.log(param1, param2);
  // };
  
  // =================== перший варіант 1 ================================
  
  export let status = (
    param1: "enable" | "disable",
    param2: "enable" | "disable"
  ): void => {
    console.log(param1, param2);
  };
  