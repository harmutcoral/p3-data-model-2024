# Guía para ejecutar el modelo de datos

1. Arrancar el contenedor de bases de datos de docker con `docker-compose up`.
2. Ejecutar `bunx prisma db push` para subir el esquema.
3. Ejecutar `bunx prisma db seed` para poblar la base de datos con datos de prueba.
4. Visualizar los datos ejecutando `bunx prisma studio`
5. Para ejecutar los scripts, desde el directorio "scripts", ejecutar `bun run <script>.ts` y volver a lanzar el prisma studio para ver los cambios.

- updatereview.ts: actualiza la reseña de uno de los usuarios registrados en el seed.ts.
- addusers.ts: Introduce 3 usuarios nuevos en la BDD.
- deletedb.ts: Borra toda la información de la base de datos.
