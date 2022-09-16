const laonamountinput =document.querySelector(".loanamount");
const interestrateinput=document.querySelector(".interestrate");
const loantenureinput=document.querySelector("loantenure");

const loanemivalue = document.querySelector(".loan-interest.value");
const totalinterest = document.querySelector(".total-interest.value");
const totalamountvalue =document.querySelector(".total-amount.value");

const calculatebtn =document.querySelector(".calculate-btn");

let loanamount = parseFloat(loanamountinput.value);

let interestrate = parsefloat(interestrateinput.value);

 

let loantenure = parsefloat(loantenureinput.value);

let interest = interestrate / 12 / 100 ;

const calculatemi =() => {

let emi = 
loanamount *interest * (math.pow(1+ interest , loantenure) / (math.pow(1+interest,loantenure)-1))

return emi; 
};
const updatedata =(emi)=> {

    loanemivalue.innerHTML =math.round(emi);
    
    let totalamount =math.round(loantenure* emi);
    totalamountvalue.innerHTML=totalamount;

    let totalinterestpayable =math.round (totalamount -loanamount);
    
totalamountvalue.innerHTML=totalinterestpayable;
};

const init =() =>
{

    let emi =calculatemi();
    updatedata(emi);


};

init();





