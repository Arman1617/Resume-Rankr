document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form');
    const fileInput = document.getElementById('resume_files');
    const textarea = document.getElementById('job_description');

    // Validate form input
    form.addEventListener('submit', (event) => {
        if (!textarea.value.trim()) {
            alert("Please enter a job description.");
            event.preventDefault();
        }

        if (fileInput.files.length === 0) {
            alert("Please upload at least one resume.");
            event.preventDefault();
        }
    });

    // File validation for .docx
    fileInput.addEventListener('change', () => {
        const allowedExtensions = ['docx'];
        for (let i = 0; i < fileInput.files.length; i++) {
            const fileName = fileInput.files[i].name;
            const fileExtension = fileName.split('.').pop().toLowerCase();

            if (!allowedExtensions.includes(fileExtension)) {
                alert(`Invalid file type: ${fileName}. Please upload DOCX files only.`);
                fileInput.value = ''; // Clear the input
                break;
            }
        }
    });
});
