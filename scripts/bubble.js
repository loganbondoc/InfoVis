// import Highcharts from 'highcharts-more.js'
const bubbleDiv = document.getElementById('bubble');

Highcharts.chart(bubbleDiv, {
    chart: {
        type: 'packedbubble'
    },
    series: [{
        data: [50, 12, 33, 45, 60] // sizes of the bubble
    }]
});