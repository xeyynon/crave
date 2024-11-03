document.addEventListener('DOMContentLoaded', () => {
    const genderSelect = document.getElementById('gender');
    const hostelBlockSelect = document.getElementById('hostel-block');

    // Event listener for gender selection
    genderSelect.addEventListener('change', function() {
        const selectedGender = this.value;
        hostelBlockSelect.innerHTML = ''; // Clear previous options

        // Populate hostel blocks based on selected gender
        if (selectedGender === 'male') {
            const maleHostels = ['MH2', 'MH3', 'MH4', 'MH5', 'CB'];
            maleHostels.forEach(hostel => {
                const option = document.createElement('option');
                option.value = hostel;
                option.textContent = hostel;
                hostelBlockSelect.appendChild(option);
            });
        } else if (selectedGender === 'female') {
            const femaleHostels = ['LH1', 'LH2', 'LH3', 'LH4'];
            femaleHostels.forEach(hostel => {
                const option = document.createElement('option');
                option.value = hostel;
                option.textContent = hostel;
                hostelBlockSelect.appendChild(option);
            });
        }
    });

    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Gather the input values
        const fullName = document.getElementById('full-name').value;
        const collegeEmail = document.getElementById('email').value;
        const rollNo = document.getElementById("roll-no").value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Basic validation
        if (password !== confirmPassword) {
            document.getElementById('signup-message').textContent = 'Passwords do not match!';
            return;
        }

        // Here, you can handle the form submission, such as sending data to a server
        document.getElementById('signup-message').textContent = `Welcome, ${fullName}! You have successfully signed up.`;

        // Optionally, reset the form
        document.getElementById('signup-form').reset();
    });
});
