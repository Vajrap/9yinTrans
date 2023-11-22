/*
- This function is for comparing between two files, 
- The translated one(1st) you've used and 
- The new one(2nd) that came with new patch:
- After recieved both files, the function return one file 
- The returned file contain all the lines that "Doesn't appeared in the translated one (1st)""
- The user then push all lines in the returned file into the 1st file and begin translation.
*/
z

class Comparer {
    constructor(){
        this.inputFileName = ''
        this.content1 = [];
        this.content2 = [];
        this.keysSet = new Set();
        this.differences = [];
    }

    getFilesInput(oldTranslatedFile, newUntranslatedFile){
        this.content1 = oldTranslatedFile.split('\n');
        this.content2 = newUntranslatedFile.split('\n');
    }

    processFileContent() {
        this.keysSet = new Set();
        this.differences = [];

        this.content1.forEach(line => {
            const key = line.split('=')[0];
            const trimmedKey = key.trim();
            this.keysSet.add(trimmedKey);
        });

        this.content2.forEach(line => {
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
        this.content1 = [];
        this.content2 = [];
        this.keysSet = new Set();
        this.differences = [];
    }

    downloadDifferences() {
        const readmeText = `
        --------------------------
        Read Me
        --------------------------
        9yin translator helper; made by Vajra Pokaew, 2023
        
        Please put the following lines into your *Old English Translated ${this.inputFileName}.idres file* and start translation
        
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