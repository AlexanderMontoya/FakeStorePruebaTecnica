# FakeStorePruebaTecnica

Hola, mi nombre es Alexander Josué Montoya Bonifacio, técnico en Computación e Informática, especializado en desarrollo web.
A continuación, presento la resolución de la prueba técnica solicitada por 4Byte Solutions para el puesto de desarrollador frontend.

Este proyecto fue generado usando [Angular CLI](https://github.com/angular/angular-cli) version 20.0.3.

## Descargar Proyecto

```bash
git clone https://github.com/AlexanderMontoya/FakeStorePruebaTecnica.git
```

## Instalar Dependencias

```bash
npm install
```

## Environment

Crear el archivo environment.prod.ts dentro de la carpeta environments y utilizar el siguiente formato.
Reemplazar apiUrl por la URL de la API. Para esta prueba se utilizó la API pública: `https://fakestoreapi.com/`.

```bash
export const environment = {
  production: true,
  apiUrl: "EXAMPLE",
};
```

## Servidor de desarrollo

Para iniciar un servidor de desarrollo local, ejecute:

```bash
ng serve
```

## Building

Para compilar el proyecto, ejecute:

```bash
ng build
```

Esto generará los archivos de producción en el directorio `dist/`.

## Decisiones técnicas

### Estructura del proyecto
Separé el proyecto en core, shared y features para una mejor organización y escalabilidad.

### Manejo de autenticación
El usuario al autenticarse, guarda un token en el LocalStorage, debido a su simplicidad y facilidad de implementación..

### Interceptor
Se implementó un interceptor HTTP para adjuntar automáticamente el token de autenticación en cada solicitud, evitando la duplicación de código y centralizando la lógica.

### Seguridad y rutas
Implementé un AuthGuard para proteger las rutas privadas, permitiendo el acceso únicamente a usuarios autenticados.

### Manejo de imágenes
Se implementó un skeleton loader de PrimeNG para mejorar la experiencia de usuario durante la carga de imágenes.
Además, se agregó un fallback en caso de error, mostrando una imagen por defecto cuando la carga falla.

### Deploy
Para este proyecto decidi subir mi proyecto a cloudflare, debido a su facilidad de despliegue y automatización del proceso de build.

## Mejoras futuras
1. Crear un dashboard de inicio para que el usuario pueda visualizar graficos adecuados o una previsualización de lo que es proyecto.
2. Implementar nuevas secciones, como gestión de ventas y usuarios.

## URL del proyecto desplegado
El proyecto desplegado se puede visualizar en el siguiente enlace: [Fake Store Prueba Tecnica](https://fakestorepruebatecnica.pages.dev/)

Credenciales de prueba:

Usuario:
```bash
johnd
```
Contraseña:
```bash
m38rmF$
```
