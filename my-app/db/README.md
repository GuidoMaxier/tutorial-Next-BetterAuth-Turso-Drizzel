# Persistencia y Esquemas

Este directorio gestiona el estado y la estructura de los datos de la aplicación.

## Componentes

- **`schema.ts`**: Es la "Única fuente de verdad". Aquí definimos las tablas de usuarios, sesiones y cuentas necesarias para Better Auth. Usar TypeScript aquí nos garantiza que el resto de la app sepa exactamente qué datos existen.
- **`index.ts`**: Configura la conexión con **Turso**. Utilizamos el cliente de `libsql` para conectarnos a la base de datos distribuida mediante la URL y el Token de acceso.

## Flujo de Trabajo

Si modificas el `schema.ts`, recuerda que debes sincronizar la base de datos:

```bash
pnpm drizzle-kit push
```

Este comando compara tu código con la base de datos en Turso y aplica los cambios necesarios sin necesidad de migraciones manuales complejas (ideal para prototipado rápido y entornos de desarrollo).
