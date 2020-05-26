function drawChart() {

var width = 500, height = 300;

d3.json("lineData.json").get(function(error, dataArray){

    console.log(dataArray);

var xs = [];
var ys = [];

    for(i=0;i<dataArray.length;i++){

        xs.push(dataArray[i].x);
        ys.push(dataArray[i].y);
    }

var canvas = d3.select('body').append('svg').attr('width', width).attr('height', height);

var path = d3.line()
    .x(function (data) {return data.x * 6})
    .y(function (data) {return data.y * 6});

canvas.append('path')
    .attr('fill', 'none')
    .attr('stroke','blue')
    .attr('d', path(dataArray));


    var dotsGroup = canvas.append('g');

    dotsGroup.selectAll('dots').data(dataArray)
        .enter()
            .append('circle')
            .attr('cx',function(data) {return data.x*6} )
            .attr('cy',function(data) {return data.y*6} )
            .attr('r','2');
        });

}