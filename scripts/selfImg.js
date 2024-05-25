// const unpack = (data, key) => data.map(row => row[key])
Plotly.d3.csv("csv/dysmorphia.csv", population_data => {
    const time = unpack(population_data, 'time');
    const successful = unpack(population_data, 'successful');
    const feel = unpack(population_data, 'feel');
    const validation = unpack(population_data, 'validation');

    var trace1 = {
        x: time,
        y: successful,
        name: 'Market Size',
        mode: 'lines+markers',
        hovertemplate: '<b>Year: </b>%{x}<br>' + '<b>Population: </b>%{y:.2f%}%<extra></extra>',
    }

    // constructing parent array
    // const parents = criteria.map(criterion => {
    //     // if is one of the uncredible criteria
    //     if (criterion === 'nudity' || criterion === 'sexualisation' || criterion === 'body') {
    //         return 'uncredible';
    //     // the amount of people that are considered qualified
    //     } else if (criterion === 'qualified') {
    //         return 'credible';
    //     // if else return nothing
    //     } else {
    //         return '';
    //     }
    // });

    var data = [trace1];

    // var data = [{
    //     type: "sunburst",
    //     labels: criteria,
    //     parents: parents, 
    //     // convert values to numbers
    //     values: influencers.map(Number),
    //     outsidetextfont: {size: 20, color: "#377eb8"},
    //     leaf: {opacity: 0.4},
    //     marker: {line: {width: 2}},
    // }];
    

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


    const plotDiv = document.getElementById('self-img');

    Plotly.newPlot(plotDiv, data, layout).then(function() {
        Plotly.addFrames(plotDiv, frames);
    });
})