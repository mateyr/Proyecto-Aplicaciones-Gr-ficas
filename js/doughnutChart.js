import Chart from 'chart.js/auto'

const oilCanvas = document.getElementById("doughnutChart");



var category = {
  labels: ["Cargador Solar", "Panel Solar", "Termotanque"],
  datasets: [
    {
      data: [133.3, 86.2, 52.2],
      backgroundColor: ["#257251", "#253363", "#FFC107"],
    },
  ],
};

const pieChart = new Chart(oilCanvas, {
  type: "doughnut",
  data: category,
});

