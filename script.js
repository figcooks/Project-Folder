document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const statusMessage = document.getElementById('status-message');

    // Trigger file input when drop zone is clicked
    dropZone.addEventListener('click', () => {
        fileInput.click();
    });

    // Handle drag and drop visuals
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        
        if (e.dataTransfer.files.length > 0) {
            fileInput.files = e.dataTransfer.files;
            simulateAnalysis(e.dataTransfer.files[0].name);
        }
    });

    // Handle standard file selection
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            simulateAnalysis(e.target.files[0].name);
        }
    });

    // Function to simulate backend API call
    function simulateAnalysis(fileName) {
        dropZone.style.display = 'none';
        statusMessage.classList.remove('hidden');
        
        // You would replace this setTimeout with your actual fetch/axios call to your MERN backend
        setTimeout(() => {
            statusMessage.innerHTML = `
                <h3 style="color: #4ade80;">Analysis Complete</h3>
                <p>File: <strong>${fileName}</strong></p>
                <p>Status: <span style="color: #4ade80;">Authentic (98.2% Confidence)</span></p>
                <button onclick="location.reload()" class="cta-button" style="margin-top: 1rem; padding: 0.5rem 1rem;">Scan Another</button>
            `;
        }, 3000);
    }
});