class MultipleFilesComparer {
    constructor(){
        this.oldContents = new Map()
        this.newContents = new Map()
        this.keysSet = new Set();
        this.differences = new Map()
    }

    // getOldTranslatedFilesInput(files){
    //     for (const file of files) {
    //         const reader = new FileReader()
    //         reader.onload = () => {
    //             const content = reader.result.split('\n')
    //             this.oldContents.set(file.name, content)
    //         };
    //         reader.readAsText(file);
    //     } 
        
    // }

    

    // getNewUntranslatedFilesInput(files){
    //     for (const file of files) {
    //         const reader = new FileReader()
    //         reader.onload = () => {
    //             const content = reader.result.split('\n');
    //             this.newContents.set(file.name, content);
    //         };
    //         reader.readAsText(file);
    //     }
       
    // }

    async getOldTranslatedFilesInput(files) {
        for (const file of files) {
          const content = await this.readFile(file);
          this.oldContents.set(file.name, content);
        }
      }
      
      async getNewUntranslatedFilesInput(files) {
        for (const file of files) {
          const content = await this.readFile(file);
          this.newContents.set(file.name, content);
        }
      }
      
      readFile(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const content = reader.result.split('\n');
            resolve(content);
          };
          reader.onerror = reject;
          reader.readAsText(file);
        });
      }

    processFilesContent() {
        this.differences = new Map();
        this.keysSet = new Set();
        
        this.oldContents.forEach((oldContent, fileName) => {
            oldContent.forEach(line => {
                const key = line.split('=')[0];
                const trimmedKey = key.trim();
                this.keysSet.add(trimmedKey);
            });
            
            const newContent = this.newContents.get(fileName) || [];
            const differences = [];
            
            newContent.forEach(line => {
                const key = line.split('=')[0];
                const trimmedKey = key.trim();
                if (!this.keysSet.has(trimmedKey)) {
                    differences.push(line);
                }
            });
            
            this.differences.set(fileName, differences);
        });
    }

    getDifferences(fileName) {
        const differences = this.differences.get(fileName) || [];
        return differences.join('\n');
    }
    clear(){
        this.oldContents.clear();
        this.newContents.clear();
        this.keysSet.clear();
        this.differences.clear();
    }
    downloadDifferences() {
        const readmeText = `
        --------------------------
        Read Me
        --------------------------
        9yin translator helper; made by Vajra Pokaew, 2023
        ------------------------------`;
        const separatorText = '--------------------';
        let differencesText = '';


      this.differences.forEach((differences, fileName) => {
        if (differences.length > 0) {
          differencesText += `${separatorText}\nFile: ${fileName}\n${separatorText}\n${differences.join('\n')}\n\n`;
        }
      });

      const filename = 'all_diffs.idres';
      const blob = new Blob([readmeText + differencesText], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    } 
}

const multiComparer = new MultipleFilesComparer()