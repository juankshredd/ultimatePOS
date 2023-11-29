# ultimatePOS
Proyecto de software point of sales para graduación de ADSO en el SENA ficha 2627106

# Documentación de API - UltimatePOS
# Introducción
Bienvenido a la documentación de la API de UltimatePOS, una aplicación integral de punto de venta que abarca desde el registro de cajeros y clientes hasta la gestión de inventario y ventas. Esta API proporciona endpoints esenciales para interactuar con los datos de la aplicación. Asegúrese de utilizar adecuadamente las autenticaciones proporcionadas para cada endpoint.

# Base URL:

https://api.ultimatepos.com/v1
# Endpoints
# 1. /login
Descripción:
Endpoint para autenticar a los usuarios y generar el inicio de sesión en la aplicación.

Método:

POST
Parámetros de la Solicitud:

usuario (string): El nombre de usuario del cajero.
contraseña (string): La contraseña del cajero.
Respuesta Exitosa:
Código de estado 200


{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "rol": "cajero"
}
# 2. /registro
Descripción:
Endpoint para registrar nuevos cajeros y clientes en la aplicación.

Método:

POST
Parámetros de la Solicitud:

usuario (string): Nombre de usuario del nuevo cajero o cliente.
contraseña (string): Contraseña del nuevo cajero o cliente.
rol (string): Rol del usuario ('cajero' o 'cliente').
Respuesta Exitosa:
Código de estado 201

# 3. /inventario
Descripción:
Endpoint para gestionar el inventario, permitiendo registrar nuevos productos, consultar y editar registros.

Métodos:

# Obtener Lista de Productos:

GET
Respuesta Exitosa:
Código de estado 200



[
  {
    "id": 1,
    "nombre": "Producto A",
    "precio": 20.99,
    "stock": 100
  },
  {
    "id": 2,
    "nombre": "Producto B",
    "precio": 15.50,
    "stock": 50
  }
]
# Registrar Nuevo Producto:

POST
Parámetros de la Solicitud:

nombre (string): Nombre del nuevo producto.
precio (number): Precio del nuevo producto.
stock (integer): Cantidad inicial en inventario.
Respuesta Exitosa:
Código de estado 201

# Editar Producto:

PUT /inventario/{idProducto}
Parámetros de la Solicitud:

nombre (string, opcional): Nuevo nombre del producto.
precio (number, opcional): Nuevo precio del producto.
stock (integer, opcional): Nueva cantidad en inventario.
Respuesta Exitosa:
Código de estado 200

# 4. /venta
Descripción:
Endpoint para crear ventas, utilizando datos del cliente, productos y el cajero que realiza la venta.

Método:


POST
Parámetros de la Solicitud:

idCliente (integer): Identificador del cliente asociado a la venta.
productos (array): Lista de objetos con información de los productos vendidos.
idProducto (integer): Identificador del producto.
cantidad (integer): Cantidad vendida.
Respuesta Exitosa:
Código de estado 201
