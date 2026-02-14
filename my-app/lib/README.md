# Lógica de Autenticación

Aquí reside la inteligencia que gestiona quién puede acceder a qué en la aplicación.

## Estructura

- **`auth.ts` (Servidor)**: Configura el núcleo de Better Auth. Define el adaptador de base de datos (Drizzle), los proveedores sociales (Google) y la URL base. Este archivo **nunca** debe ser importado en componentes del lado del cliente (`"use client"`).
- **`auth-client.ts` (Cliente)**: Expone los hooks y métodos que usamos en la interfaz de usuario. Permite que componentes como el `Navbar` reaccionen en tiempo real cuando un usuario inicia o cierra sesión mediante `useSession()`.

## Patrón de Seguridad

La autenticación fluye desde el servidor hacia el cliente, asegurando que las credenciales sensibles nunca queden expuestas en el navegador.
