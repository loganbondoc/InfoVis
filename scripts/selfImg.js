Plotly.d3.csv("csv/dysmorphia.csv", population_data => {

    // Unpacking and categorising data
    const combinedData = population_data.map(row => ({
        time: +row['time'],
        successful: +row['successful'],
        feel: +row['feel'],
        validation: +row['validation']
    }));

    // Sort the combined data by time
    combinedData.sort((a, b) => a.time - b.time);

    // Unpack the sorted data
    const time = combinedData.map(row => row.time);
    const successful = combinedData.map(row => row.successful);
    const feel = combinedData.map(row => row.feel);
    const validation = combinedData.map(row => row.validation);

    var trace1 = {
        x: time,
        y: successful,
        name: 'How often do you compare yourself to other successful people through the use of social media?',
        mode: 'lines+markers',
        hovertemplate: '<b>Time: </b>%{x}hrs<br>' + '<b>Average Score for comparing to successful people: </b>%{y:.2f%}%<extra></extra>',
        transforms: [{
            type: 'aggregate',
            groups: time,
            aggregations: [
              {target: 'y', func: 'avg', enabled: true},
            ]
        }],
    }

    var trace2 = {
        x: time,
        y: feel,
        name: 'How do you feel about these comparisons?',
        mode: 'lines+markers',
        hovertemplate: '<b>Time: </b>%{x}hrs<br>' + '<b>Average Score for how users feel: </b>%{y:.2f}<extra></extra>',
        transforms: [{
            type: 'aggregate',
            groups: time,
            aggregations: [
              {target: 'y', func: 'avg', enabled: true},
            ]
        }],
    };

    var trace3 = {
        x: time,
        y: validation,
        name: 'How often do you look to seek validation from features of social media?',
        mode: 'lines+markers',
        hovertemplate: '<b>Time: </b>%{x}hrs<br>' + '<b>Average Score for seeking validation: </b>%{y:.2f}<extra></extra>',
        transforms: [{
            type: 'aggregate',
            groups: time,
            aggregations: [
              {target: 'y', func: 'avg', enabled: true},
            ]
        }],
    };

    var data = [trace1, trace2, trace3];

var layout = {
    showlegend: true,
	legend: {x: 0, y: 1.2},
    title: {
        text: 'Correlation between time spent on social media and self-image',
        font: {
            family: '"Heebo", sans-serif',
            size: 16,
            color: '#7f7f7f'
        }
    },
    xaxis: {
        title: {
            text: 'Time on social media (hrs)',
            font: {
                family: '"Heebo", sans-serif',
                size: 11,
                color: '#7f7f7f'
            }
        },
    },
    yaxis: {
        title: {
            text: 'Level of Agreement (1 - 5)',
            font: {
                family: '"Heebo", sans-serif',
                size: 11,
                color: '#7f7f7f'
            }
        },
    },
    hovermode: 'closest',
    hoverlabel: {
        bgcolor: "#FFF",
        bordercolor: "#003166",
        font: {
        family: '"Heebo", sans-serif',
        size: 16,
        color: '#7f7f7f'
        }
    },
    margin:{
        t: 10
    }

}


    const plotDiv = document.getElementById('self-img');

    Plotly.newPlot(plotDiv, data, layout).then(function() {
        Plotly.addFrames(plotDiv, frames);
    });
})