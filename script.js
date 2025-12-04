// Main script file (can be used for shared functionality)

// Initialize tooltips for icons
document.addEventListener('DOMContentLoaded', () => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
// Function to fetch and display market data (placeholder)
async function fetchMarketData() {
    try {
        // In a real implementation, this would fetch from a financial API
        console.log("Fetching market data...");
    } catch (error) {
        console.error("Error fetching market data:", error);
    }
}

// Terminal command handler
document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('commandInput');
    const links = {
        'substack': document.querySelector('a[href="#"]:nth-child(1)'),
        'dashboard': document.querySelector('a[href="#"]:nth-child(2)'),
        'demo': document.querySelector('a[href="#"]:nth-child(3)'),
        'real estate': document.querySelector('a[href="#"]:nth-child(4)'),
'contact': document.querySelector('a[href="#"]:nth-child(5)'),
'help': null
    };

    commandInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = commandInput.value.trim().toLowerCase();
            commandInput.value = '';
            if (command === 'help') {
                alert("Available commands:\n- substack (Research Notes)\n- dashboard (Proprietary Model)\n- models (Trading Signals)\n- demo (Dashboard Demonstration)\n- contact (Institutional Inquiries)\n- help (This menu)");
} else if (links[command]) {
                links[command].click();
            } else if (command) {
                alert(`Command not found: ${command}\nType 'help' for available options`);
            }
        }
    });

    // Focus the input on page load
    commandInput.focus();
});
