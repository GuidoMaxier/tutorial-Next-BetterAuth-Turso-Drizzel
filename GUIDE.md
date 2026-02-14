# Guía Paso a Paso: Tu Primer Sistema de Auth Profesional

Bienvenido a esta guía. Mi rol como **Tech Lead** aquí es acompañarte a montar un sistema de autenticación real, paso a paso, sin vueltas. Vamos a lo importante: que el código ande y que entiendas qué está pasando detrás.

---

## Requisitos Previos

- Tener instalado [Node.js](https://nodejs.org/) (v20+)
- Tener instalado [pnpm](https://pnpm.io/installation) (`npm install -g pnpm`)
- Una cuenta en [Turso](https://turso.tech/)
- Una cuenta en [Google Cloud Console](https://console.cloud.google.com/)

---

## Paso 1: Inicializar el Proyecto

Crea tu proyecto Next.js con Tailwind CSS y TypeScript.

```bash
npx create-next-app@latest my-app
cd my-app
```

---

## Paso 2: Base de Datos con Turso

Turso es SQLite en el "edge". Es ultra rápido y tiene un nivel gratuito generoso.

1. **Instalar Turso CLI:** `curl -sSfL https://get.turso.tech/install.sh | bash`
2. **Login:** `turso auth login`
3. **Crear DB:** `turso db create tutorial-db`
4. **Obtener URL:** `turso db show tutorial-db --url`
5. **Obtener Token:** `turso db tokens create tutorial-db`

---

## 🔑 Paso 3: Configurar Variables de Entorno

Crea un archivo `.env.local` basado en `.env.local.example`.

### Generar Secretos

Para `BETTER_AUTH_SECRET`, ejecuta este comando en tu terminal para generar una clave segura:

```bash
openssl rand -base64 32
```

---

## Paso 4: Instalar Dependencias

Usaremos `pnpm` por su velocidad y eficiencia.

```bash
# Autenticación
pnpm add better-auth

# Base de Datos y ORM
pnpm add drizzle-orm @libsql/client
pnpm add -D drizzle-kit dotenv
```

---

## Paso 5: Configurar Drizzle ORM

Drizzle es el puente entre tu código y Turso.

1. **Crear `db/schema.ts`**: Define las tablas de usuario, sesión y cuentas (puedes copiar el esquema de esta guía).
2. **Crear `db/index.ts`**: Configura la conexión usando la URL y el Token de Turso.
3. **Crear `drizzle.config.ts`**: En la raíz del proyecto para manejar las migraciones.

### Sincronizar con la DB:

Cada vez que cambies el esquema, ejecuta:

```bash
pnpm drizzle-kit push
```

---

## Paso 6: Configurar Better Auth

1. **Servidor (`lib/auth.ts`)**: Configura el adaptador de Drizzle y el proveedor de Google.
2. **API Route (`app/api/auth/[...better-auth]/route.ts`)**: El endpoint que maneja todo el flujo.
3. **Cliente (`lib/auth-client.ts`)**: Para usar hooks como `useSession()` en tus componentes.

---

## Paso 7: Google Cloud Console

Para que el botón de Google funcione:

1. Crea un proyecto en [Google Cloud Console](https://console.cloud.google.com/).
2. Configura la "OAuth Consent Screen".
3. Crea "OAuth 2.0 Client IDs".
4. **URIs de redireccionamiento autorizados:**
   `http://localhost:3000/api/auth/callback/google`

---

## Paso 8: Correr el Proyecto

```bash
pnpm dev
```

Entra a `http://localhost:3000` y ¡listo!

---

## 🔍 Comandos Útiles

- **Ver Base de Datos:** `pnpm drizzle-kit studio --port 4984`
- **Sincronizar tablas:** `pnpm drizzle-kit push`
- **Limpiar dependencias:** `rm -rf node_modules pnpm-lock.yaml && pnpm install`

---

## 🆘 Auxilio: Solución de Problemas Comunes

Si algo no funciona, no te desesperes. Aquí están los errores más comunes:

| Error                      | Causa Probable                              | Solución                                                                                |
| :------------------------- | :------------------------------------------ | :-------------------------------------------------------------------------------------- |
| **"Invalid Callback URL"** | La URL en Google Cloud Console no coincide. | Revisa que sea exactamente `http://localhost:3000/api/auth/callback/google`.            |
| **"Session not found"**    | El `BETTER_AUTH_URL` es incorrecto.         | Asegúrate de incluir el protocolo: `http://localhost:3000`.                             |
| **Error de Turso (401)**   | Token de Turso expirado o incorrecto.       | Genera un nuevo token con `turso db tokens create` y actualiza tu `.env.local`.         |
| **Proxy no redirige**      | El archivo no se llama `proxy.ts`.          | En Next.js 16, el archivo debe estar en la raíz de `my-app` y llamarse exactamente así. |
