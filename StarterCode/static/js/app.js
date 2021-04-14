d3.json("samples.json").then(function (data) {
  data.names.forEach(name => {
    d3.select('select').append('option').text(name)
  });
});

function optionChanged() {
  show();
};

show();

function show() {
  d3.json('samples.json').then(data=>{
    var selection = d3.select('select').node().value
    
    var meta = data.metadata.filter(obj=>obj.id == selection)[0];
    var sample = data.samples.filter(obj=>obj.id == selection)[0];

    d3.select('.panel-body').html('');
    Object.entries(meta).forEach(([key,val])=>{
      d3.select('.panel-body').append('h5').text(key.toUpperCase()+': '+val)
    });

    var data = [
      {
        x: sample.sample_values.slice(0,10).reverse(),
        y: sample.otu_ids.slice(0,10).reverse().map(y=>'OTU '+y),
        type: 'bar',
        orientation: 'h'
      }
    ];
    
    Plotly.newPlot('bar', data);
    
    console.log(sample);
  })
}



// d3.json("samples.json").then(function (data) {

// // Grab values from the response json object to build the plots
// var name = data.name;

// //WHICH WAY IS CORRECT for the other two??

// //Method #1
// //read in "metadata" 
// var personId = data.metadata.id
// var ethnicity = data.metadata.ethnicity;
// var gender = data.metadata.gender;
// var age = data.metadata.age;
// var location = data.metadata.location;
// var bbtype = data.metadata.bbtype;
// var wfreq = data.metadata.wfreq;
// //read in "samples"
// var sampleID = data.samples.id;
// var otu_ids = data.samples.otu_ids;
// var sample_values = data.samples.otu_labels;

// //Method #2
// //read in "metadata"
// //read in "samples"

// // Create the Trace
// var trace1 = {
//   x: sample_values,
//   y: otu_ids,
//   type: "bar"
// };

// // Create the data array for the plot
// var barOtuData = [trace1];

// // Define the plot layout
// var layout = {
//   title: "Top 10 OTUs",
//   xaxis: { title: "Count" },
//   yaxis: { title: "OTU" }
// };

// var layout = {
//   title: "'Bar' Chart"
// };


// // Plot the chart to a div tag with id "bar-plot"
// Plotly.newPlot("bar", data, layout);

// });
