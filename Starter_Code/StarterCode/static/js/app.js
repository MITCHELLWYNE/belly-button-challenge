
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

 // const dataPromise = d3.json(url);
 // console.log("Data Promise: ", dataPromise);

d3.json(url).then(function(data) {
    console.log(data);
});


function init() {

    let dropdownMenu = d3.select("#selDataset");


    d3.json(url).then((data) => {
        let names = data.names;
        names.forEach((id) => {
            console.log(id);
            dropdownMenu.append("option")
            .text(id)
            .property("value", id);
        });
        
        let sample_one = names[0];

        console.log(sample_one);

        buildMetadata(sample_one);
        buildBarChart(sample_one);
        buildBubbleChart(sample_one);
        buildGaugeChart(sample_one);

    });

};

function buildMetadata(sample) {
    
    d3.json(url).then((data) => {
        let metaData = data.metadata;
        let value = metadata.filter(result.id == sample);
        console.log(value)

        let valueData = value[0];

        d3.select("#sample-metadata").html("");

        Object.entries(valueData).forEach(([key, value]) => {
            console.log(key, value);
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
    });
};

function buildBarChart(sample) {
    d3.json(url).then((data) => {
        let sampleInfo= data.samples;
        let value = sampleInfo.filter(result => result.id == sample);
        let valueData = value[0];

        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;

        console.log(otu_ids, otu_labels, sample_values);

        let yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
        let xticks = sample_values.slice(0,10).reverse();
        let labels = otu_labels.slice(0,10).reverse();


        let trace = {
            x: xticks,
            y: yticks,
            text: labels,
            type:"bar",
            orientation: "h"
        };

        let layout = {
            title: "Top 10 OTUs Present"
        };
    });
};

function buildBubbleChart(sample) {

    d3.json(url).then((data) => {
        let sampleInfo = data.samples;

        let value = sampleInfo.filter(results => result.id == sample);

        let valueData = value[0];

        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;

        console.log(otu_ids, otu_labels, sample_values);

        let trace1 = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Electric"
            }
        };

        let layout = {
            title: "Bacteria Per Sample",
            hovermode: "closest",
            xaxis: {title: "OTU ID"}
        };

        Plotyly.newPlot("bubble", trace1, layout1)
    });
};


