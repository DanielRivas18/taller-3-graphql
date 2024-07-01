import axios from 'axios';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Definición de tipos
const typeDefs = `
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

    type Query {
        getProducts: [Data]
        getProductById(id: ID!): Data
    }

    type Mutation {
        createProduct(nombre: String!, inventario: Int!, tipo_producto: String!, fecha_vencimiento: String!, precio: Int!): Data
        updateProduct(id: ID!, nombre: String, inventario: Int, tipo_producto: String, fecha_vencimiento: String, precio: Int): Data
        deleteProduct(id: ID!): String
        sellProduct(id: ID, nombre: String, cantidad: Int!): Data
    }
`;

const resolvers = {
    Query: {
        getProducts: async () => {
            try {
                const response = await axios.get('https://taller-2.onrender.com/api/products');
                return Array.isArray(response.data.data) ? response.data.data : [];
            } catch (error) {
                console.error('Error fetching products:', error);
                return [];
            }
        },
        getProductById: async (_, { id }) => {
            try {
                const response = await axios.get(`https://taller-2.onrender.com/api/products/${id}`);
                return response.data.data;
            } catch (error) {
                console.error(`Error fetching product with id ${id}:`, error);
                return null;
            }
        }
    },
    Mutation: {
        createProduct: async (_, { nombre, inventario, tipo_producto, fecha_vencimiento, precio }) => {
            try {
                const response = await axios.post('https://taller-2.onrender.com/api/products', {
                    nombre,
                    inventario,
                    tipo_producto,
                    fecha_vencimiento,
                    precio
                });
                return response.data.data;
            } catch (error) {
                console.error('Error creating product:', error);
                return null;
            }
        },
        updateProduct: async (_, { id, nombre, inventario, tipo_producto, fecha_vencimiento, precio }) => {
            try {
                const response = await axios.put(`https://taller-2.onrender.com/api/products/${id}`, {
                    nombre,
                    inventario,
                    tipo_producto,
                    fecha_vencimiento,
                    precio
                });
                return response.data.data;
            } catch (error) {
                console.error(`Error updating product with id ${id}:`, error);
                return null;
            }
        },
        deleteProduct: async (_, { id }) => {
            try {
                await axios.delete(`https://taller-2.onrender.com/api/products/${id}`);
                return `Producto con id ${id} eliminado con éxito`;
            } catch (error) {
                console.error(`Error deleting product with id ${id}:`, error);
                return null;
            }
        },
        sellProduct: async (_, { id, nombre, cantidad }) => {
            try {
                const response = await axios.post('https://taller-2.onrender.com/api/products/sell', {
                    id,
                    nombre,
                    cantidad
                });
                return response.data.data;
            } catch (error) {
                console.error('Error selling product:', error);
                return null;
            }
        }
    }
};

// Creación del servidor Apollo
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// Inicio del servidor
async function startServer() {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 3900 }
    });

    console.log(`🚀 Servidor listo en ${url}`);
}

startServer().catch(error => {
    console.error('Error al iniciar el servidor:', error);
});
