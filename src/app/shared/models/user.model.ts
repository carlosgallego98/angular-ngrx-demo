import { Role } from "./role.model";

export interface User {
  id?: number;
  pk?: string;
  nombres: string;
  apellidos: string;
  documento: string;
  email: string;
  estado: 'activo' | 'inactivo';
  roles: Role[];
}
