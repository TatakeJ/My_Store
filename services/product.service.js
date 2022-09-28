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
            "id": "1",
            "name": "Call of Duty Black Ops 4",
            "price": 711,
            "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81E5fUW19gL._SX342_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2F-%2Fes%2FCall-Duty-Black-Ops-Points-PlayStation%2Fdp%2FB08S9MTVM7&tbnid=JE7tgLUHD2pyoM&vet=12ahUKEwj467SosLb6AhXqxSkDHV1WDZoQMyglegUIARCvAg..i&docid=taZOKIJBVdMtHM&w=342&h=427&q=call%20of%20duty&ved=2ahUKEwj467SosLb6AhXqxSkDHV1WDZoQMyglegUIARCvAg"
        }, {
            "id": "2",
            "name": "God of War",
            "price": 641,
            "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn1.epicgames.com%2Foffer%2F3ddd6a590da64e3686042d108968a6b2%2FEGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7&imgrefurl=https%3A%2F%2Fstore.epicgames.com%2Fes-ES%2Fp%2Fgod-of-war&tbnid=fRfyHlO1wyoelM&vet=12ahUKEwiakIjbsbb6AhUdxSkDHfzbBlMQMygAegUIARDeAQ..i&docid=7h2OUs_WgxYtjM&w=1200&h=1600&q=god%20of%20war&ved=2ahUKEwiakIjbsbb6AhUdxSkDHfzbBlMQMygAegUIARDeAQ"
        }, {
            "id": "3",
            "name": "Mortal Kombat 11",
            "price": 173,
            "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic-cdn.jtvnw.net%2Fttv-boxart%2F510578_IGDB-272x380.jpg&imgrefurl=https%3A%2F%2Fwww.twitch.tv%2Fdirectory%2Fgame%2FMortal%2520Kombat%252011%3Flang%3Des&tbnid=0_CsPtIvuycXxM&vet=12ahUKEwjuifX_sbb6AhWKON8KHbw4AYYQMygMegUIARD4AQ..i&docid=28WN7HAywf3m5M&w=272&h=380&q=mortal%20kombat&ved=2ahUKEwjuifX_sbb6AhWKON8KHbw4AYYQMygMegUIARD4AQ"
        }, {
            "id": "4",
            "name": "ARK",
            "price": 42,
            "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.nintendo.com%2Fimage%2Fupload%2Fc_fill%2Cw_1200%2Fq_auto%3Abest%2Ff_auto%2Fdpr_2.0%2Fncom%2Fes_LA%2Fgames%2Fswitch%2Fa%2Fark-survival-evolved-switch%2Fhero&imgrefurl=https%3A%2F%2Fwww.nintendo.com%2Fes-mx%2Fstore%2Fproducts%2Fark-survival-evolved-switch%2F&tbnid=Ea7U-QTgTbCNBM&vet=12ahUKEwi7iOCisrb6AhWCyCkDHRKGCWMQMygKegUIARD6AQ..i&docid=Ol1kuTaJd98esM&w=2400&h=1350&q=ark&ved=2ahUKEwi7iOCisrb6AhWCyCkDHRKGCWMQMygKegUIARD6AQ"
        }, {
            "id": "5",
            "name": "Phasmofobia",
            "price": 717,
            "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.akamai.steamstatic.com%2Fsteam%2Fapps%2F739630%2Fcapsule_616x353.jpg%3Ft%3D1663254578&imgrefurl=https%3A%2F%2Fstore.steampowered.com%2Fapp%2F739630%2FPhasmophobia%2F%3Fl%3Dlatam&tbnid=U50o_cd37_FS5M&vet=12ahUKEwjvhpq5srb6AhUxhuAKHSRAD6YQMygBegUIARChAQ..i&docid=kmkckPwOBPF3BM&w=616&h=353&q=phasmophobia&ved=2ahUKEwjvhpq5srb6AhUxhuAKHSRAD6YQMygBegUIARChAQ"
        }, {
            "id": "6",
            "name": "Fall Guys",
            "price": 807,
            "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.andro4all.com%2Fandro4all%2F2020%2F08%2FFall-Guys.jpg&imgrefurl=https%3A%2F%2Fandro4all.com%2Fjuegos%2Fconfirmado-fall-guys-llegara-a-los-moviles&tbnid=sOS1mfVWI2vSQM&vet=12ahUKEwjJ6ez2srb6AhXlAd8KHZ5KA3IQMygHegUIARDcAQ..i&docid=3hKUzZqbSL6Z-M&w=1400&h=1000&q=fall%20guys&ved=2ahUKEwjJ6ez2srb6AhXlAd8KHZ5KA3IQMygHegUIARDcAQ"
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