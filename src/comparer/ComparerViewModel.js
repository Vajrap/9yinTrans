document.addEventListener('DOMContentLoaded', () => {
    const comparer = new Comparer();

    document.getElementById('oldFile').addEventListener('change', (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            comparer.getFilesInput(reader.result, comparer.content2.join('\n'));
        };
        reader.readAsText(file);
    });

    document.getElementById('newFile').addEventListener('change', (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            comparer.getFilesInput(comparer.content1.join('\n'), reader.result);

            comparer.inputFileName = file.name;
        };
        reader.readAsText(file);
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
