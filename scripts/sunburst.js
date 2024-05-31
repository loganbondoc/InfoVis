Plotly.d3.csv("csv/credibility.csv", population_data => {
    const criteria = unpack(population_data, 'criteria');
    const influencers = unpack(population_data, 'influencers');
    
    // Mapping criteria to labels
    const criteriaLabels = {
        'nudity': 'Nudity',
        'sexualisation': 'Sexualisation',
        'body': 'Body Type',
        'qualified': 'Qualified'
    };

    // Constructing parent array to categorise criteria
    const parents = criteria.map(criterion => {
        if (criterion === 'nudity' || criterion === 'sexualisation' || criterion === 'body') {
            return 'uncredible';
        } else if (criterion === 'qualified') {
            return 'credible';
        } else {
            return '';
        }
    });

    // Updating criteria labels for the chart
    const updatedLabels = criteria.map(criterion => {
        return criteriaLabels[criterion] || criterion;
    });

    // Adding hover text based on the criteria
    const hoverText = criteria.map(criterion => {
        if (criterion === 'nudity') {
            return '26 depicted nudity or inappropriate clothing';
        } else if (criterion === 'sexualisation') {
            return '22 had evidence of sexualisation or objectification';
        } else if (criterion === 'body') {
            return '15 displayed extreme body types';
        } else if (criterion === 'qualified') {
            return '54% had relevant qualifications (i.e., physiology and personal training)';
        } else {
            return '';
        }
    });

    var data = [{
        type: "sunburst",
        labels: updatedLabels,
        parents: parents,
        values: influencers.map(Number),
        outsidetextfont: {size: 20, color: "#377eb8"},
        leaf: {opacity: 0.8},
        marker: {line: {width: 2}},
        customdata: hoverText,
        hoverinfo: 'label+value',
        hovertemplate: '<b>%{label}</b><br>Influencers: %{value}<br>%{customdata}<extra></extra>',
    }];
    
    var layout = {
        title: {
            text: 'Do the 100 #fitspiration influencers post credible content?',
            font: {
                family: '"Heebo", sans-serif',
                size: 16,
                color: '#7f7f7f'
            }
        },
        sunburstcolorway: ["#263238", "#92E3A9"],
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
        showlegend: true
    };

    const plotDiv = document.getElementById('sunburst');

    Plotly.newPlot(plotDiv, data, layout);
});
