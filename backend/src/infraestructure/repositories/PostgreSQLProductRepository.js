
import pool from '../database/connection.js';
import Product from '../../domain/entities/Product.js';

export default class PostgreSQLProductRepository {

    async create(productData) {

        // 1. Crear y validar la entidad
        const product = new Product(productData);

        // 2. Ejecutar la consulta SQL
        const query = `
            INSERT INTO products
            (name, description, price, stock, image_url, category_id)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *
        `;

        // 3. Enviar los valores a PostgreSQL
        const values = [
            product.name,
            product.description,
            product.price,
            product.stock,
            product.imageUrl,
            product.categoryId
        ];

        const result = await pool.query(query, values);

        // 4. Devolver el producto registrado
        const row = result.rows[0];

        return {
            id: row.id,
            name: row.name,
            description: row.description,
            price: Number(row.price),
            stock: row.stock,
            imageUrl: row.image_url,
            categoryId: row.category_id
        };
    }
}
