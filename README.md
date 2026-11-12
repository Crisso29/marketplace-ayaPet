
# ayaPet 🐾

### Sistema web para la gestión de productos de una tienda de mascotas

## 1. Descripción del proyecto

ayaPet es un proyecto desarrollado como parte del aprendizaje práctico del curso de Arquitectura de Software. Consiste en una aplicación web sencilla que permite administrar los productos de una tienda de mascotas.

Durante su desarrollo se trabajó en la construcción de un frontend, una API REST y una base de datos PostgreSQL. También se buscó organizar el backend utilizando Clean Architecture, con la finalidad de separar las responsabilidades y comprender cómo se relacionan las diferentes partes de una aplicación.

El proyecto se desarrolló paso a paso, desde la creación de la API hasta su integración con la interfaz web.

## 2. Objetivo

Desarrollar una aplicación web básica que permita gestionar productos de una tienda de mascotas y utilizarla como referencia para aplicar conceptos de arquitectura de software, desarrollo de API REST, organización del código y pruebas de software.

## 3. Funcionalidades implementadas

Actualmente, ayaPet permite:

- Registrar productos.
- Consultar todos los productos.
- Consultar un producto por su identificador.
- Actualizar la información de un producto.
- Eliminar productos.
- Almacenar los productos y sus categorías en PostgreSQL.

El sistema cuenta con una interfaz web desde la cual se pueden realizar estas operaciones sin necesidad de utilizar directamente Postman.

## 4. Arquitectura del sistema

Para desarrollar ayaPet se tomó la decisión de utilizar una arquitectura monolítica en el backend. Esto significa que las funcionalidades de la API se encuentran dentro de una misma aplicación.

Internamente, el backend se organizó siguiendo Clean Architecture, separando el código en cuatro capas:

- **Interfaces:** recibe las solicitudes HTTP y gestiona las respuestas.
- **Application:** contiene los casos de uso para registrar, consultar, actualizar y eliminar productos.
- **Domain:** contiene la entidad Product y sus reglas de validación.
- **Infrastructure:** se encarga de la conexión y comunicación con PostgreSQL.

Esta organización permite identificar mejor la responsabilidad de cada parte del sistema y facilita la comprensión del código.

## 5. Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de la interfaz web |
| CSS3 | Estilos de la aplicación |
| JavaScript | Funcionalidad del frontend y backend |
| Node.js | Entorno de ejecución del backend |
| Express 5 | Desarrollo de la API REST |
| PostgreSQL | Almacenamiento de información |
| pg | Conexión entre Node.js y PostgreSQL |
| Swagger / OpenAPI | Documentación de la API |
| Jest | Pruebas unitarias |
| Postman | Pruebas de los endpoints |
| k6 | Evaluación de rendimiento y carga |
| Git | Control de versiones |

## 6. Estructura del proyecto

El proyecto está organizado en dos partes principales: frontend y backend. Además, cuenta con una carpeta para la documentación de arquitectura.

```text
ayaPet/
│
├── backend/
│   ├── src/
│   │   ├── domain/
│   │   ├── application/
│   │   ├── infrastructure/
│   │   └── interfaces/
│   ├── test/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── assets/
│   ├── css/
│   ├── js/
│   └── index.html
│
├── docs/
│   └── architecture/
│
└── README.md
```

## 7. Requisitos previos

Para ejecutar el proyecto se necesita tener instalado:

- Node.js.
- npm.
- PostgreSQL.
- Visual Studio Code.
- Live Server para ejecutar el frontend.

## 8. Instalación y configuración

### 8.1. Clonar o descargar el proyecto

Clonar el repositorio desde GitHub:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresar a la carpeta del proyecto y luego a `backend`.

### 8.2. Instalar las dependencias

Abrir una terminal dentro de la carpeta `backend` y ejecutar:

```bash
npm install
```

### 8.3. Configurar las variables de entorno

Crear un archivo `.env` dentro de la carpeta `backend` con los datos de conexión a PostgreSQL:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=ayapet_db
DB_USER=postgres
DB_PASSWORD=TU_CONTRASEÑA
```

Reemplazar `TU_CONTRASEÑA` por la contraseña configurada en PostgreSQL.

**Importante:** el archivo `.env` contiene información de conexión y no debe compartirse ni subirse al repositorio.

### 8.4. Crear la base de datos

En PostgreSQL, crear una base de datos llamada:

```sql
CREATE DATABASE ayapet_db;
```

Luego ejecutar los scripts SQL de creación de las tablas `categories` y `products`, incluyendo la relación entre ambas.

También se deben registrar las categorías iniciales para poder asociarlas a los productos.

## 9. Ejecución del proyecto

### 9.1. Iniciar el backend

Desde la carpeta `backend`, ejecutar:

```bash
npm start
```

El backend estará disponible en:

http://localhost:3000

### 9.2. Abrir el frontend

Abrir la carpeta `frontend` en Visual Studio Code y ejecutar `index.html` utilizando Live Server.

La interfaz web se abrirá en el navegador.

## 10. Documentación de la API

Para consultar los endpoints y revisar cómo funciona la API, ingresar a:

http://localhost:3000/api-docs/

La documentación se encuentra desarrollada utilizando Swagger UI y OpenAPI.

Esta dirección estará disponible mientras el backend se encuentre en ejecución.

## 11. Pruebas de software

Durante el desarrollo se utilizaron diferentes herramientas para comprobar el funcionamiento del sistema.

### 11.1. Jest

Se utilizó para realizar pruebas unitarias de la entidad Product y verificar sus reglas de validación.

En las pruebas realizadas se obtuvo una cobertura del 100 % en el archivo `Product.js`.

Para ejecutar las pruebas:

```bash
npm test -- --coverage
```

### 11.2. Postman

Se utilizó para probar los endpoints de la API REST, verificando las operaciones de registro, consulta, actualización y eliminación de productos, así como las respuestas del backend.

### 11.3. k6

Se utilizará para evaluar el rendimiento de la API mediante pruebas de carga, observando los tiempos de respuesta y el comportamiento del sistema ante varias solicitudes.

Los resultados de estas pruebas se documentarán en el apartado de evaluación de atributos de calidad.

## 12. Documentación de arquitectura

En la carpeta `docs/architecture/` se encuentran los documentos elaborados durante el desarrollo de ayaPet. Estos permiten conocer cómo se organizó el sistema, qué decisiones se tomaron y cómo se relacionan sus componentes.

Entre los documentos de arquitectura se consideran:

- Diagrama de contexto.
- Diagrama de contenedores.
- Diagrama de componentes.
- Diagrama de código.
- Diagrama de despliegue.
- Diagrama de secuencia para el registro de productos.
- Drivers arquitectónicos.
- Evaluación de atributos de calidad.
- Architecture Decision Records (ADR).

## 13. Alcance del proyecto

ayaPet se desarrolló con fines académicos y como una aplicación de referencia para comprender los conceptos de arquitectura de software.

El alcance actual está centrado en la gestión de productos y categorías. No contempla procesos de pago, carrito de compras, pedidos ni autenticación de usuarios.

---

**Proyecto académico: ayaPet**

Sistema web básico para la gestión de productos de una tienda de mascotas.
