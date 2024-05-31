// Can be Attributed to HighCharts Library
// https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/series-item/symbols
const pictorialDiv = document.getElementById('pictorial');

document.addEventListener('DOMContentLoaded', function () {
    const url = 'csv/media_dysmorphia.csv';


    // Reading CSV using fetch can be attributed to:
    // https://stackoverflow.com/questions/64982528/is-is-possible-to-read-a-csv-file-with-javascript-fetch-api
    fetch(url)
        .then(response => response.text())
        .then(csvData => {
            const { menData, womenData } = parseCSV(csvData);
            renderChart({ menData, womenData });
        });
    
    // Read CSV data
    function parseCSV(csv) {
        const lines = csv.split('\n');
        const menData = [];
        const womenData = [];

        lines.slice(1).forEach(line => { // Skip the header line
            const [criteria, men, women] = line.split(',');
            
            // Assign colours and images based on criteria
            if (men && women) {
                let menColor, womenColor, menSymbol, womenSymbol;
                switch (criteria.trim()) {
                    case 'Social Media':
                        menColor = '#1338BE';
                        womenColor = '#A50121';
                        menSymbol = 'url(images/man_darkblue.svg)';
                        womenSymbol = 'url(images/woman_darkred.svg)';
                        break;
                    case 'TV or Movies':
                        menColor = '#0492C2';
                        womenColor = '#893F45';
                        menSymbol = 'url(images/man_lightblue.svg)';
                        womenSymbol = 'url(images/woman_red.svg)';
                        break;
                    default:
                        menColor = 'gray';
                        womenColor = 'gray';
                        menSymbol = 'url(data:image/svg+xml;base64,PHN2ZyBpZD0ibWFsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTkyIDUxMiI+PHBhdGggZD0iTTk2IDBjMzUuMzQ2IDAgNjQgMjguNjU0IDY0IDY0cy0yOC42NTQgNjQtNjQgNjQtNjQtMjguNjU0LTY0LTY0UzYwLjY1NCAwIDk2IDBtNDggMTQ0aC0xMS4zNmMtMjIuNzExIDEwLjQ0My00OS41OSAxMC44OTQtNzMuMjggMEg0OGMtMjYuNTEgMC00OCAyMS40OS00OCA0OHYxMzZjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0aDE2djEzNmMwIDEzLjI1NSAxMC43NDUgMjQgMjQgMjRoNjRjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0VjM1MmgxNmMxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjRWMTkyYzAtMjYuNTEtMjEuNDktNDgtNDgtNDh6IiBmaWxsPSIjMkQ1RkYzIi8+PC9zdmc+)';
                        womenSymbol = 'url(data:image/svg+xml;base64,PHN2ZyBpZD0iZmVtYWxlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48cGF0aCBkPSJNMTI4IDBjMzUuMzQ2IDAgNjQgMjguNjU0IDY0IDY0cy0yOC42NTQgNjQtNjQgNjRjLTM1LjM0NiAwLTY0LTI4LjY1NC02NC02NFM5Mi42NTQgMCAxMjggMG0xMTkuMjgzIDM1NC4xNzlsLTQ4LTE5MkEyNCAyNCAwIDAgMCAxNzYgMTQ0aC0xMS4zNmMtMjIuNzExIDEwLjQ0My00OS41OSAxMC44OTQtNzMuMjggMEg4MGEyNCAyNCAwIDAgMC0yMy4yODMgMTguMTc5bC00OCAxOTJDNC45MzUgMzY5LjMwNSAxNi4zODMgMzg0IDMyIDM4NGg1NnYxMDRjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0aDMyYzEzLjI1NSAwIDI0LTEwLjc0NSAyNC0yNFYzODRoNTZjMTUuNTkxIDAgMjcuMDcxLTE0LjY3MSAyMy4yODMtMjkuODIxeiIgZmlsbD0iI0YyM0EyRiIvPjwvc3ZnPg==)';
                }

                // Formatting TExt
                menData.push({
                    name: `Male dysmorphia from ${criteria.trim()}`,
                    y: parseFloat(men),
                    marker: { symbol: menSymbol },
                    color: menColor
                });

                womenData.push({
                    name: `Female dysmorphia through ${criteria.trim()}`,
                    y: parseFloat(women),
                    marker: { symbol: womenSymbol },
                    color: womenColor
                });
            }
        });

        return { menData, womenData };
    }

    function renderChart(data) {
        Highcharts.chart(pictorialDiv, {
            chart: {
                type: 'item',
                height: '80%'
            },

            title: {
                text: 'Distribution of Body Dysmorphia through media'
            },

            subtitle: {
                text: 'Represented as a % of the US population'
            },

            legend: {
                labelFormat: '{name} <span style="opacity: 0.4">{y}</span>'
            },

            series: [{
                name: 'Percent of people impacted',
                layout: 'horizontal',
                data: data.menData.concat(data.womenData)
            }]
        });
    }
});

