function drawHistogram(){

    d3.json("basketPlayers.json").then(function (jsonData){

    //variabler
    var width = 600, height = 300, margin = 30;
    var chartWidth = width-(margin*2);
    var chartHeight = height-(margin*2);
    barWidth = 40, barpadding = 5; 
    

     //ladda in data
     var heights = [], names = [];
     for(i=0; i<jsonData.basketPlayers.length;i++){
         heights.push(jsonData.basketPlayers[i].size);
         names.push(jsonData.basketPlayers[i].name);
        
     }
        
        console.log(names);
        console.log(heights);

        var klasser = ["160-169","170-179","180-189","190-199","200-209","210-219","220-229","230-239",];
        var frekvenser = [];
        var klassStorlek = 10; //binsize 
        var klass = 160; //vilken klass vi är i 
        var antalKlasser = klasser.length;//hur många kategorier har vi

        for (i=0;i<antalKlasser; i++){
            var frekvens = 0; //iterand som räknar hur många som hör till en klass
            for (j=0; j <heights.length; j++){
                //kolla om längden hör till nuvarande klassen
                if(heights[j]>=klass && heights[j]<klass+klassStorlek){
                    frekvens++
                }
            }
            klass += klassStorlek;
            frekvenser.push(frekvens);

        }
        console.log(klasser);
        console.log(frekvenser);
        //skapa scales
            var xScale = d3.scaleBand().domain(names).range([0,chartWidth]);
            var yScale = d3.scaleLinear().domain([0, d3.max(heights)]).range([chartHeight,0]);
         
        //skapa axlarna
            var xAxis = d3.axisBottom(xScale);
            var yAxis = d3.axisLeft(yScale);

        //skapa ritunderlag
            var canvas = d3.select("body").append("svg")
            .attr("width", width)
            .attr("height", height);
        
        //skapa en grupp som inte täcker hela ritunderlaget (margins)
        var chartGroup = canvas.append("g").attr("transform", "translate("+margin+ ",0)");

        //rita in staplar
            chartGroup.selectAll("staplar").data(heights).enter()
                .append("rect")
                .attr("width", barWidth)
                .attr("height", function(data,i){ return chartHeight-yScale(data)})
                .attr("x", function(data,i){return i*(barWidth + barpadding)})
                .attr("y", function(data,i){return yScale(data)});

        //rita axlar
            chartGroup.append("g").call(yAxis);
            chartGroup.append("g").call(xAxis).attr("transform","translate(0,"+chartHeight+")");
            
     
       
    });
};