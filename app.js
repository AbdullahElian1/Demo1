'use strict';

let sec2=document.getElementById('sec-two');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function splitName(email){
    
    let nameParts = email.split("@");
    return nameParts[0];
   
}

function Student(email,number,tuition ){
    this.email=email;
    this.number=number;
    this.tuition=tuition;
    this.age=0;
    this.name=null;
    this.id=0;

    Student.allData.push(this);


}

Student.allData=[];
let table=document.getElementById('table');

Student.prototype.render=function(){
    let tr=document.createElement('tr');
    table.appendChild(tr);
    let td=document.createElement('td');
    td.textContent=`${Student.allData.length}`;
    tr.appendChild(td);
    this.name=splitName(this.email);
    let td1=document.createElement('td');
    td1.textContent=`${this.name}`;
    tr.appendChild(td1);

    let td2=document.createElement('td');
    td2.textContent=`${this.email}`;
    tr.appendChild(td2);

    let td3=document.createElement('td');
    td3.textContent=`${this.number}`;
    tr.appendChild(td3);

    this.age=getRandomIntInclusive(18,25);

    let td4=document.createElement('td');
    td4.textContent=`${this.age}`;
    tr.appendChild(td4);

    let td5=document.createElement('td');
    td5.textContent=`${this.tuition}`;
    tr.appendChild(td5);
}


let form=document.getElementById('form');
form.addEventListener('submit',handlesubmit);

function handlesubmit(event){
    event.preventDefault();
    let email=event.target.email.value;
    let mobile=event.target.num.value;
    let tuition=event.target.tuition.value;

    let newobj= new Student(email,mobile,tuition);
    savetols();
    newobj.render();



}

function savetols(){
    console.log(Student.allData);
    let data=JSON.stringify(Student.allData);
    console.log(data);

    localStorage.setItem('Student',data);

}

function getFromls(){
    let data=localStorage.getItem('Student');
    let order=JSON.parse(data);
    console.log(order);
    for(let i=0;i<order.length;i++){
        let reInst= new Student(order[i].email,order[i].number,order[i].tuition);
        reInst.render();
    }

}

getFromls();


