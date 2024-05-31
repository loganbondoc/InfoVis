Plotly.d3.csv("csv/products.csv", population_data => {
    const criteria = unpack(population_data, 'criteria');
    const influencers = unpack(population_data, 'influencers');

    // Mapping criteria to labels
    const criteriaLabels = {
        'evidence': 'Evidence Criteria Fail',
        'effect': 'Effect Criteria Fail',
        'calorie': 'Calorie Criteria Fail'
    };

    // Constructing parent array to categorise criteria
    const parents = criteria.map(criterion => {
        if (criterion === 'calorie' || criterion === 'evidence' || criterion === 'effect') {
            return 'failed';
        } else if (criterion === 'relevant') {
            return 'passed';
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
        if (criterion === 'evidence') {
            return '5 presented opinion as fact or failed to provide evidence-based references for nutritional claims';
        } else if (criterion === 'effect') {
            return '5 failed to provide a disclaimer for potential side effects';
        } else if (criterion === 'calorie') {
            return '9 failed the Public Health England calorie targets and traffic light criteria';
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
            text: 'Assessing the Top 9 Influencer Endorsed Health Products in 2018',
            font: {
                family: '"Heebo", sans-serif',
                size: 16,
                color: '#7f7f7f'
            }
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
        showlegend: true,
        sunburstcolorway: ["#263238", "#92E3A9"]
    };

    const plotDiv = document.getElementById('sunburst2');

    Plotly.newPlot(plotDiv, data, layout);
});
