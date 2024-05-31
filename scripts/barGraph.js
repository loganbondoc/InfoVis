const unpack = (data, key) => data.map(row => row[key])
Plotly.d3.csv("csv/global_market.csv", population_data => {
    const year = unpack(population_data, 'Year');
    const market = unpack(population_data, 'Market');
    console.log(year);
    console.log(market);

    var trace1 = {
        x: year,
        y: market,
        name: 'Market Size',
        mode: 'lines+markers',
        hovertemplate: '<b>Year: </b>%{x}<br>' + '<b>Market Size: </b>%{y} billion <extra></extra>',
        line: {
            color: 'rgb(38,50,56)',
            width: 3
          }
    }

    var data = [trace1];

var layout = {
    title: {
        text: 'Market Growth of Influencers',
        font: {
            family: '"Heebo", sans-serif',
            size: 16,
            color: '#7f7f7f'
        }
    },
    title: {
        text: 'Market Growth of Influencers',
        font: {
            family: '"Heebo", sans-serif',
            size: 16,
            color: '#7f7f7f'
        }
    },
    xaxis: {
        title: {
            text: 'Year',
            font: {
                family: '"Heebo", sans-serif',
                size: 11,
                color: '#7f7f7f'
            }
        },
    },
    yaxis: {
        title: {
            text: 'Market Size (billion USD)',
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
}


    const plotDiv = document.getElementById('interactivePlotly');

    Plotly.newPlot(plotDiv, data, layout).then(function() {
        Plotly.addFrames(plotDiv, frames);
    });
})