import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  /**
   * Obtiene un valor del localStorage.
   * Si el valor es una cadena JSON, lo intenta parsear.
   */
  getItem<T>(key: string): T | null {
      const data = localStorage.getItem(key);
      if (!data) return null;

      try {
          return JSON.parse(data) as T;
      } catch (e) {
          return data as unknown as T;
      }
  }

  /**
   * Guarda un valor en el localStorage.
   * Si el valor es un objeto o array, lo convierte a JSON.
   */
  setItem(key: string, value: any): void {
      if (typeof value === 'object') {
          localStorage.setItem(key, JSON.stringify(value));
      } else {
          localStorage.setItem(key, String(value));
      }
  }

  /**
   * Elimina un item específico del localStorage.
   */
  removeItem(key: string): void {
      localStorage.removeItem(key);
  }

  /**
   * Limpia todo el localStorage.
   */
  clear(): void {
      localStorage.clear();
  }

  /**
   * Verifica si existe una llave en el localStorage.
   */
  exists(key: string): boolean {
      return localStorage.getItem(key) !== null;
  }
}
