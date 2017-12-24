/*var nr = -10;
	while(nr>-11 && nr<20)
	{
    console.log(nr);
    nr++;
}*/ 
 
 /*var count = 10;
 while (count > 9 && count < 41)
 	if (count % 2 == 0 )
 	{
 		console.log(count);
 		count++;
 	}*/
 	 
 	 /*var nr = -10;
 	 for( var i = 20; i<= 40; i+= 2)
 	 console.log(i); */
     /*declarations of funcition*/
 	 /*functions dosmomthing()
 	 {
 	 	console.log("hello world");
 	 }
    /* call the function*/
   /* doSomething ();*/
  

  /* function test(x){
   	/*console.log(x);*/
   /*	return x * 2;
   	console.log(x);
   	return x / 2;
   }
 test(40);*/

/* function iseven(x)
 {
 	if (x % 2 == 0)
 	{
 		return true;
 	}
 	else{
 		return false;

	}}
	is even*/
	 /*var person = {
	 	name: "Eriona",
	 	age: "21",
	 	city: "Pr"
	 };
	  console.log(person["name"])
	  console.log(person.name);
	  /*in case we want in console smth else like age or city after dot we just put age or city*/
	/* $(document).ready(function(){
	 $('#trigger').click(function(){
	 	console.log("Trigger is clicked");
	 	 $('body').css('color','pink');
	 });
	});*/
	$('div').css("background-color", "purple");
	$('.container-fluid').css("background-color", "white");
	$('.highlight').addclass('highlight-width');
	

Highcharts.chart('container', {

    title: {
        text: 'tech'
    },

    subtitle: {
        text: 'Source techstitution'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});











