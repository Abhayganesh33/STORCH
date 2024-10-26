function updateStatus() {
  fetch('/ledStatus')
    .then(response => response.text())
    .then(data => {
      document.getElementById("ledStatus").innerText = data;
    })
    .catch(error => {
      console.error("Error fetching LED status:", error);
      document.getElementById("ledStatus").innerText = "Error fetching status";
    });
}

// Update the LED status every second
setInterval(updateStatus, 1000);
