class Resources {
    constructor(name) {
        this.name = name
    }
}

class Cloth extends Resources {
    constructor(name, obtain) {
        super(name)
        this.obtain = obtain
        this.type = 'Cloth'
    }
}
const linen = new Cloth('linen', null)
const guazhou = new Cloth('guazhou_green', '2*ramie + 2*newly_hatched_silk')
const nine_clouds_satin = new Cloth('nine_clouds_satin', '2*hemp + 2*clam_worm')
const moon_light_brocade = new Cloth('moonlight_brocade', 'Forbiden Instance, School Points, etc.')

class Consumption extends Resources {
    constructor(name, obtain) {
        super(name)
        this.obtain = obtain
        this.type = 'Consumption_Items'
    }
}
const tailor_chalk = new Consumption(`tailor_chalk`, `NPC vendor`)


class AnimalSkinAndFur extends Resources  {
    constructor(name, obtain) {
        super(name)
        this.obtain = obtain
        this.type = 'animal_skin_and_fur'
    }
}
const thin_monkey_skin = new AnimalSkinAndFur(`thin_monkey_skin`, `Scholar monkey`)

class SheetIron extends Resources {
    constructor(name, obtain) {
        super(name)
        this.obtain = obtain
        this.type = 'sheet_iron'
    }
}
const xuanhe_hasp = new SheetIron(`xuanhe_hasp`, `life`)
const diren_hasp = new SheetIron(`diren_hasp`, `life`)