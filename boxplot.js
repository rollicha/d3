function drawBoxplot(){
    d3.json("boxplot.json").then(function (jsonData){

        //variabler
        var width = 600, height = 300, margin = 30;
        var chartWidth = width-(margin*2);
        var chartHeight = height-(margin*2);

         //ladda in data
         var temps = [];
         for(i=0; i<jsonData.temperatures.length;i++){
             temps.push(jsonData.temperatures[i].temp);
         }
            console.log(temps);

        //boxplot variabler
        var min = d3.min(temps);
        var max = d3.max(temps);
        var median = temps[Math.floor(temps.length * 0.5)];
        var lq = temps[Math.floor(temps.length * 0.25)];
        var uq = temps[Math.floor(temps.length * 0.75)];
        var dlq = d3.quantile(temps, 0.25);

        if (temps.length%2===0){
             median = ((temps[Math.floor(temps.length * 0.5)])+(temps[Math.ceil(temps.length * 0.5)]))*0.5;
        }
        else{
            median = temps[Math.floor(temps.length * 0.5)];
        }
    
console.log("min: "+min); console.log("max: "+max);
console.log("median: "+ median); console.log("lq: "+lq);
console.log("up: "+uq);

//Xscale&Xaxis
var xScale = d3.scaleLinear().domain([min-5, max+5]).range([0,chartWidth]);
var xAxis = d3.axisBottom(xScale);
//ritunderlag
var canvas = d3.select("body").append("svg").attr("width", width).attr("height", height);
//gruppera ritunderlaget
var chartGroup = canvas.append("g").attr("transform", "translate(0,0)");
chartGroup.append("rect")
.attr("width",function(data){return xScale(uq)-xScale(lq)})
.attr("height", 50)
.attr("x",xScale(lq))
.attr("y",20);

//rita ut axeln
chartGroup.append("g").call(xAxis);

        });

};


