// Wait for the DOM to be fully loaded before initializing the charts
document.addEventListener("DOMContentLoaded", function () {

  // Pie chart initialization
  var pieCtx = document.getElementById('myPieChart').getContext('2d');
  var myPieChart = new Chart(pieCtx, {
      type: 'pie',
      data: {
          labels: ['Red', 'Blue', 'Yellow'],
          datasets: [{
              data: [40, 30, 30], // Initial data
              backgroundColor: ['#FF5733', '#33B5FF', '#FFEB33'],
              hoverBackgroundColor: ['#FF4C00', '#0099CC', '#FFCC00']
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
              },
              tooltip: {
                  enabled: true
              }
          }
      }
  });

  // Bar chart initialization
  var barCtx = document.getElementById('myBarChart').getContext('2d');
  var myBarChart = new Chart(barCtx, {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May'],
          datasets: [{
              label: 'Sales (in USD)',
              data: [50, 100, 75, 125, 150], // Initial data
              backgroundColor: '#33B5FF',
              borderColor: '#0099CC',
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          },
          plugins: {
              legend: {
                  position: 'top'
              },
              tooltip: {
                  enabled: true
              }
          }
      }
  });

  // Function to update the pie chart with new data
  function updatePieChart() {
      var pieData1 = document.getElementById('pieData1').value;
      var pieData2 = document.getElementById('pieData2').value;
      var pieData3 = document.getElementById('pieData3').value;
      var pieColor1 = document.getElementById('pieColor1').value;
      var pieColor2 = document.getElementById('pieColor2').value;
      var pieColor3 = document.getElementById('pieColor3').value;

      myPieChart.data.datasets[0].data = [pieData1, pieData2, pieData3];
      myPieChart.data.datasets[0].backgroundColor = [pieColor1, pieColor2, pieColor3];
      myPieChart.update();
  }

  // Function to update the bar chart with new data
  function updateBarChart() {
      var barData1 = document.getElementById('barData1').value;
      var barData2 = document.getElementById('barData2').value;
      var barData3 = document.getElementById('barData3').value;
      var barData4 = document.getElementById('barData4').value;
      var barData5 = document.getElementById('barData5').value;
      var barColor = document.getElementById('barColor').value;

      myBarChart.data.datasets[0].data = [barData1, barData2, barData3, barData4, barData5];
      myBarChart.data.datasets[0].backgroundColor = barColor;
      myBarChart.update();
  }

  // Add event listeners for inputs
  document.querySelectorAll('#pieData1, #pieData2, #pieData3, #pieColor1, #pieColor2, #pieColor3').forEach(input => {
      input.addEventListener('input', updatePieChart);
  });

  document.querySelectorAll('#barData1, #barData2, #barData3, #barData4, #barData5, #barColor').forEach(input => {
      input.addEventListener('input', updateBarChart);
  });

});

