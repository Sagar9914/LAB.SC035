document.addEventListener('DOMContentLoaded', () => {
    const userDetails = {
        name: 'Name',
        mobileNumber: 'phonenumber',
        brand: 'Brand',
        duration: 'days',
    };

    const form = document.getElementById('returnForm');
    const submitBtn = document.getElementById('submitBtn');
    const returnRecords = document.getElementById('returnRecords');

    // Display user details
    document.getElementById('userDetails').innerHTML = `
        Name: ${userDetails.name}<br>
        Mobile Number: ${userDetails.mobileNumber}<br>
        Brand: ${userDetails.brand}<br>
        Duration: ${userDetails.duration}
    `;

    // Initialize return records
    let returnRecordsArray = [];

    // Function to add a return record
    const addReturnRecord = (record) => {
        returnRecordsArray.push(record);
        displayReturnRecords();
    };

    // Function to display return records
    const displayReturnRecords = () => {
        let recordsHTML = '';
        returnRecordsArray.forEach((record, index2) => {
            recordsHTML += `
                <p>${index2 + 1}. Name: ${record.name}<br>
                   Mobile Number: ${record.mobileNumber}<br>
                   Brand: ${record.brand}<br>
                   Duration: ${record.duration} days</p>
            `;
        });
        returnRecords.innerHTML = recordsHTML;
    };

    // Form submission handling
    submitBtn.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const mobileNumber = document.getElementById('mobileNumber').value;
        const brand = document.getElementById('brand').value;
        const duration = document.getElementById('duration').value;

        const newRecord = {
            name,
            mobileNumber,
            brand,
            duration: parseInt(duration, 10),
        };

        addReturnRecord(newRecord);

        // Reset the form
        form.reset();
    });
});