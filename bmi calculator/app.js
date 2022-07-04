const calculatebtn=document.querySelector('#calculate_bmi');
const bmiresult=document.querySelector('bmi_result');
const form=document.querySelector('form');
calculatebtn.addEventListener('click',(event)=>{
    const weight=document.querySelector('#weightField').value;
    const height=document.querySelector('#heightField').value;
    if(weight=='' || height==''){
        return alert("please enter both weight and height");
    }
    const result=weight/(height*height);
    let bmimsg;
    let msgClr;
    if(result<18.5){
        bmimsg='Underweight';
        msgClr="text-danger";
    }
    else if(result>=18.5 && result<=25){
        bmimsg='Normal';
        msgClr="text-success";
    }
    else if(result>25 && result<30){
        bmimsg='Overweight';
        msgClr="text-danger";
    }
    else if(result>30){
        bmimsg='Obese';
        msgClr="text-danger";
    }

    document.getElementById("bmi_result").innerHTML=`BMI=<b>${Math.round(result*100)/100}(<span class="${msgClr}"><b>${bmimsg}</b></span>)</b>`;
})

form.addEventListener('submit',e=>{
    e.preventDefault();
});