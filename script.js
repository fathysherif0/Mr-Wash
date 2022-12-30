const submitButton = document.getElementById('submit-button');
const messageDiv = document.getElementById('message');

submitButton.addEventListener('click', function() {
  // Generate random reservation number
  const reservationNumber = Math.floor(Math.random() * 1000000);

  // Display message and reservation number
 messageDiv.innerHTML = `Reservation successful!
  Thank you for using MRWASH
  Market One of our employees will contact you and confirm the reservation and payment,   <span style="color: #ff0000;">${reservationNumber}</span>  is a password  to enter MR WASH will be effective when confirming the payment amount .`;
  // Get form data
  const formData = new FormData(document.getElementById('booking-form'));

  // Convert form data to array of values
  const data = [];
  formData.forEach((value, key) => {
    data.push(value);
  });

  // Append form data to Google Sheet
  gapi.client.sheets.spreadsheets.values.append({
    spreadsheetId: 'project-189890741136',
    range: 'Sheet1',
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      values: [data]
    }
  }).then((response) => {
    console.log(response);
  });
});
