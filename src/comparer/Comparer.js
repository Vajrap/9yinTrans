/*
- This function is for comparing between two files, 
- The translated one(1st) you've used and 
- The new one(2nd) that came with new patch:
- After recieved both files, the function return one file 
- The returned file contain all the lines that "Doesn't appeared in the translated one (1st)""
- The user then push all lines in the returned file into the 1st file and begin translation.
*/

class Comparer {
    constructor(){
        this.inputFileName = ''
        this.oldContent = [];
        this.newContent = [];
        this.keysSet = new Set();
        this.differences = [];
    }

    getOldTranslatedFileInput(file){
        this.oldContent = []
        const oldReader = new FileReader();
        oldReader.onload = () => {
            this.oldContent = oldReader.result.split('\n')
        }
        oldReader.readAsText(file);
    }

    getNewUntranslatedFileInput(file){
        this.newContent = []
        const newReader = new FileReader();
        newReader.onload = () => {
            this.inputFileName = file.name;
            this.newContent = newReader.result.split('\n')
        }
        newReader.readAsText(file);
    }

    getOldTranslatedFolderInput(folder){
        for (const file of folder.files) {
            if (file.type === 'text/plain') {
                this.getOldTranslatedFileInput(file);
            }
        }
    }

    getNewUntranslatedFolderInput(folder){
        for (const file of folder.files) {
            if (file.type === 'text/plain') {
                this.getNewUntranslatedFileInput(file);
            }        
        }
    }


    // getFilesInput(oldTranslatedFile, newUntranslatedFile){
    //     const reader1 = new FileReader();
    //     reader1.onload = () => {
    //         this.content1 = reader1.result.split('\n');
    //     };
    //     reader1.readAsText(oldTranslatedFile);
        
    //     const reader2 = new FileReader();
    //     reader2.onload = () => {            
    //         this.content2 = reader2.result.split('\n');
    //     };
    //     reader2.readAsText(newUntranslatedFile);
    // }

    processFileContent() {
        this.keysSet = new Set();
        this.differences = [];

        this.oldContent.forEach(line => {
            const key = line.split('=')[0];
            const trimmedKey = key.trim();
            this.keysSet.add(trimmedKey);
        });

        this.newContent.forEach(line => {
            const key = line.split('=')[0];
            const trimmedKey = key.trim();
            if (!this.keysSet.has(trimmedKey)) {
                this.differences.push(line);
            }
        });
    }

    getDifferences() {
        return this.differences.join('\n');
    }

    clear(){
        this.oldContent = [];
        this.newContent = [];
        this.keysSet = new Set();
        this.differences = [];
    }

    downloadDifferences() {
        const readmeText = `
        --------------------------
        Read Me
        --------------------------
        9yin translator helper; made by Vajra Pokaew, 2023
        
        Please translate these lines and put the following lines into your *Old English Translated file* (**${this.inputFileName}**).
        
        ------------------------------`;

    const differencesText = `${readmeText}\n${this.getDifferences()}`
        .split('\n')
        .map(line => line.trim())
        .filter(line => line !== '')
        .join('\n');

        const filename = `${this.inputFileName.replace('.idres', '_diff.idres')}`;    
        const blob = new Blob([differencesText], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }    
}

const comparer = new Comparer()