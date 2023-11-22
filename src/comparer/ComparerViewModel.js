document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('oldFile').addEventListener('change', (event) => {
        const file = event.target.files[0];
        comparer.getOldTranslatedFileInput(file);
 
    });

    document.getElementById('newFile').addEventListener('change', (event) => {
        const file = event.target.files[0];
        comparer.getNewUntranslatedFileInput(file);
    });

    document.getElementById('compareButton').addEventListener('click', () => {
        comparer.processFileContent();
        document.getElementById('downloadButton').disabled = false;

        // Display differences in the showDiffLines div
        const showDiffLines = document.querySelector('.showDiffLines');
        showDiffLines.textContent = comparer.getDifferences();
    });

    document.getElementById('downloadButton').addEventListener('click', () => {
        comparer.downloadDifferences('differences.idres');
    });
});
