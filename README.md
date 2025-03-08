# 🎵 Reactify(Spotify Clone)

Este es un clon de Spotify construido con **Node.js**, **React**, y otras tecnologías.

## 📂 Estructura del Proyecto

```plaintext
backend/
│── src/
│   ├── controller/      # Controladores para manejar la lógica de las rutas
│   ├── lib/             # Librerías y utilidades (ej. configuración de Cloudinary, DB, sockets)
│   ├── middleware/      # Middlewares (ej. autenticación)
│   ├── models/          # Modelos de la base de datos (ej. usuarios, canciones, álbumes)
│   ├── routes/          # Rutas de la API
│   ├── seeds/           # Datos iniciales para poblar la base de datos
│── tmp/                 # Carpeta temporal (posible para archivos subidos)
│── .env                 # Variables de entorno (NO subir a GitHub)
│── package.json         # Dependencias del proyecto
│── package-lock.json    # Versión exacta de dependencias

frontend/
│── dist/                 # Archivos generados tras la compilación (no se suben a Git)
│── public/               # Archivos estáticos (imágenes, íconos, etc.)
│── src/                  # Código fuente del frontend
│   ├── components/       # Componentes reutilizables
│   ├── layout/           # Componentes de diseño (layouts principales)
│   ├── lib/              # Configuración de Axios y utilidades
│   ├── pages/            # Páginas principales de la aplicación
│   ├── providers/        # Proveedores de contexto (ej. autenticación)
│   ├── stores/           # Manejo de estado (Zustand u otro)
│   ├── types/            # Definiciones de tipos para TypeScript
│── .env.local            # Variables de entorno (NO subir a GitHub)
│── .gitignore            # Archivos y carpetas a ignorar en Git
│── package.json          # Dependencias del frontend
│── tailwind.config.js    # Configuración de Tailwind CSS
│── vite.config.ts        # Configuración de Vite
│── tsconfig.json         # Configuración de TypeScript
│── README.md             # Documentación del frontend
```

## 🛠 Herramientas utilizadas

### Backend:
- **Express.js** - Framework para construir la API.
- **Mongoose** - ODM para manejar MongoDB.
- **Cloudinary** - Almacenamiento de imágenes en la nube.
- **Socket.io** - Comunicación en tiempo real.
- **CORS** - Middleware para permitir solicitudes entre dominios.
- **dotenv** - Manejo de variables de entorno.
- **express-fileupload** - Subida de archivos.
- **node-cron** - Programación de tareas en segundo plano.
- **@clerk/express** - Autenticación de usuarios.

### Frontend:
- **React** - Biblioteca para construir la UI.
- **Zustand** - Gestión de estado.
- **React Router** - Navegación entre páginas.
- **Axios** - Manejo de peticiones HTTP.
- **Tailwind CSS** - Estilización del frontend.
- **Radix UI** - Componentes accesibles y estilizados.
- **Lucide React** - Íconos SVG personalizables.
- **React Hot Toast** - Notificaciones elegantes.
- **React Resizable Panels** - Paneles redimensionables.
- **Socket.io Client** - Comunicación en tiempo real con el backend.
- **Clerk React** - Autenticación de usuarios con Clerk.