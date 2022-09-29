const faker = require('faker');
const boom = require('@hapi/boom');

class ProductsService {

    constructor() {
        this.products = [];
        this.generate();
    }

    generate() {
        // const limit = 100
        //   for (let index = 0; index < limit; index++) {
        //     this.products.push({
        //       id: faker.datatype.uuid(),
        //       name: faker.commerce.productName(),
        //       price: parseInt(faker.commerce.price(), 10),
        //       image: faker.image.imageUrl(),
        //       isBlock: faker.datatype.boolean(),
        //     });
        //   }
        this.products.push({
            "id": 1,
            "name": "Call of Duty Black Ops 4",
            "price": 711,
            "image": "https://as01.epimg.net/meristation/imagenes/2018/08/06/avances/1533590030_373112_1533715902_noticia_normal.jpg",
            "description": "Call of Duty es una serie de videojuegos de disparos en primera persona, de estilo bélico, desarrollada principal e inicialmente por Infinity Ward, Treyarch, Sledgehammer Games y en menor proporción Raven Software y distribuida por Activision. "
        }, {
            "id": 2,
            "name": "God of War",
            "price": 641,
            "image": "https://media.vandal.net/m/3-2020/20203218232519_1.jpg",
            "description": "God of War es una franquicia de videojuegos hack and slash creada por SCE Santa Monica Studio y distribuida por Sony Computer Entertainment."
        }, {
            "id": 3,
            "name": "Mortal Kombat 11",
            "price": 173,
            "image": "https://i.blogs.es/195ca5/e7ockwqweaanwyj/1366_2000.jpeg",
            "description": "Mortal Kombat 11 es un videojuego de lucha desarrollado por NetherRealm Studios y publicado por Warner Bros. Interactive Entertainment. Se ejecuta en una versión muy modificada de Unreal Engine 3 es la undécima entrega principal de la serie Mortal Kombat y una secuela de 2015 Mortal Kombat X"
        }, {
            "id": 4,
            "name": "ARK",
            "price": 42,
            "image": "https://puregaming.es/wp-content/uploads/2015/05/ark-survival.jpg",
            "description": "Ark: Survival Evolved es un videojuego de acción-aventura y supervivencia desarrollado por Studio Wildcard, Instinct Games, Efecto Studio y Virtual Basement. Lanzado oficialmente el 29 de agosto de 2017 para Windows, Xbox One, Nintendo Switch, PlayStation 4, IOS y Android."
        }, {
            "id": 5,
            "name": "Phasmofobia",
            "price": 717,
            "image": "https://www.coliseugeek.com.br/wp-content/uploads/2022/06/juandesouza-phasmophobia3.jpg",
            "description": "Phasmophobia es un videojuego de terror independiente desarrollado y publicado por Kinetic Games. El juego contó con un acceso anticipado a través de Steam para los equipos de Microsoft Windows en septiembre de 2020, junto con soporte de realidad virtual."
        }, {
            "id": 6,
            "name": "Fall Guys",
            "price": 807,
            "image": "https://cdn.andro4all.com/andro4all/2020/08/Fall-Guys.jpg",
            "description": "Fall Guys es un videojuego de plataformas y battle royale desarrollado por Mediatonic y publicado inicialmente por Devolver Digital y más tarde por Epic Games. Fue anunciado en la E3 2019​ y fue lanzado para Windows y PlayStation 4 el 4 de agosto del 2020."
        })
    }

    async create(data) {
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }

    find() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.products);
            }, 2000);
        });
    }

    async findOne(id) {
        const product = this.products.find(item => item.id === id)
        if (!product) {
            throw boom.notFound('Product notFound');
        }
        if (product.isBlock) {
            throw boom.conflict('producto is block');
        }
        return product;
    }

    async update(id, changes) {
        const index = this.products.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('Product notFound');
        }
        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes
        };
        return this.products[index];
    }

    async delete(id) {
        const index = this.products.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('Product notFound');
        }
        this.products.splice(index, 1);
        return { id };
    }
}


module.exports = ProductsService