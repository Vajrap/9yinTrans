document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('oldFile').addEventListener('change', (event) => {
        const files = event.target.files;
        multiComparer.getOldTranslatedFilesInput(files);
    });
    document.getElementById('newFile').addEventListener('change', (event) => {
        const files = event.target.files;
        multiComparer.getNewUntranslatedFilesInput(files);
    });
    document.getElementById('compareButton').addEventListener('click', () => {
        multiComparer.processFilesContent();
        document.getElementById('downloadButton').disabled = false;
        // Display differences in the showDiffLines div
        const showDiffLines = document.querySelector('.showDiffLines');
        showDiffLines.textContent = multiComparer.getDifferences();
    });
    document.getElementById('downloadButton').addEventListener('click', () => {
        multiComparer.downloadDifferences('differences.idres');
    });
});