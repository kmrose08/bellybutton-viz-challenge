
var metadata = data.metadata;

d3.json("/../samples.json").then(function(data){
        console.log(metadata);
});

//   const dataPromise = d3.json(url);
//   console.log("Data Promise: ", dataPromise);


// "id": 940,
// "ethnicity": "Caucasian",
// "gender": "F",
// "age": 24,
// "location": "Beaufort/NC",
// "bbtype": "I",
// "wfreq": 2


// /
// "id": "940",
// "otu_ids": [... ],
// "sample_values": [... ],
// "otu_labels": [... 

function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }

    // Grab values from the response json object to build the plots
    var name = data.dataset.name;
    var 
    var stock = data.dataset.dataset_code;
    var startDate = data.dataset.start_date;
    var endDate = data.dataset.end_date;
    var dates = unpack(data.dataset.data, 0);
    var openingPrices = unpack(data.dataset.data, 1);
    var highPrices = unpack(data.dataset.data, 2);
    var lowPrices = unpack(data.dataset.data, 3);
    var closingPrices = unpack(data.dataset.data, 4);


    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: name,
        x: dates,
        y: closingPrices,
        line: {
          color: "#17BECF"
        }
      }; 

var data = [trace1, trace2];      

Plotly.newPlot("bar-plot", data, layout);

// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);
