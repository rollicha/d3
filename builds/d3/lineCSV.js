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

        });


        //skapa ritunderlag

        var width = 800, height = 500;

    /*d3.v4 versionen
    d3.csv("lineData.csv").get(function(data){
        console.log(data);
    });*/

}