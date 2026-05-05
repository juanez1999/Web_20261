export type User = {
  email: string;
  name: string;
};

export interface CardInterface {
  index: number;
  user: User;
  deleteUser?: () => void;
  updateUser?: () => void;
}

interface Persona {
  nombre: string;
  edad: number;
}

interface Empleado extends Persona {
  empresa: string;
  salario: number;
}

interface Jefe extends Persona {
  otraCosa: string;
  salario: number;
}
