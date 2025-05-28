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

const menuBtn =document.querySelector("#menu-btn");
const closeBtn =document.querySelector("#close-btn");
const sidebar =document.querySelector("aside");
menuBtn.addEventListener("click",()=>{
    sidebar.classList.add("open");
    document.body.style.overflow = "hidden";
});
closeBtn.addEventListener("click", ()=>{
    sidebar.classList.remove("open");
    document.body.style.overflow = "auto";
});

const themeBtn=document.querySelector(".theme-btn");
themeBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-theme");
    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
});
