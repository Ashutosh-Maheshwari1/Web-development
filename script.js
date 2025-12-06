// Initialize parking lot data
let parkingLot = {
    totalSpots: 100,
    availableSpots: 100,
    parkedVehicles: []
};

// Update parking lot info display
function updateParkingLotInfo() {
    document.getElementById("available-spots").innerText = `Available Spots: ${parkingLot.availableSpots}`;
    document.getElementById("total-spots").innerText = `Total Spots: ${parkingLot.totalSpots}`;
}

// Handle park vehicle button click
document.getElementById("park-vehicle-btn").addEventListener("click", () => {
    // Get vehicle type and license plate from form
    let vehicleType = document.getElementById("vehicle-type").value.trim();
    let licensePlate = document.getElementById("license-plate").value.trim();

    // Validate input fields
    if (!vehicleType || !licensePlate) {
        alert("Please enter both vehicle type and license plate.");
        return;
    }

    // Check if parking lot is full
    if (parkingLot.availableSpots === 0) {
        alert("Parking lot is full!");
        return;
    }

    // Check for duplicate license plate
    if (parkingLot.parkedVehicles.some(vehicle => vehicle.licensePlate === licensePlate)) {
        alert("This vehicle is already parked!");
        return;
    }

    // Park vehicle and update parking lot data
    parkingLot.parkedVehicles.push({ vehicleType, licensePlate });
    parkingLot.availableSpots--;

    // Update parking lot info display
    updateParkingLotInfo();

    // Clear form fields
    document.getElementById("vehicle-type").value = "";
    document.getElementById("license-plate").value = "";
});

// Initialize display
updateParkingLotInfo();
