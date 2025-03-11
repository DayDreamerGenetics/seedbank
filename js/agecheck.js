// Age verification functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if already verified
    if (localStorage.getItem('ageVerified') === 'true') {
        return; // Already verified, don't show modal
    }
    
    // Create modal if it doesn't exist
    if (!document.getElementById('ageModal')) {
        const modal = document.createElement('div');
        modal.id = 'ageModal';
        modal.className = 'age-verification-modal';
        
        modal.innerHTML = `
            <div class="age-modal-content">
                <div class="age-header">
                    <h2>Age Verification</h2>
                </div>
                <div class="age-body">
                    <p>You must be 21 years or older to enter this site.</p>
                    <p>Are you over 21 years of age?</p>
                    <div class="age-buttons">
                        <button onclick="window.verifyAge(true)" class="age-yes">Yes, I am 21+</button>
                        <button onclick="window.verifyAge(false)" class="age-no">No, I am not</button>
                    </div>
                </div>
            </div>
        `;
        
        // Add modal styles
        const style = document.createElement('style');
        style.textContent = `
            .age-verification-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.8);
                z-index: 9999;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .age-modal-content {
                background-color: #1e2b20;
                border: 2px solid #3a7d44;
                border-radius: 8px;
                max-width: 500px;
                width: 90%;
                padding: 25px;
                text-align: center;
                color: #f2f7f3;
            }
            .age-header h2 {
                margin-top: 0;
                color: #f9c74f;
            }
            .age-buttons {
                margin-top: 20px;
                display: flex;
                justify-content: center;
                gap: 15px;
            }
            .age-buttons button {
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            .age-yes {
                background-color: #3a7d44;
                color: white;
            }
            .age-yes:hover {
                background-color: #6fb97a;
            }
            .age-no {
                background-color: #f2f7f3;
                color: #1e2b20;
            }
            .age-no:hover {
                background-color: #cccccc;
            }
        `;
        
        // Add the modal and styles to the document
        document.head.appendChild(style);
        document.body.appendChild(modal);
    }
});

// Age verification function (needs to be global)
window.verifyAge = function(isOver21) {
    if (isOver21) {
        localStorage.setItem('ageVerified', 'true');
        const modal = document.getElementById('ageModal');
        if (modal) {
            modal.remove();
        }
    } else {
        window.location.href = 'https://www.google.com';
    }
};
