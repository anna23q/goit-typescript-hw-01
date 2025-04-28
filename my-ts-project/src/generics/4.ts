type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  };
  
  export function createOrUpdateUser(initialValues: Partial<User>) {
    return { ...initialValues };
  }
  