# AuthApp Implementation Details

Este es el código fuente del proyecto Next.js 16 que implementa el sistema de autenticación propuesto en el tutorial general. Aquí es donde la teoría se convierte en práctica.

## Estructura del Proyecto (Tech Lead View)

Para mantener el código limpio y mantenible, hemos organizado el proyecto siguiendo estos patrones:

```text
my-app/
├── app/
│   ├── api/auth/         # Endpoints dinámicos de Better Auth
│   ├── profile/          # Ruta protegida de ejemplo
│   ├── tutorial/         # Guía interactiva dentro de la app
│   └── layout.tsx        # Inyección del SessionProvider y Navbar
├── components/           # Componentes UI reutilizables (Navbar, Buttons, etc.)
├── db/                   # Configuración de Turso y Esquemas de Drizzle
├── lib/                  # Clientes de Auth (servidor y cliente)
├── migrations/           # Historial de cambios en la base de datos
└── proxy.ts              # Lógica de protección de rutas (Patrón Next.js 16)
```

## Piezas Clave

1.  **`db/schema.ts`**: Aquí definimos la "forma" de nuestros datos. Es la única fuente de verdad para la base de datos.
2.  **`lib/auth.ts`**: La configuración central. Aquí es donde Better Auth se conecta con Drizzle y Google.
3.  **`proxy.ts`**: Nuestra aduana. Decide quién entra a `/profile` y quién es redirigido a `/unauthorized`.
4.  **`lib/auth-client.ts`**: El puente para los componentes de React (como el `Navbar`) para saber si hay un usuario logueado.

## Desarrollo Local

Si estás dentro de esta carpeta (`my-app`), asegúrate de tener configurado tu `.env.local` y ejecuta:

```bash
pnpm install
pnpm dev
```

Recuerda que para cualquier cambio en el esquema de base de datos, debes sincronizar con:

```bash
pnpm drizzle-kit push
```

---

_Este directorio es el Laboratorio. Aquí es donde debes experimentar, romper cosas y entender cómo fluye la data entre el cliente, el servidor y la base de datos distribuida._
