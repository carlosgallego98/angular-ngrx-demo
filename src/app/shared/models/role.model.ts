export interface Role {
  id: number;
  nombre: string;
  estado: 'activo' | 'inactivo';
  created_at: Date;
  updated_at: Date;
}
