
document.addEventListener("DOMContentLoaded", function () {
    // Simulated real-time data (you can replace these values with actual data)
    let carbonEmissionValue = 50; // in tons
    let resourceUsageValue = 200; // units

    // Update the carbon emission and resource usage values on the page
    function updateMonitoringInfo() {
        document.getElementById("carbon-emission-value").textContent = carbonEmissionValue;
        document.getElementById("resource-usage-value").textContent = resourceUsageValue;
    }

    // Simulate updating data every 5 seconds (5000 milliseconds)
    setInterval(function () {
        // Generate random data (you can replace this with your actual data retrieval logic)
        carbonEmissionValue = Math.floor(Math.random() * 100); // Random number between 0 and 100
        resourceUsageValue = Math.floor(Math.random() * 500); // Random number between 0 and 500

        // Update the monitoring information
        updateMonitoringInfo();
    }, 1000); // Update every 5 seconds (5000 milliseconds)
});
