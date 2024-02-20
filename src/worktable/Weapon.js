class Weapon {
    constructor(name, resourceNeeded) {
        this.name = name
        this.resourceNeeded = resourceNeeded.map(resource => ({
            resource: resource.resource instanceof Resources ? resource.resource : null,
            quantity: resource.quantity
        }))
    }
}

class Sword extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'sword'
    }
}

class Flute extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'flute'
    }
}

class Two_Handed_Sword extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'two_handed_sword'
    }
}

class Blade extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'blade'
    }
}

class Two_Handed_Blade extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'two_handed_blade'
    }
}

class Double_Axes extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'double_axes'
    }
}

class Dagger extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'dagger'
    }
}

class Ruler extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'ruler'
    }
}

class Twin_Thorns extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'twin_thorns'
    }
}

class Double_Rings extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'double_rings'
    }
}

class Quater_Staff extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'quater_staff'
    }
}

class Staff extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'staff'
    }
}

class Spear extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'spear'
    }
}

class Naginata extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'naginata'
    }
}

class Fan extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'fan'
    }
}

class Epee extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'epee'
    }
}

class Katar extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'katar'
    }
}

class Brush extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'brush'
    }
}

class Qin extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'qin'
    }
}

class Bow extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'bow'
    }
}

class Great_Axe extends Weapon {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'great_axe'
    }
}