const db = require('./server/db')
const {
    User,
    Mineral
} = require('./server/db/models')

const users = [
    {
        email: 'fflintstone4@gmail.com',
        password: '1111'
    },
    {
        email: 'brubble3@gmail.com',
        password: '1111'
    },
    {
        email: 'grabmytoes@gmail.com',
        password: '1111'
    },
    {
        email: 'lizardking2@gmail.com',
        password: '1111'
    }
]

const minerals = [
    {
        name: 'Amethyst',
        description: 'a violet variety of quartz. The name comes from the Koine Greek ἀμέθυστος amethystos from ἀ- a-, "not" and μεθύσκω methysko / μεθύω methyo, "intoxicate", a reference to the belief that the stone protected its owner from drunkenness',
        imageURL: '/images/amethyst-geode.jpg',
        price: 100.00
    },
    {
        name: 'Baryte',
        description: 'a mineral consisting of barium sulfate (BaSO4). Baryte is generally white or colorless, and is the main source of barium.',
        imageURL: '/images/6158M-barite2.jpg',
        price: 125.00
    },
    {
        name: 'Chambersite',
        description: 'Chambersite is a manganese borate mineral with formula: Mn3B7O13Cl. It is a member of the borate mineral series that includes other minerals such as ericaite, Fe3B7O13Cl, and boracite Mg3B7O13Cl.',
        imageURL: '/images/chambersite.jpg',
        price: 100.00
    },
    {
        name: 'Diamond',
        description: 'a solid form of the element carbon with its atoms arranged in a crystal structure called diamond cubic. At room temperature and pressure, another solid form of carbon known as graphite is the chemically stable form, but diamond almost never converts to it. Diamond has the highest hardness and thermal conductivity of any natural material,',
        imageURL: '/images/polished-diamond.png',
        price: 3.99
    },
    {
        name: 'Edenite',
        description: 'Edenite is a double chain silicate mineral of the amphibole group with the general chemical composition NaCa2Mg5(Si7Al)O22(OH)2. Edenite is named for the locality of Edenville, Orange County, New York, where it was first described',
        imageURL: '/images/defaultmineral.jpg',
        price: 100.00
    },
    {
        name: 'Redstone',
        description: 'a deep earth mineral that is prized for its conductivity',
        imageURL: '/images/defaultmineral.jpg',
        price: 50.00
    }
]

class RandomRock {
    constructor(rockname, price) {
        this.name = rockname;
        this.description = "HOT NEW ROCK! EXCLUSIVE! ONLY AT MINERALOGIE.";
        this.imageURL = '/images/defaultmineral.jpg';
        this.price = price
    }
}

const randomRockArray = [];


const generate = (array) => {
    const pf = ['di', 'bo', 'ig', 'vege', 'mito', 'wombo', 'meta'];
    const bs = ['el', 'eld', 'tir', 'nef', 'eth', 'ith', 'tal', 'ral', 'ort', 'thul', 'amn', 'sol', 'shael', 'dol', 'hel', 'lo', 'lum', 'ko', 'fal', 'lem', 'pul', 'um', 'mal', 'ist', 'gul', 'vex', 'ohm', 'lo', 'sur', 'ber', 'jah', 'cham', 'zod' ];
    const sf = ['ite', 'site', 'mite', 'nite', 'lite', 'lyte', 'trite', 'tryte', 'stone', 'rock', 'jigae'];

    for (let i = 0; i < 50; i++) {
        let prefix = '';
        let base = '';
        let suffix = '';
        let composite = '';
        let price = Math.random() * 1000

        if (Math.random() > .75) {
            prefix = pf[Math.floor(Math.random() * pf.length)]
        } 

        base = bs[Math.floor(Math.random() * bs.length)]
        suffix = sf[Math.floor(Math.random() * sf.length)]

        composite = prefix + base + suffix;
        composite = composite.charAt(0).toUpperCase() + composite.substring(1)
        
        let formation = new RandomRock(composite, price)
        array.push(formation)

    }
    return array;
}

generate(randomRockArray)
console.log(randomRockArray);

async function seed() {
    await db.sync({force: true})
    console.log('database synchronized!')

    await Promise.all([
        User.bulkCreate(users, {returning: true}),
        Mineral.bulkCreate(minerals, {returning: true}),
        Mineral.bulkCreate(randomRockArray, {returning: true})
    ])
}

seed()