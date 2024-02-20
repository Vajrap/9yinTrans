class Accessory {
    constructor(name, resourceNeeded) {
        this.name = name
        this.resourceNeeded = resourceNeeded.map(resource => ({
            resource: resource.resource instanceof Resources ? resource.resource : null,
            quantity: resource.quantity
        }))
    }
}

class Earring extends Accessory {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'earring'
    }
}
const earring1 = new Earring(
    'หู 1', 
    'earring1', 
    [
        { resource: tailor_chalk, quantity: 5 },
        { resource: linen, quantity: 6 },
        { resource: thin_monkey_skin, quantity: 7 },
        { resource: guazhou, quantity: 9 },
        { resource: nine_clouds_satin, quantity: 3 },
        { resource: moon_light_brocade, quantity: 2 } 
    ]
)
const earring2 = new Earring(
    'หู 2', 
    'earring2', 
    [
        { resource: tailor_chalk, quantity: 5 },
        { resource: linen, quantity: 6 },
        { resource: thin_monkey_skin, quantity: 7 },
        { resource: guazhou, quantity: 9 },
        { resource: nine_clouds_satin, quantity: 3 },
        { resource: moon_light_brocade, quantity: 2 } 
    ]
)

class Ring extends Accessory {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'ring'
    }
}
const ring1 = new Earring(
    'แหวน 1', 
    'ring1', 
    [
        { resource: tailor_chalk, quantity: 5 },
        { resource: linen, quantity: 6 },
        { resource: thin_monkey_skin, quantity: 7 },
        { resource: guazhou, quantity: 9 },
        { resource: nine_clouds_satin, quantity: 3 },
        { resource: moon_light_brocade, quantity: 2 } 
    ]
)
const ring2 = new Earring(
    'แหวน 2', 
    'ring2', 
    [
        { resource: tailor_chalk, quantity: 5 },
        { resource: linen, quantity: 6 },
        { resource: thin_monkey_skin, quantity: 7 },
        { resource: guazhou, quantity: 9 },
        { resource: nine_clouds_satin, quantity: 3 },
        { resource: moon_light_brocade, quantity: 2 } 
    ]
)

class Necklace extends Accessory {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'necklace'
    }
}
const necklace1 = new Earring(
    'สร้อย 1', 
    'necklace1', 
    [
        { resource: tailor_chalk, quantity: 5 },
        { resource: linen, quantity: 6 },
        { resource: thin_monkey_skin, quantity: 7 },
        { resource: guazhou, quantity: 9 },
        { resource: nine_clouds_satin, quantity: 3 },
        { resource: moon_light_brocade, quantity: 2 } 
    ]
)
const necklace2 = new Earring(
    'สร้อย 2', 
    'necklace2', 
    [
        { resource: tailor_chalk, quantity: 5 },
        { resource: linen, quantity: 6 },
        { resource: thin_monkey_skin, quantity: 7 },
        { resource: guazhou, quantity: 9 },
        { resource: nine_clouds_satin, quantity: 3 },
        { resource: moon_light_brocade, quantity: 2 } 
    ]
)