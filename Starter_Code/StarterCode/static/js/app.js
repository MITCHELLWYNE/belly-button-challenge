
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

d3.json(url).then(function(data) {
    console.log(data);
});

function init() {
    let data = [{
        values: sample_values,
        labels: otu_ids,
        type: "bar",
        orientation: "h"
}];

    let layout = {
        title: "Top 10 OTU's"
    };

Plotly.newPlot("bar", data, layout);
}    
    
    