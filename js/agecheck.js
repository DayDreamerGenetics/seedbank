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
                    <p>Please read carefully and select the appropriate option:</p>
                    <div class="age-buttons">
                        <button onclick="window.verifyAge(false)" class="age-no-disguised">
                            <span class="btn-text">I am NOT 21+ years old</span>
                        </button>
                        <button onclick="window.verifyAge(true)" class="age-yes-disguised">
                            <span class="btn-text">I am 21+ years old</span>
                        </button>
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
                background-color: rgba(0,0,0,0.9);
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
                font-size: 1.8rem;
            }
            .age-body p {
                font-size: 1.1rem;
                margin-bottom: 15px;
            }
            .age-buttons {
                margin-top: 25px;
                display: flex;
                justify-content: center;
                gap: 20px;
                flex-direction: column;
            }
            .age-buttons button {
                padding: 15px 20px;
                border: none;
                border-radius: 5px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 1.1rem;
                position: relative;
                overflow: hidden;
            }
            /* Counter-intuitive colors: "NO" button is green (looks like "proceed") */
            .age-no-disguised {
                background-color: #4CAF50; /* GREEN */
                color: white;
                border: 2px solid #2E7D32;
                box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            }
            .age-no-disguised:hover {
                background-color: #2E7D32;
            }
            
            /* "YES" button is red (looks like "stop/cancel") */
            .age-yes-disguised {
                background-color: #F44336; /* RED */
                color: white;
                border: 2px solid #B71C1C;
                box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            }
            .age-yes-disguised:hover {
                background-color: #B71C1C;
            }
            
            /* Additional styling to make text stand out */
            .btn-text {
                text-transform: uppercase;
                letter-spacing: 1px;
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
