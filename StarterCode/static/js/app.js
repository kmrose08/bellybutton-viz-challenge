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
      x: sample.sample_values,
        y: sample.otu_ids,
        type: 'bubble',
        mode: 'markers',
      marker: {
        size:  sample.otu_ids
      }
    };
    
    var data = [trace1];
    
    var layout = {
      title: 'Marker Size',
      showlegend: false,
      height: 600,
      width: 600
    };
    
    Plotly.newPlot('bubble', data);


    var data = [
      {
        x: sample.sample_values,
        y: sample.otu_ids,
        type: 'bubble',
        mode: 'markers',
          marker: {
          //  color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
          // opacity: [1, 0.8, 0.6, 0.4],
          // size: [40, 60, 80, 100]
      }}
    ];


  

  // Plotly.newPlot('bubble', data);





    // var trace1 = {
    //   x: sample.sample_values,
    //   y: sample.otu_ids,
    //   mode: 'markers',
    //   marker: {
    //     color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
    //     opacity: [1, 0.8, 0.6, 0.4],
    //     size: [40, 60, 80, 100]
    //   }
    // };
    
    // var databubble = [trace1];
    
    // var layout = {
    //   title: 'Marker Size and Color',
    //   showlegend: false,
    //   height: 600,
    //   width: 600
    // };
    
    // Plotly.newPlot('plot', data, layout);


    
  })
}

