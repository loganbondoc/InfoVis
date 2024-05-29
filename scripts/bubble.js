// import Highcharts from 'highcharts-more.js'
const bubbleDiv = document.getElementById('bubble');

document.addEventListener('DOMContentLoaded', function () {
    const url = 'csv/products.csv';

    fetch(url)
        .then(response => response.text())
        .then(csvData => {
            const data = parseCSV(csvData);
            renderChart(data);
        });

    function parseCSV(csv) {
        const lines = csv.split('\n');
        const result = {
            failed: [],
            passed: []
        };

        lines.forEach(line => {
            const [criteria, influencers] = line.split(',');
            if (criteria && influencers) {
                if (['evidence', 'effect', 'calorie'].includes(criteria)) {
                    result.failed.push({
                        name: criteria,
                        value: parseInt(influencers)
                    });
                } else if (criteria === 'relevant') {
                    result.passed.push({
                        name: criteria,
                        value: parseInt(influencers)
                    });
                }
            }
        });

        return result;
    }

    function renderChart(data) {
        Highcharts.chart(bubbleDiv, {
            chart: {
                type: 'packedbubble',
            },
            title: {
                text: 'Packed Bubble Chart'
            },
            series: [{
                name: 'Failed',
                data: data.failed
            }, {
                name: 'Passed',
                data: data.passed
            }],
            plotOptions: {
                packedbubble: {
                    layoutAlgorithm: {
                        splitSeries: true
                    }
                }
            }
        });
    }
});