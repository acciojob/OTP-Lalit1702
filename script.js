//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const codes = document.querySelectorAll('.code');

    codes.forEach((code, idx) => {
        code.addEventListener('input', () => {
            if (code.value.length === 1 && idx < codes.length - 1) {
                codes[idx + 1].focus();  // Move to the next input
            }
        });

        code.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                if (code.value === '') {
                    if (idx > 0) {
                        codes[idx - 1].focus();  // Move to the previous input
                        codes[idx - 1].value = '';  // Clear the previous input
                    }
                }
            }
        });
    });
});

