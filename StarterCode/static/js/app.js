

d3.json("../samples.json").then(function (data) {
  console.log(data);
});


function unpack(rows, index) {
  return rows.map(function (row) {
    return row[index];
  });
}

// Grab values from the response json object to build the plots
var name = data.name;

//WHICH WAY IS CORRECT for the other two??

//Method #1
//read in "metadata" 
var personId = data.metadata.id
var ethnicity = data.metadata.ethnicity;
var gender = data.metadata.gender;
var age = data.metadata.age;
var location = data.metadata.location;
var bbtype = data.metadata.bbtype;
var wfreq = data.metadata.wfreq;
//read in "samples"
var sampleID = data.samples.id;
var otu_ids = data.samples.otu_ids;
var sample_values = data.samples.otu_labels;

//Method #2
//read in "metadata"
var personId = unpack(data.metadata.id, 0);
var ethnicity = unpack(data.metadata.ethnicity, 1);
var gender = unpack(data.metadata.gender, 2);
var age = unpack(data.metadata.age, 3);
var location = unpack(data.metadata.age, 4);
var bbtype = unpack(data.metadata.bbtype, 5);
var wfreq = unpack(data.metadata.wfreq, 6);
//read in "samples"
var sampleID = unpack(data.samples.id, 0);
var otu_ids = unpack(data.samples.otu_ids, 1);
var sample_values = unpack(data.samples.otu_labels, 2);

// Create the Trace
var trace1 = {
  x: sample_values,
  y: otu_ids,
  type: "bar"
};

// Create the data array for the plot
var barOtuData = [trace1];

// Define the plot layout
var layout = {
  title: "Top 10 OTUs",
  xaxis: { title: "Count" },
  yaxis: { title: "OTU" }
};

var layout = {
  title: "'Bar' Chart"
};


// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);

// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);
