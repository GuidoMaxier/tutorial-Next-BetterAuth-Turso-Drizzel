# Auth Mastery: Next.js + Better Auth + Turso + Drizzle

Project status: **Conceptual & Pedagogical** | Version: 1.0.0
Live Demo: [https://tutorial-next-better-auth-turso-dri.vercel.app/](https://tutorial-next-better-auth-turso-dri.vercel.app/)

Este repositorio no es un template cargado de herramientas, sino un **tutorial vivo**. Como Tech Lead, mi objetivo aquí es mentorar sobre el corazón de un sistema de autenticación moderno, sin el ruido de configuraciones avanzadas que suelen frustrar a quien está aprendiendo.

"La maestría de un senior no está en qué tan complejo puede hacer algo, sino en qué tan simple puede explicarlo."

---

## Propósito del Tutorial

Este proyecto está diseñado para ser **"a hueso"**. Eliminé intencionalmente capas de validación, dockerización y CI/CD para que el desarrollador pueda concentrarse en entender tres piezas clave:

1. **La Persistencia**: Cómo Drizzle habla con Turso (SQLite en el Edge).
2. **La Seguridad**: Cómo Better Auth gestiona sesiones y proveedores sociales.
3. **El Flujo**: Cómo Next.js 16 utiliza el nuevo patrón `proxy.ts` para proteger el acceso. Este patrón sustituye al antiguo `middleware.ts` para permitir una lógica de protección de rutas más modular, desacoplada y fácil de testear.

---

## Stack Técnico (Puro)

- **Framework**: Next.js 16 (App Router)
- **Auth**: Better Auth (Google Providers)
- **DB**: Turso (Distributed SQLite)
- **ORM**: Drizzle

---

## Inicio Rápido

1. `pnpm install`
2. Configurar `.env.local` (ver `.env.local.example`)
3. `pnpm drizzle-kit push` (Sincronizar base de datos)
4. `pnpm dev`

---

## Para los curiosos (Roadmap de Crecimiento)

Si ya entendiste la base y querés profesionalizar este proyecto, este es el camino que deberías seguir (y lo que un Tech Lead te pediría en un entorno real):

- [ ] **Validación de tipos**: Implementar `Zod` para validar variables de entorno y esquemas de API.
- [ ] **Estandarización**: Configurar un `Prettier` robusto para mantener la consistencia en el equipo.
- [ ] **Git Hooks**: Implementar `Husky` y `lint-staged` para asegurar la calidad del código antes de que llegue al repositorio.
- [ ] **Commits Profesionales**: Configurar `Commitlint` para seguir estándares como _Conventional Commits_.
- [ ] **Calidad**: Endurecer las reglas de `ESLint` para evitar bugs silenciosos.
- [ ] **Portabilidad**: Crear un `Dockerfile` para un despliegue consistente.
- [ ] **Automatización**: Configurar `CI/CD` (e.g. GitHub Actions) para correr lints y builds automáticos.
- [ ] **Manejo de Datos**: Explorar `TanStack Query` para gestión de estados asíncronos si la app escala.
- [ ] **Testing**: Añadir tests de integración para el flujo de autenticación.

Este tutorial es el cimiento. El resto lo construís vos.

---

## Tutorial Interactivo

Una vez que corras el proyecto, navegá a `/tutorial` para ver los bloques de código exactos y la explicación detallada de cada paso.

---

## Licencia

MIT - Copialo, rompelo, aprendé y enseñalo.

---

Creado por **Hernán Casasola** - Tech Lead & Mentor.
