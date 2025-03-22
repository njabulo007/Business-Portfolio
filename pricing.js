// Tab functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Modal functionality
const modal = document.getElementById('enquiryModal');
const selectedPackageInput = document.getElementById('selectedPackage');

function openModal(packageName) {
    modal.style.display = 'flex';
    selectedPackageInput.value = packageName;
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Handle form submission
document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const formData = new FormData(this);

    // Replace with your Formspree endpoint
    const formspreeEndpoint = 'https://formspree.io/f/mnnpapne';

    // Submit the form to Formspree
    fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for your enquiry! We will contact you soon.');
            closeModal();
            document.getElementById('enquiryForm').reset();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your enquiry. Please try again.');
    });
});