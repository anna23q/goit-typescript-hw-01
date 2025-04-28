export const showMessage = (message: string): void => {
    console.log(message);
  };
  
  export const calc = (num1: number, num2: number): number => {
    return num1 + num2;
  };
  
  export const customError = (): never => {
    throw new Error("Error");
  };
  