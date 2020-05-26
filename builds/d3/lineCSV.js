function drawChart(){


    //d3.v5 versionen
    //d3.csv("lineData.csv").then(function(data)
    d3.csv("lineData.csv").get(function (error,data) {
            //console.log(data);
            //document.write (JSON.stringify(data));

            //ladda in data
            var temps = [], months = [], dataFix = [];
            for(i=0; i<data.length;i++){
                months.push(data[i].Month);
                temps.push(parseFloat (data[i].Temp));
                dataFix.push({month:months[i], temp:temps[i]})
            }
                console.log(months);
                console.log(temps);
                console.log(dataFix);

                      //skapa ritunderlag

        var width = 600, height = 300;
        var canvas = d3.select('body').append('svg').attr('width', width).attr('height', height);


            var xScale = d3.scaleBand()
                .domain(months)
                .range([0,width]);

            var yScale = d3.scaleLinear()
                .domain([d3.min(temps), d3.max(temps)])   //vilka värden konverteras till pixelvärden
                .range([height,0]);   //pixelvärden ska läggas mellan vilka värden


        //genererar linje för path
        var dString = d3.line()
            .x(function(d) { return xScale(d.month) })
            .y(function(d) { return yScale(d.temp) });
        //ritar linjen
            canvas.append('path')
                .attr('fill', 'none')
                .attr("stroke","black")
                .attr('d', dString(dataFix));
        //adds dots
        var dotsGroup = canvas.append('g');

        dotsGroup.selectAll('dots').data(dataFix)
            .enter()
                .append('circle')
                .attr('cx', function(d) {return xScale(d.month) } )
                .attr('cy', function(d) {return yScale (d.temp)})
                .attr('r', '2')
                .attr('fill', 'red');
            
                
    });
};