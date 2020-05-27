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
        });

};