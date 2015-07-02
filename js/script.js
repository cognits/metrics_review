Parse.initialize("SrQy9t8NAqwFABA1tKer8B9yXgwFwdHcG0EQl0yl", "dfTWBxaDYMiSmVOFbNoLVb9KyhczN0FedJXg5Ktj");
// Lists for store the date 
var Projects=[];
var TimeQA=[];
var ConteoQA=0;
var TotalQA=[];
// variables para el total de tiempo de review
var TimeReview=[];
var ConteoRewiew =0;
var FinishReview = [];
// Total de lineas de codigo
var Lines=[];
var TotalLine=0;
var ProjectLines=[];
// Variables para comentarios awesome y envio de variables a las graficas
var Awesome = [];
var CommentsAwesome = 0;
var FinishCommentsAwesome = [];
// Variables para comentarios Nitpick y envio de variables a las graficas
var Nitpick = [];
var CommentsNitpick = 0;
var FinishCommentsNitpick = [];
// Variables para comentarios Critical y envio de variables a las graficas
var Critical = [];
var CommentsCritical = 0;
var FinishCommentsCritical = [];
// Diccionario Parse
var Pro = {items:[]};
// Variables Make a Web Page para tiempo de Submit
var SumaTimeSubmitMake=0; //Contador de Time Submit de Make a Web Page
var ListTimeSubmitMake=[]; // Lista de la suma por tiempo de Make a Web Page
var TotalTimeSubmitMake = []; // Lista por tiempo ordenada de Make a Web Page
// Variables Make a Web Page para tiempo de QA
var QATimePro=[];
var SumQAMake = 0;
var TotalTimeQAMake=[];
// Variables Program With Objects
var SumaTimeSubmitProgramObject=0;
var ListTimeSubmitProgramObject=[];
var TotalTimeSubmitProgramObject=[];
// Variables Program With Objects para tiempo de QA
var SumQAProgram = 0;
var TotalTimeQAProgram=[];
// Variables Automate Your Page
var SumaTimeSubmitAutomate=0;
var ListTimeSubmitAutomate=[];
var TotalTimeSubmitAutomate=[];
// Variables Automate Your Page para tiempo de QA
var SumQAAutomate = 0;
var TotalTimeQAAutomate=[];
// Variables Build a Portfolio
var SumaTimeSubmitPortfolio=0;
var ListTimeSubmitPortfolio=[];
var TotalTimeSubmitPortfolio=[];
// Variables Build a Portfolio para tiempo de QA
var SumQAPortfolio = 0;
var TotalTimeQAPortfolio=[];
// Variables Movie Trailer
var SumaTimeSubmitMovie=0;
var ListTimeSubmitMovie=[];
var TotalTimeSubmitMovie=[];
// Variables Movie Trailer Website para tiempo de QA
var SumQAMovie = 0;
var TotalTimeQAMovie=[];
// Variables Interactive Resume
var SumaTimeSubmitInteractive=0;
var ListTimeSubmitInteractive=[];
var TotalTimeSubmitInteractive=[];
// Variables Interactive Resume para tiempo de QA
var SumQAInteractive = 0;
var TotalTimeQAInteractive=[];
// Variables Hello World
var SumaTimeSubmitHelloWorld=0;
var ListTimeSubmitHelloWorld=[];
var TotalTimeSubmitHelloWorld=[];
// Variables Hello World para tiempo de QA
var SumQAIHello = 0;
var TotalTimeQAHello=[];
// Variables Getting Started
var SumaTimeSubmitGetting=0;
var ListTimeSubmitGetting=[];
var TotalTimeSubmitGetting=[];
// Variables Getting Started para tiempo de QA
var SumQAIGetting = 0;
var TotalTimeQAGetting=[];
// Variables para grafica del Histograma
var CountHistogram=[];
var CommentsZero= 0;
var CommentsOne=0;
var CommentsTwo=0;
var CommentsThree=0;
var CommentsFour=0;
var CommentsFive=0;
var CommentsSix=0;
var CommentsSeven=0;
var CommentsEight=0;
var CommentsNine=0;
var CommentsTen=0;
var CommentsEleven=0;
var CommentsTwelve=0;
var CommentsThirteen=0;
var CommentsFourteen=0;
var CommentsFiveteen=0;
var MoreComments=0;
//Con esto mando a llamar los datos a parse
var query = new Parse.Query('Udacity_Code');
//query limit hace la llamada de mas elementos
query = query.skip(364);
query = query.limit(1000);
query.find({
	success: function(results) {
	// cycle through the results
	for ( x in results){
		// print out the results
		Projects.push(x);
		// Operacionales para Calcular Total QA
		TimeQA.push(parseInt(results[x].attributes.Time_that_it_took_QA_and_submit));
        TotalQA.push(ConteoQA=ConteoQA+TimeQA[x]);
        TotalQA = TotalQA.sort(deMayorAMenor);
        // Variables para calculo de QA Minutes
        //var QAHours = Math.floor( TotalQA[0] / 3600 ); 
        var QAHours = Math.floor(TotalQA[0]/60);
        var QASeconds = TotalQA[0] % 60;
        // Para anteponer un 0 si los minutos son menores a 10
        QAHours = QAHours < 10 ? '0' + QAHours : QAHours;
        // Para anteponer un 0 si los segundos son menores a 10
        QASeconds = QASeconds < 10 ? '0' + QASeconds : QASeconds;
        // Total de Minutos mas Segundos de QA
        var QAMinutesTotal = QAHours + ":" + QASeconds;
        // Operacionales para Calcular Total de Review
        TimeReview.push(results[x].attributes.Time_that_it_took_to_complete);
        FinishReview.push(ConteoRewiew=ConteoRewiew+TimeReview[x]);
        FinishReview= FinishReview.sort(deMayorAMenor);
        //Variables para calculo de Review Minutos
        var ReviewHours = Math.floor(FinishReview[0]/60);
        var ReviewSeconds = FinishReview[0] % 60;
        // Para anteponer un 0 si los minutos son menores a 10
        ReviewHours = ReviewHours < 10 ? '0' + ReviewHours : ReviewHours;
        // Para anteponer un 0 si los segundos son menores a 10
        ReviewSeconds = ReviewSeconds < 10 ? '0' + ReviewSeconds : ReviewSeconds;
        // Total de Minutos mas Segundos de Review
        var ReviewMinutesTotal = ReviewHours + ":" + ReviewSeconds;
        // Promedio de QA (Segunda Grafica)
        var PromQA = Math.round(TotalQA[0]/results.length);
        // Toma el ultimo elemento del Array 'Projects'
        FinalContentProjects = parseInt(Projects.pop())+1;
        // Envio de datos para comentarios awesome y solo tomo datos numericos
        Awesome.push(results[x].attributes.Number_of_awesome_comments);
        Nitpick.push(results[x].attributes.Number_of_nitpick_comments);
        Critical.push(results[x].attributes.Number_of_critical_comments);
        QATimePro.push(parseInt(results[x].attributes.Time_that_it_took_QA_and_submit));
        Lines.push(parseInt(results[x].attributes.Number_of_lines_of_code));

        CountHistogram.push(results[x].attributes.Number_of_awesome_comments+results[x].attributes.Number_of_nitpick_comments+results[x].attributes.Number_of_critical_comments);
        //----------------Envio de datos Parse al Objeto Local----------------------
        Pro.items.push(
            {
                Project_id: results[x].attributes.Project_id,
                Name: results[x].attributes.Name, 
                Project_type: results[x].attributes.Project_type,
                Number_Awesome: results[x].attributes.Number_of_awesome_comments,
                Number_Nitpick: results[x].attributes.Number_of_nitpick_comments,
                Number_Critical: results[x].attributes.Number_of_critical_comments,
                Time_Submit: results[x].attributes.Time_that_it_took_to_complete,
                Time_QA: results[x].attributes.Time_that_it_took_QA_and_submit,
                Number_Lines: results[x].attributes.Number_of_lines_of_code,
            }
        );
        //---------------------------------------------------------------------------
        // Submit Time del Proyecto Make a Web Page
        if(Pro.items[x].Project_type==="Make a Web Page"){
            SumaTimeSubmitMake = SumaTimeSubmitMake+Pro.items[x].Time_Submit;
            ListTimeSubmitMake.push(SumaTimeSubmitMake);
            TotalTimeSubmitMake = ListTimeSubmitMake.sort(deMayorAMenor);
        } // Submit Time del Proyecto Program With Objects
        else if(Pro.items[x].Project_type==="Program With Objects"){
            SumaTimeSubmitProgramObject = SumaTimeSubmitProgramObject+Pro.items[x].Time_Submit;
            ListTimeSubmitProgramObject.push(SumaTimeSubmitProgramObject);
            TotalTimeSubmitProgramObject = ListTimeSubmitProgramObject.sort(deMayorAMenor);
        } // Submit Time del Proyecto Automate Your Page 
        else if(Pro.items[x].Project_type==="Automate Your Page"){
            SumaTimeSubmitAutomate = SumaTimeSubmitAutomate+Pro.items[x].Time_Submit;
            ListTimeSubmitAutomate.push(SumaTimeSubmitAutomate);
            TotalTimeSubmitAutomate = ListTimeSubmitAutomate.sort(deMayorAMenor);
        } // Submit Time del Proyecto Build a Portfolio
        else if(Pro.items[x].Project_type==="Build a Portfolio Site"){
            SumaTimeSubmitPortfolio = SumaTimeSubmitPortfolio+Pro.items[x].Time_Submit;
            ListTimeSubmitPortfolio.push(SumaTimeSubmitPortfolio);
            TotalTimeSubmitPortfolio = ListTimeSubmitPortfolio.sort(deMayorAMenor);
        } // Submit Time del Proyecto Movie Trailer
        else if(Pro.items[x].Project_type==="Movie Trailer Website"){
            SumaTimeSubmitMovie = SumaTimeSubmitMovie+Pro.items[x].Time_Submit;
            ListTimeSubmitMovie.push(SumaTimeSubmitMovie);
            TotalTimeSubmitMovie = ListTimeSubmitMovie.sort(deMayorAMenor);
        } // Submit Time del Proyecto Interactive Resume
        else if(Pro.items[x].Project_type==="Interactive Resume"){
            SumaTimeSubmitInteractive = SumaTimeSubmitInteractive+Pro.items[x].Time_Submit;
            ListTimeSubmitInteractive.push(SumaTimeSubmitInteractive);
            TotalTimeSubmitInteractive = ListTimeSubmitInteractive.sort(deMayorAMenor);
        } // Submit Time del Proyecto Hello World
        else if(Pro.items[x].Project_type==="Intro Project: HTML5 Hello World!"){
            SumaTimeSubmitHelloWorld = SumaTimeSubmitHelloWorld+Pro.items[x].Time_Submit;
            ListTimeSubmitHelloWorld.push(SumaTimeSubmitHelloWorld);
            TotalTimeSubmitHelloWorld = ListTimeSubmitHelloWorld.sort(deMayorAMenor);
        } // Submit Time del Proyecto Hello World
        else if(Pro.items[x].Project_type==="Getting Started With HTML"){
            SumaTimeSubmitGetting = SumaTimeSubmitGetting+Pro.items[x].Time_Submit;
            ListTimeSubmitGetting.push(SumaTimeSubmitGetting);
            TotalTimeSubmitGetting = ListTimeSubmitGetting.sort(deMayorAMenor);
        }
        // Variable con resultado del promedio de todos los Review
        var MinReview =  parseInt(TotalTimeSubmitMake[0]+TotalTimeSubmitProgramObject[0]+TotalTimeSubmitAutomate[0]+TotalTimeSubmitPortfolio[0]+TotalTimeSubmitMovie[0]+TotalTimeSubmitInteractive[0]+TotalTimeSubmitHelloWorld[0]+TotalTimeSubmitGetting[0]);
        var TotalReview = Math.round((TotalTimeSubmitMake[0]+TotalTimeSubmitProgramObject[0]+TotalTimeSubmitAutomate[0]+TotalTimeSubmitPortfolio[0]+TotalTimeSubmitMovie[0]+TotalTimeSubmitInteractive[0]+TotalTimeSubmitHelloWorld[0]+TotalTimeSubmitGetting[0])/results.length);
	

        var TotalQASubmit = TotalQA[0] + MinReview; 
        // Variables para calculo total de QA + Submit
        var QASubmitHours = Math.floor(TotalQASubmit /60);
        var QASubmitSeconds = TotalQASubmit % 60;
        // Para anteponer un 0 si los minutos son menores a 10
        QASubmitHours = QASubmitHours < 10 ? '0' + QASubmitHours : QASubmitHours;
        // Para anteponer un 0 si los segundos son menores a 10
        QASubmitSeconds = QASubmitSeconds < 10 ? '0' + QASubmitSeconds : QASubmitSeconds;
        // Total de Minutos mas Segundos de QA
        var QASubmitTotal = QASubmitHours + ":" + QASubmitSeconds;
    }
    // Ciclo Grafica Circular por Comentarios Awesome, Nitpick y Critical
    for( x = 0; x <= Awesome.length; x++){
        // Ciclo for para mostrar los datos finales de comentarios awesome
        Awesome = Awesome.filter(Number);
        FinishCommentsAwesome.push(CommentsAwesome=CommentsAwesome+Awesome[x]);
        FinishCommentsAwesome = FinishCommentsAwesome.sort(deMayorAMenor);
    }
    for(x = 0; x <= Nitpick.length; x++){
        Nitpick = Nitpick.filter(Number);
        FinishCommentsNitpick.push(CommentsNitpick = CommentsNitpick + Nitpick[x]);
        FinishCommentsNitpick = FinishCommentsNitpick.sort(deMayorAMenor);
    }
    for(x = 0; x <= Critical.length; x++){
        Critical = Critical.filter(Number);
        FinishCommentsCritical.push(CommentsCritical = CommentsCritical + Critical[x]);
        FinishCommentsCritical = FinishCommentsCritical.sort(deMayorAMenor);
    }
    // Validacion de Cantidad de Commentarios en proyectos de la grafica Histograma
    for(x=0;x<=CountHistogram.length;x++){
        CountHistogram = CountHistogram.sort(deMenorAMayor);
        if(CountHistogram[x]==0){
            CommentsZero++;
        }else if(CountHistogram[x]==1){
            CommentsOne++;
        }else if(CountHistogram[x]==2){
            CommentsTwo++;
        }else if(CountHistogram[x]==3){
            CommentsThree++;
        }else if(CountHistogram[x]==4){
            CommentsFour++;
        }else if(CountHistogram[x]==5){
            CommentsFive++;
        }else if(CountHistogram[x]==6){
            CommentsSix++;
        }else if(CountHistogram[x]==7){
            CommentsSeven++;
        }else if(CountHistogram[x]==8){
            CommentsEight++;
        }else if(CountHistogram[x]==9){
            CommentsNine++;
        }else if(CountHistogram[x]==10){
            CommentsTen++;
        }else if(CountHistogram[x]==11){
            CommentsEleven++;
        }else if(CountHistogram[x]==12){
            CommentsTwelve++;
        }else if(CountHistogram[x]==13){
            CommentsThirteen++;
        }else if(CountHistogram[x]==14){
            CommentsFourteen++;
        }else if(CountHistogram[x]==15){
            CommentsFiveteen++;
        }else if(CountHistogram[x]>=16){
            MoreComments++;
        }
    }
    // Ciclo for para obtener el total de QA Time Total por Proyectos
    for(x=0; x<=QATimePro.length;x++){
            QATimePro = QATimePro.filter(Number);
            // QA correspondiente al proyecto Make a Web Page
            if(Pro.items[x].Project_type==="Make a Web Page"){
                TotalTimeQAMake.push(SumQAMake=SumQAMake+QATimePro[x]);
                TotalTimeQAMake = TotalTimeQAMake.sort(deMayorAMenor);
            }
            // QA correspondiente al proyecto Program With Objects
            else if(Pro.items[x].Project_type==="Program With Objects"){
                TotalTimeQAProgram.push(SumQAProgram=SumQAProgram+QATimePro[x]);
                TotalTimeQAProgram = TotalTimeQAProgram.sort(deMayorAMenor);
            }
            // QA correspondiente al proyecto Automate Your Page
            else if(Pro.items[x].Project_type==="Automate Your Page"){
                TotalTimeQAAutomate.push(SumQAAutomate=SumQAAutomate+QATimePro[x]);
                TotalTimeQAAutomate = TotalTimeQAAutomate.sort(deMayorAMenor);
            }
            // QA correspondiente al proyecto Build a Portfolio
            else if(Pro.items[x].Project_type==="Build a Portfolio Site"){
                TotalTimeQAPortfolio.push(SumQAPortfolio=SumQAPortfolio+QATimePro[x]);
                TotalTimeQAPortfolio = TotalTimeQAPortfolio.sort(deMayorAMenor);
            }
            // QA correspondiente al proyecto Movie Trailer
            else if(Pro.items[x].Project_type==="Movie Trailer Website"){
                TotalTimeQAMovie.push(SumQAMovie=SumQAMovie+QATimePro[x]);
                TotalTimeQAMovie = TotalTimeQAMovie.sort(deMayorAMenor);
            }
            // QA correspondiente al proyecto Interactive Resume
            else if(Pro.items[x].Project_type==="Interactive Resume"){
                TotalTimeQAInteractive.push(SumQAInteractive=SumQAInteractive+QATimePro[x]);
                TotalTimeQAInteractive = TotalTimeQAInteractive.sort(deMayorAMenor);
            }
            // QA correspondiente al proyecto Hello World!
            else if(Pro.items[x].Project_type==="Intro Project: HTML5 Hello World!"){
                TotalTimeQAHello.push(SumQAIHello=SumQAIHello+QATimePro[x]);
                TotalTimeQAHello = TotalTimeQAHello.sort(deMayorAMenor);
            }
            // QA correspondiente al proyecto Getting Started With HTML!
            else if(Pro.items[x].Project_type==="Getting Started With HTML"){
                TotalTimeQAGetting.push(SumQAIGetting=SumQAIGetting+QATimePro[x]);
                TotalTimeQAGetting = TotalTimeQAGetting.sort(deMayorAMenor);
            }
    }
    // Ciclo for para obtener el total de Lineas de Codigo de Reviews
    for(x=0; x<=Lines.length;x++){
            Lines = Lines.filter(Number);
            ProjectLines.push(TotalLine=TotalLine+Lines[x]);
            ProjectLines = ProjectLines.sort(deMayorAMenor);
    }
    //----------------------------Fin del Ciclo de Resultados--------------------------
    //---------------------Function for the grafic de time finish QA and reviewer time One Grafic-----------------------\\
        $('#container').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Review and QA Response Time'
            },
            xAxis: {
                categories: [
                    'Make a web page',
                    'Program with Object',
                    'Automate your page',
                    'Build a portfolio site',
                    'Movie Trailer Website',
                    'Interactive Resume',
                    'Intro Project: HTML5 Hello World!',
                    'Getting Started With HTML'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b><td>min</td></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                }
            },
            series: [{
                name: 'Review',
                data: [TotalTimeSubmitMake[0], 
                    TotalTimeSubmitProgramObject[0], 
                    TotalTimeSubmitAutomate[0], 
                    TotalTimeSubmitPortfolio[0], 
                    TotalTimeSubmitMovie[0], 
                    TotalTimeSubmitInteractive[0],
                    TotalTimeSubmitHelloWorld[0],
                    TotalTimeSubmitGetting[0]
                ],
                color: Highcharts.getOptions().colors[23]

            }, {
                name: 'QA',
                data: [TotalTimeQAMake[0],
                    TotalTimeQAProgram[0],
                    TotalTimeQAAutomate[0],
                    TotalTimeQAPortfolio[0],
                    TotalTimeQAMovie[0],
                    TotalTimeQAInteractive[0],
                    TotalTimeQAHello[0],
                    TotalTimeQAGetting[0]],
                color: Highcharts.getOptions().colors[8]
            }]
        });
