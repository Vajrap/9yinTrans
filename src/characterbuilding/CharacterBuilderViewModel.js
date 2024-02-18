class CharacterBuilderVM {
    constructor() {}

    selectSchool(schoolName, schoolType) {
        const internalTypeSelect = document.getElementById("internalTypeSelect");
        internalTypeSelect.innerHTML = "";
      console.log(schoolName, schoolType)
        let numInternals;
        switch (schoolType) {
          case "school":
            numInternals = 6;
            break;
          case "reclusive":
            numInternals = 2;
            break;
          case "faction":
            numInternals = 1;
            break;
          default:
            numInternals = 0;
            break;
        }

        for (let i = 1; i <= numInternals; i++) {
            const button = document.createElement("button");
            const internalName = SchoolInternalName[`${schoolName}_internal_${i}`]
            button.textContent = internalName;
            button.onclick = function() {
                characterBuilderVM.internalSelected(schoolName, i)
            }
            internalTypeSelect.appendChild(button);
        }
    }

    internalSelected(schoolName, i){
        let selectedSchool;
        switch (schoolName) {
          case "shaolin":
            selectedSchool = null
            break;
          case "wudang":
            selectedSchool = wudang
            break;  
        
          default:
            break;
        }
        const internal = selectedSchool.internals[i-1];
        this.createInternalModule(internal)
    }

    createInternalModule(internal) {
      const internalDetails = document.getElementById("internalDetails")

      internalDetails.innerHTML = ''

      console.log(internal.name, internal.stats, internal.effect)
      const internalModule = document.createElement("div");
      const internalName = document.createElement("div");
      internalName.innerHTML = internal.name
      const internalStats = document.createElement("div");
      internalStats.innerHTML = `Brawn: ${internal.stats.brawn}
      <br>Dexterity: ${internal.stats.dexterity}
      <br>Breath: ${internal.stats.breath} 
      <br>Spirit: ${internal.stats.spirit}
      <br>Stamina: ${internal.stats.stamina}`;
      const internalEffect = document.createElement("div");
      internalEffect.innerHTML = internal.effect

      internalModule.append(internalName)
      internalModule.append(internalStats)
      internalModule.append(internalEffect)


      internalDetails.append(internalModule)
    }
}

const characterBuilderVM = new CharacterBuilderVM()