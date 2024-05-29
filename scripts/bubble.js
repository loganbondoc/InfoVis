// import Highcharts from 'highcharts-more.js'
const bubbleDiv = document.getElementById('bubble');

    // Sample CSV data
    const csvData = `
criteria,influencers
failed,8
passed,1
evidence,5
effect,5
calorie,9
relevant,1
    `;

    // Function to parse CSV data
    function parseCSV(csvData) {
        const parsedData = Papa.parse(csvData, { header: true }).data;

        const seriesData = {
            failed: [],
            passed: []
        };

        parsedData.forEach(row => {
            const influencers = parseInt(row.influencers);
            if (['failed', 'evidence', 'effect', 'calorie'].includes(row.criteria)) {
                seriesData.failed.push({ value: influencers, name: row.criteria });
            } else if (['passed', 'relevant'].includes(row.criteria)) {
                seriesData.passed.push({ value: influencers, name: row.criteria });
            }
        });

        return seriesData;
    }

    const parsedData = parseCSV(csvData);

    // Create Highcharts chart
    Highcharts.chart(bubbleDiv, {
        chart: {
            type: 'packedbubble'
        },
        title: {
            text: 'Packed Bubble Chart'
        },
        series: [{
            name: 'Failed',
            data: parsedData.failed
        }, {
            name: 'Passed',
            data: parsedData.passed
        }]
    });

Highcharts.chart(bubbleDiv, {
    chart: {
        type: 'packedbubble'
    },
    series: [{
        data: [50, 12, 33, 45, 60] // sizes of the bubble
    }]
});