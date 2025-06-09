// // best time to visit chart

new Chart(climateChart, {
    
    data: {
        datasets: [{
            type:'bar',
            label:'Climate - Bar',
            data:[25, 25.7, 26.9, 27.6, 27.9, 27.6, 27.4, 27.3, 27.1, 26.5, 25.7, 25.1],
            borderWidth:0,
            backgroundColor:'#87d2c3'
        },
        {
        type:'line',
            label:'Climate - Line',
            data:[25, 25.7, 26.9, 27.6, 27.9, 27.6, 27.4, 27.3, 27.1, 26.5, 25.7, 25.1],
            // backgroundColor:'black'
        }],
        labels:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'october', 'November', 'December'],
    },
    options:{
        responsive:true,
        maintainAspectRatio:false,
        scales:{
            y:{
                beginAtZero: false,
                min:10,
                title:{
                    text:'Temperature (In Celcius)',
                    font:{
                        size: 16,
                        weight:'bold'
                    }
                }
            }
        }
    }
});
