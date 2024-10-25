
# ServidorV2 - Grupo 291 - 295 - 300

Servidor básico desarrollado con Node.js y Express para el manejo de datos de personas. Este proyecto forma parte de una actividad académica de los Grupos 291, 295 y 300, que tiene como objetivo familiarizarse con la creación de endpoints REST y el manejo de rutas en un servidor Express.

## Descripción

El servidor responde a varias rutas y permite interactuar con un conjunto de datos de personas. Incluye funcionalidades para:
- Consultar una lista de personas.
- Consultar una persona específica por su ID.
- Agregar una nueva persona a la lista.
- Eliminar a una persona específica.

### Rutas disponibles

- `GET /` - Responde con un mensaje de bienvenida.
- `GET /help` - Proporciona un mensaje de "ayuda".
- `GET /personas` - Devuelve una lista de todas las personas.
- `GET /personas/:personita` - Devuelve la información de una persona específica según su ID.
- `POST /personas/agregar` - Permite agregar una persona al conjunto de datos (requiere `nombre`, `apellido`, y `correo` en el cuerpo de la solicitud).
- `DELETE /personas/:persona` - Elimina a una persona de la lista.

## Instalación

1. Clona el repositorio.
   
   git clone [<URL-del-repositorio>](https://github.com/ferqueve/server291.git)

2. Instala las dependencias.
   
   npm install
   ```

## Uso

Para iniciar el servidor en modo de desarrollo:
```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`.

## Dependencias

- [Express](https://expressjs.com/) - Framework para la creación del servidor.
- [Nodemon](https://nodemon.io/) - Herramienta para reiniciar automáticamente el servidor en modo de desarrollo.

## Autor

Desarrollado por **Grupazo 291**.

## Licencia

Este proyecto está bajo la licencia ISC.

## Este proyecto irá creciendo en funcionalidades a medida que transcurra el curso.