//---------------------------------------Finish graphics------------------------------------------------\\
//-----------------------------graphic of comments awesome, Nitpick and critical Four Graphic ----------------------------------------\\
$(function () {
	Highcharts.setOptions({
		colors: ['#F38630 ', '#FF4E50', '#5FB404']
    });
    // Radialize the colors
    Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
            stops: [
                [0, color],
                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    });
    // Build the chart
    $('#Grafi').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Grafic of Total of comments awesome, Nitpick and critial'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f}',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Comments',
            data: [
                ['Nitpick',   FinishCommentsAwesome[0]],
                ['Critical',       FinishCommentsAwesome[0]],
                {
                    name: 'Awesome',
                    y: FinishCommentsAwesome[0],
                    sliced: true,
                    selected: true
                },
            ]
        }]
    });
});
//---------------------------------------Finish graphics------------------------------------------------\\
//----------------------------- Promedial Graphic QA and Submit Time ----------------------------------------\\
$(function () {
    var gaugeOptions = {
        chart: {
            type: 'solidgauge'
        },
        title: "Averange Response Time",
        pane: {
            center: ['50%', '55%'],
            size: '50%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },
        tooltip: {
            enabled: false
        },
        // the value axis
        yAxis: {
            stops: [
                [100, '#55BF3B'], // green
                [50, '#DDDF0D'], // yellow
                [10, '#DF5353'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };
    // The speed gauge
    $('#container-speed').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'QA'
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'QA',
            data: [PromQA],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                       '<span style="font-size:12px;color:silver">Mins</span></div>'
            },
            tooltip: {
                valueSuffix: 'Min'
            }
        }]
    }));
    // The RPM gauge
    $('#container-rpm').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'Review'
            }
        },
        series: [{
            name: 'Review',
            data: [TotalReview],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                       '<span style="font-size:12px;color:silver">Mins</span></div>'
            },
            tooltip: {
                valueSuffix: 'Min'
            }
        }]
    }));
});
//---------------------------------------Finish graphics------------------------------------------------\\
//--------------------------------------grafic of comments ------------------------------------------------\\
$(function () {
    // Create the chart
    $('#histogram').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Comments Per Project Histogram'
        },
        xAxis: {
            title:{
                text: 'Min - Comments - Max',
            },
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Cant Projects'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
        },
        series: [{
            name: "Cant. Comments",
            colorByPoint: false,
            data: [{
                name: "0",
                y: CommentsZero,
                color: "#69D2E7"
            }, {
                name: "1",
                y: CommentsOne,
                color: "#A7DBD8"
            }, {
                name: "2",
                y: CommentsTwo,
                color: "#E0E4CC"
            }, {
                name: "3",
                y: CommentsThree,
                color: "#F38630"
            }, {
                name: "4",
                y: CommentsFour,
                color: "#EEAA88"
            }, {
                name: "5",
                y: CommentsFive,
                color: "#BBBB88"
            }, {
                name: "6",
                y: CommentsSix,
                color: "#CCC68D"
            }, {
                name: "7",
                y: CommentsSeven,
                color: "#69D2E7"
            }, {
                name: "8",
                y: CommentsEight,
                color: "#EEDD99"
            }, {
                name: "9",
                y: CommentsNine,
                color: "#EEC290"
            }, {
                name: "10",
                y: CommentsTen,
                color: "#EEAA88"
            }, {
                name: "11",
                y: CommentsEleven,
                color: "#69D2E7"
            }, {
                name: "12",
                y: CommentsTwelve,
                color: "#A7DBD8"
            }, {
                name: "13",
                y: CommentsThirteen,
                color: "#E0E4CC"
            }, {
                name: "14",
                y: CommentsFourteen,
                color: "#F38630"
            }, {
                name: "15",
                y: CommentsFiveteen,
                color: "#EEAA88"
            }, {
                name: "+16",
                y: MoreComments,
                color: "#BBBB88"
            }]
        }],
    });
});
//---------------------------------------Finish graphics------------------------------------------------\\
//-----------------------------grafic of comments awesome, Nitpick and critial Four Grafic ----------------------------------------\\
$(function () {
    Highcharts.setOptions({
        colors: ['#F38630 ', '#5FB404', '#FF4E50']
    });
    // Radialize the colors
    Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
            stops: [
                [0, color],
                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    });
    // Build the chart
    $('#Grafi').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Grafic of Total of comments awesome, Nitpick and critial'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f}',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Comments',
            data: [
                ['Nitpick',   FinishCommentsNitpick[0]],
                ['Awesome',       FinishCommentsAwesome[0]],
                {
                    name: 'Critical',
                    y: FinishCommentsCritical[0],
                    sliced: true,
                    selected: true
                },
            ]
        }]
    });
});
//---------------------------------------Finish graphics------------------------------------------------\\	
    $(".TimeReview").append('<br>'+'<h1 style"padding-top:7px">'+ReviewMinutesTotal+'</h1>'+'<p>Hours of Review');
    $(".QATime").append('<h1 style="padding-top:15px">'+QAMinutesTotal+'</h1>'+'<p>Hours of QA</p>')
    //Impresión de Conteo de Reviews
	$(".Data").append('<h1 style="padding-top:7px">'+FinalContentProjects+'</h1>'+'<p>Reviewed'+'<br>'+ 'Project</p>');
	// Impresion en consola de QATime sin los valores NaN, null y undefined
	$(".LineCode").append('<h2 style="padding-top:15px">'+ProjectLines[0]+'</h2>'+'<p>Lines of Code'+'</p>');
    // Tiempo maximo de QA+Review
    $(".maxtime").append('<br>'+'<h3 style="padding-top:10px">QA + Review</h3>'+'<h1>'+QASubmitTotal+'</h1>'+'<p>Hours</p>');
    // Función para ordenar un array de mayor a menor
    function deMayorAMenor(elem1, elem2){
        return elem2-elem1;
    }
    function deMenorAMayor(elem1, elem2){
        return elem1-elem2;
    }
	},
	error: function(myObject, error) {
	// Error occured
	console.log( error );
	}
});
