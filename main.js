const chart=document.querySelector("#chart").getContext('2d');

new Chart(chart,{
    type:'line',
    data:{
        labels:['Jan', 'Feb', 'Mar', 'apr', 'May', 'Jun', 'jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets:[
            {
                label:'BTC',
                data:[29374, 32346, 78665, 12965, 40316, 36774, 89947, 57694, 34431, 12246, 934522],
                borderColor:'red',
                borderWidth:2
            },
            {
                label:'ETH',
                data:[323456, 656785, 345672, 212346, 359845, 589237, 672946, 107645, 947543, 456678, 367823],
                borderColor:'blue',
                borderWidth:2
            }

        ]
    },
    options:{
        responsive:true
    }
});