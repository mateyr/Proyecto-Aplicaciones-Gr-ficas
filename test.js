import Chart from '/chart.js/auto/'

(async function() {
	const data = [
	  { mes: 'Enero', count: 10 },
	  { mes: 'Febrero', count: 20 },
	  { mes: 'Marzo', count: 15 },
	  { mes: 'Abril', count: 25 },
	  { mes: 'Mayo', count: 22 },
	  { mes: 'Junio', count: 30 },
	];
  
	new Chart(
	  document.getElementById('acquisitions'),
	  {
		type: 'bar',
		data: {
		  labels: data.map(row => row.mes),
		  datasets: [
			{
			  label: 'Ventas por Mes',
			  data: data.map(row => row.count)
			}
		  ]
		}
	  }
	);
  })();