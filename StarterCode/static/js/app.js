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

    var trace1 = {
      x: sample.otu_ids,
        y: sample.sample_values,
        type: 'bubble',
        mode: 'markers',
      marker: {
        size: sample.sample_values,
        color: sample.otu_ids,
        colorscale: 'Earth'
      }
    };
    
    var data = [trace1];
    
    var layout = {
      title: 'Belly Button Bacteria',
      showlegend: false,
      text: sample.otu_labels,
      xaxis: {
        title: "OTU ID"
      },
      yaxis: {
        title: "Sample Value"
      }
    };
    
    Plotly.newPlot('bubble', data, layout);





    
  })
}

