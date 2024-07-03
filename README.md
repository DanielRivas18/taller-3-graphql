## DESPLIEGUE FRONTED CON USO DE GRAPHQL
  
- [fronted-taller-3-graphql.vercel.app](https://fronted-taller-3-graphql.vercel.app/)
  
# TALLER GRAPHQL

- Dentro del desarrollo de este taller se conectó la API REST: [https://taller-2.onrender.com/api/products](https://taller-2.onrender.com/api/products) que contiene la lógica (métodos get, put, delete, etc.) y datos relacionados con los productos de una miscelánea, con GRAPHQL.
  
- Documentación de la API REST para mayor entendimiento de lógica API REST: [https://taller-2.onrender.com/docs/](https://taller-2.onrender.com/docs/)

- Despliegue de GRAPHQL para uso en FRONTED: [https://taller-3-graphql.onrender.com/](https://taller-3-graphql.onrender.com/)

- Si quiere saber el contexto (documentación de proyecto), se le recomienda leer el PDF, donde se explica la problemática que se ha venido trabajando a lo largo del semestre en los talleres y proyecto.

### INSTALACIÓN LOCAL DE GRAPHQL

- Si quieres analizar las queries y mutaciones creadas en este proyecto de mejor manera, se recomienda instalar el repositorio de manera local para poder analizar con Apollo Server lo creado en este taller. Para eso:

  - Descargar y descomprimir este repositorio
  - Instalar dependencias con:
    ```sh
    npm i
    ```
 
  - Ejecutar proyecto con:
    ```sh
    npm start
    ```

# RECOMENDACIONES ANTE POSIBLES FALLOS

Si el proyecto no funciona correctamente, se le recomienda acceder directamente (acceder a las direcciones) al despliegue hecho en Render de GRAPHQL y del API REST, ya que como este es un servicio gratuito de despliegue, puede que dichos despliegues no esten activos  en el momento de su uso.

## QUERIES Y MUTACIONES

- **getProducts**: trae todos los datos
- **getProductById**: trae solo un dato buscado por el ID

- **createProduct**: almacena un nuevo producto
- **updateProduct**: edita un producto existente
- **deleteProduct**: elimina un producto
- **sellProduct**: vende un producto

  - Datos traídos:

    ```graphql
    type Data {
        id: ID!
        nombre: String
        inventario: Int
        tipo_producto: String
        fecha_vencimiento: String
        precio: Int
        estado_actual: String
        fecha_ingreso: String
    }
    ```
### DEMAS REPOSITORIOS:

- FRONTED CON GRAPHQL:  https://github.com/DanielRivas18/fronted-taller-3-graphql
- API REST:  https://github.com/DanielRivas18/taller-2
