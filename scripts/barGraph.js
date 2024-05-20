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
        hovertemplate: '<b>Year: </b>%{x}<br>' + '<b>Population: </b>%{y:.2f%}%<extra></extra>',
    }

    var data = [trace1];
    // const china = unpack(population_data, 'China')
    // const uk = unpack(population_data, 'United Kingdom')
    // const usa = unpack(population_data, 'United States')
    // const germany = unpack(population_data, 'Germany')
    // const year = unpack(population_data, 'Year')
    // var global_data = [
    //     {
    //         x: ['giraffes', 'orangutans', 'monkeys'],
    //         y: [20, 14, 23],
    //         type: 'bar'
    //     }
    // ]
    // var trace1 = {
    //     x: year,
    //     y: aus,
    //     name: 'Australia',
    //     mode: 'lines+markers',
        // hovertemplate: '<b>Country: </b>Australia<br>' + '<b>Year: </b>%{x}<br>' +
        // '<b>Population: </b>%{y:.2f%}%<extra></extra>',
    // }
    
    // var trace2 = {
    //     x: year,
    //     y: china,
    //     name: 'China',
    //     mode: 'lines+markers',
    //     hovertemplate: '<b>Country: </b>China<br>' + '<b>Year: </b>%{x}<br>' +
    //     '<b>Population: </b>%{y:.2f%}%<extra></extra>',
    // }
    
    // var trace3 = {
    //     x: year,
    //     y: uk,
    //     name: 'UK',
    //     mode: 'lines+markers',
    //     hovertemplate: '<b>Country: </b>UK<br>' + '<b>Year: </b>%{x}<br>' +
    //     '<b>Population: </b>%{y:.2f%}%<extra></extra>',
    // }
    
    // var trace4 = {
    //     x: year,
    //     y: usa,
    //     name: 'USA',
    //     mode: 'lines+markers',
    //     hovertemplate: '<b>Country: </b>USA<br>' + '<b>Year: </b>%{x}<br>' +
    //     '<b>Population: </b>%{y:.2f%}%<extra></extra>',
    // }
    
    // var trace5 = {
    //     x: year,
    //     y: germany,
    //     name: 'Germany',
    //     mode: 'lines+markers',
    //     hovertemplate: '<b>Country: </b>Germany<br>' + '<b>Year: </b>%{x}<br>' +
    //     '<b>Population: </b>%{y:.2f%}%<extra></extra>',
    // }
    
    // var data = [trace1, trace2, trace3, trace4, trace5]; 
    // var data = [trace1]; 

    // var updatemenus = [{
    //     type: 'buttons',
    //     showactive: false,
    //     x: 0,
    //     y: 0,
    //     xanchor: 'right',
    //     yanchor: 'top',
    //     direction: 'left',
    //     pad: {t: 60, r: 20},
    //     buttons: [
    //     {
    //         label: 'Play',
    //         method: 'animate',
    //         args: [null, {
    //             frame: {duration: 1000},
    //             transition: {duration: 500},
    //             fromcurrent: true,
    //             mode: 'next'
    //         }]
    //     },
    //     {
    //         label: 'Pause',
    //         method: 'animate',
    //         args: [[null], {
    //         frame: {duration: 0},
    //         mode: 'immediate',
    //         transition: {duration: 0}
    //         }]
    //     },
        // {
        // args: ['mode', 'lines+markers'],
        // label: 'lines & markers',
        // method: 'restyle'
        // },
        // {
        // args: ['mode', 'lines'],
        // label: 'lines',
        // method: 'restyle'
        // },

        // {
        //     args: ['mode', 'markers'],
        //     label: 'markers',
        //     method: 'restyle'
        // }
            // ],
            // button approach
                // direction: 'left',
                // pad: {'r': 200, 't': 10},
                // showactive: true,
                // type: 'buttons',
                // x: 0.35,
                // xanchor: 'middle',
                // y: 2,
                // yanchor: 'top'
            // dropdown
            // direction: 'down',
            // pad: {'r': 200, 't': 10},
            // showactive: true,
            // type: 'dropdown',
            // x: 0.35,
            // xanchor: 'middle',
            // y: 2,
            // yanchor: 'top'
// }]

// var frames = [{
//     name: 'lines',
//     data: [{mode: 'lines'}]
//     }, {
//     name: 'markers',
//     data: [{mode: 'markers'}]
//     }, {
//     name: 'lines+markers',
//     data: [{mode: 'lines+markers'}]
// }];

var layout = {
    // annotations: [
    //     {

    //     // position end point
    //     x: 1970,
    //     y: 52.63183,
    //     text: 'Annotation Text',
    //     showarrow: true,
    //     arrowhead: 7,

    //     // position annotation
    //     ax: 0,
    //     ay: -40
    //     }
    // ],
    hovermode: 'closest',
    hoverlabel: {
        bgcolor: "#FFF",
        bordercolor: "#003166",
        font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
        }
    },
//     updatemenus: updatemenus,
//     sliders: [{
//         pad: {t: 30},
//         currentvalue: {
//             xanchor: 'right',
//             prefix: 'Mode: ',
//             font: {
//                 color: '#888',
//                 size: 20
//             }
//         },
//         steps: [{
//             label: 'Lines',
//             method: 'animate',
//             args: [['lines'], {
//             mode: 'immediate',
//             transition: {duration: 0}
//         }]
//     }],
// }],
}


    const plotDiv = document.getElementById('interactivePlotly');

    Plotly.newPlot(plotDiv, data, layout).then(function() {
        Plotly.addFrames(plotDiv, frames);
    });
})