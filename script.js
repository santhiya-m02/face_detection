// Function to fetch attendance data from the CSV file
function fetchAttendanceData() {
    // Replace with the correct path to the CSV file
    const csvFilePath = "attendance/attendance_" + getCurrentDate() + ".csv";

    fetch(csvFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => processData(data))
        .catch(error => console.error('Error fetching data:', error));
}

// Function to process the CSV data and populate the table
function processData(data) {
    const table = document.getElementById("attendance-table");

    // Clear existing rows except for the header row
    const rowsToRemove = table.querySelectorAll("tr:not(:first-child)");
    rowsToRemove.forEach(row => row.remove());

    const rows = data.split("\n");
    rows.forEach(row => {
        const columns = row.split(",");
        if (columns.length === 4) {
            const newRow = document.createElement("tr");
            columns.forEach(column => {
                const cell = document.createElement("td");
                cell.textContent = column.trim();
                newRow.appendChild(cell);
            });
            table.appendChild(newRow);
        }
    });
}

// Function to get the current date in the format "dd-mm-yyyy"
function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
}

// Call the fetchAttendanceData function after the DOM has loaded
document.addEventListener("DOMContentLoaded", () => {
    fetchAttendanceData();
    // Optionally, you can add a timer to refresh the data periodically
    // setInterval(fetchAttendanceData, 60000); // Refresh every minute
});
