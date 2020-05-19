function drawChart(){


    //d3.v5 versionen
    d3.csv("lineData.csv").then(function(data){
            console.log(data);
            //document.write (JSON.stringify(data));

            //ladda in data
            var temps = [], months = [];
            for(i=0; i<data.length;i++){
                months.push(data[i].Month);
                temps.push(data[i].Temp);
            }
                console.log(months);
                console.log(temps);

                      //skapa ritunderlag

        var width = 800, height = 500;
        var canvas = d3.select('body').append('svg').attr('width', width).attr('height', height);



            var yScale = d3.scaleLinear()
                .domain([d3.min(temps), d3.max(temps)])   //vilka värden konverteras till pixelvärden
                .range([0,height]);   //pixelvärden ska läggas mellan vilka värden

        //genererar linje för path
        var dString = d3.line()
            .x(function(data) { return data.Month })
            .y(function(data) { return yScale(data.Temp) });
            console.log(dString(data));

            canvas.append('path')
                .attr('fill, none')
                .attr('stroke','blue')
                .attr('d', dString(data));
    
                
    });
};