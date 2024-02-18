class SkillGroupingViewBinder {
    constructor(){
        this.model = new SkillGrouping()
        this.fileInput = document.getElementById('fileInput')
        this.processFileButton = document.getElementById('processFile');
        this.populateGroupLinesButton = document.getElementById('populateGroupLines');
        this.downloadFileButton = document.getElementById('downloadFile');
        this.bindButtons()
    }
    bindButtons(){
        this.processFileButton.addEventListener('click', () => {
            this.processFile()
        })
        this.populateGroupLinesButton.addEventListener('click', () => {
            this.populateGroupLines()
        })
        this.downloadFileButton.addEventListener('click', () => {
            this.downloadFile()
        })
    }

    processFile() {
        const file = this.fileInput.files[0]
        this.model.getAllLinesFromInputFile(file)
    }

    populateGroupLines() {
        this.model.populateGroupLines()
    }

    downloadFile() {
        this.model.generateFileOutput()
    }
}

const viewModel = new SkillGroupingViewBinder()