class Tailor {
    constructor(name, resourceNeeded) {
        this.name = name
        this.resourceNeeded = resourceNeeded.map(resource => ({
            resource: resource.resource instanceof Resources ? resource.resource : null,
            quantity: resource.quantity
        }))
    }
}

class Hair_accessory extends Tailor {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'hair_accessory'
    }
}
const hair_accessory1 = new Hair_accessory(
    'หมวก 1', 
    'hair_accessory1', 
    [
        { resource: tailor_chalk, quantity: 5 },
        { resource: linen, quantity: 6 },
        { resource: thin_monkey_skin, quantity: 7 },
        { resource: guazhou, quantity: 9 },
        { resource: nine_clouds_satin, quantity: 3 },
        { resource: moon_light_brocade, quantity: 2 } 
    ]
)

const hair_accessory2 = new Hair_accessory(
    'หมวก 2', 
    'hair_accessory1', 
    [
        { resource: tailor_chalk, quantity: 5 },
        { resource: linen, quantity: 6 },
        { resource: thin_monkey_skin, quantity: 7 },
        { resource: guazhou, quantity: 9 },
        { resource: nine_clouds_satin, quantity: 3 },
        { resource: moon_light_brocade, quantity: 2 } 
    ]
)

class Top extends Tailor {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'top'
    }
}
const top1 = new Top(
    'เสื้อ 1', 
    'top1', 
    [
     { resource: tailor_chalk, quantity: 5 },
     { resource: linen, quantity: 9 },
     { resource: xuanhe_hasp, quantity: 1 },
     { resource: guazhou, quantity: 5 },
     { resource: nine_clouds_satin, quantity: 2 },
     { resource: moon_light_brocade, quantity: 2 }   
    ]
)

const top2 = new Top(
    'เสื้อ 2', 
    'top1', 
    [
     { resource: tailor_chalk, quantity: 5 },
     { resource: linen, quantity: 9 },
     { resource: xuanhe_hasp, quantity: 1 },
     { resource: guazhou, quantity: 5 },
     { resource: nine_clouds_satin, quantity: 2 },
     { resource: moon_light_brocade, quantity: 2 }   
    ]
)

class Bottom extends Tailor {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'bottom'
    }
}
const bottom1 = new Bottom(
    'กางเกง 1', 
    'bottom1', 
    [
     { resource: tailor_chalk, quantity: 9 },
     { resource: linen, quantity: 10 },
     { resource: thin_monkey_skin, quantity: 6 },
     { resource: guazhou, quantity: 8 },
     { resource: nine_clouds_satin, quantity: 2 },
     { resource: moon_light_brocade, quantity: 3 }   
    ]
)
const bottom2 = new Bottom(
    'กางเกง 2', 
    'bottom1', 
    [
     { resource: tailor_chalk, quantity: 9 },
     { resource: linen, quantity: 10 },
     { resource: thin_monkey_skin, quantity: 6 },
     { resource: guazhou, quantity: 8 },
     { resource: nine_clouds_satin, quantity: 2 },
     { resource: moon_light_brocade, quantity: 3 }   
    ]
)

class Boots extends Tailor {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'boot'
    }
}
const boots1 = new Boots(
    'รองเท้า 1', 
    'boots', 
    [
     { resource: tailor_chalk, quantity: 8 },
     { resource: linen, quantity: 6 },
     { resource: thin_monkey_skin, quantity: 7 },
     { resource: guazhou, quantity: 8 },
     { resource: nine_clouds_satin, quantity: 2 },
     { resource: moon_light_brocade, quantity: 3 }   
    ]
)
const boots2 = new Boots(
    'รองเท้า 2', 
    'boots', 
    [
     { resource: tailor_chalk, quantity: 8 },
     { resource: linen, quantity: 6 },
     { resource: thin_monkey_skin, quantity: 7 },
     { resource: guazhou, quantity: 8 },
     { resource: nine_clouds_satin, quantity: 2 },
     { resource: moon_light_brocade, quantity: 3 }   
    ]
)

class Shinguard extends Tailor {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'shinguard'
    }
}
const shinguard1 = new Shinguard(
    'ปลอกขา 1', 
    'shinguard1', 
    [
     { resource: tailor_chalk, quantity: 10 },
     { resource: linen, quantity: 9 },
     { resource: diren_hasp, quantity: 1 },
     { resource: guazhou, quantity: 5 },
     { resource: nine_clouds_satin, quantity: 3 },
     { resource: moon_light_brocade, quantity: 2 }   
    ]
)
const shinguard2 = new Shinguard(
    'ปลอกขา 2', 
    'shinguard1', 
    [
     { resource: tailor_chalk, quantity: 10 },
     { resource: linen, quantity: 9 },
     { resource: diren_hasp, quantity: 1 },
     { resource: guazhou, quantity: 5 },
     { resource: nine_clouds_satin, quantity: 3 },
     { resource: moon_light_brocade, quantity: 2 }   
    ]
)

class Wristguard extends Tailor {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'wristguard'
    }
}
const wristguard1 = new Wristguard(
    'ปลอกแขน 1', 
    'wristguard1', 
    [
        { resource: tailor_chalk, quantity: 6 },
        { resource: linen, quantity: 8 },
        { resource: thin_monkey_skin, quantity: 5 },
        { resource: guazhou, quantity: 10 },
        { resource: nine_clouds_satin, quantity: 3},
        { resource: moon_light_brocade, quantity: 3},
    ]
)
const wristguard2 = new Wristguard(
    'ปลอกแขน 2', 
    'wristguard1', 
    [
        { resource: tailor_chalk, quantity: 6 },
        { resource: linen, quantity: 8 },
        { resource: thin_monkey_skin, quantity: 5 },
        { resource: guazhou, quantity: 10 },
        { resource: nine_clouds_satin, quantity: 3},
        { resource: moon_light_brocade, quantity: 3},
    ]
)