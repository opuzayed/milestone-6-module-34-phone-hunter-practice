/* const loadPhones = async(searchText, dataLimit) =>
{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
} */
/* const displayPhones = (phones, dataLimit) => {
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.textContent = '';
    //---display-10-phones -only-----
    const showAll = document.getElementById('show-all');
    if(dataLimit && phones.length > 10){
      phones = phones.slice(0, 10);
      showAll.classList.remove('d-none');
    }
    else{
      showAll.classList.add('d-none');
    }
    
    //--display-no-phones found--
    const noPhone = document.getElementById('no-found-message');
    if(phones.length == 0)
    {
      noPhone.classList.remove('d-none');
    }
    else{
      noPhone.classList.add('d-none');
    } */
    //--display-all-phones---
    /* phones.forEach(phone =>{
    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('col');
    phoneDiv.innerHTML = `
    <div class="card p-4">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${phone.phone_name}</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
                        </div>
                      </div>
    `;
    phonesContainer.appendChild(phoneDiv);
    });
    //stop loader
    toggleSpinner(false);
} */
/* const processSearch = (dataLimit) => {
    toggleSpinner(true);
    const searchfield = document.getElementById('search-field');
    const searchText = searchfield.value;
    loadPhones(searchText, dataLimit);
}
//-------------handle-search-button-click---------
document.getElementById('btn-search').addEventListener('click', function(){
  //spinner - loading
  processSearch(10);
});

//---search-input-field-enter-key-handler---
document.getElementById('search-field').addEventListener('keypress', function (e) {
  console.log(e.key);
  if (e.key === 'Enter') {
    processSearch(10);
  }
}); */
//------loading function-------
/* const toggleSpinner = isLoading => {
  const loaderDiv = document.getElementById('loader');
  if(isLoading)
  {
    loaderDiv.classList.remove('d-none');
  }
  else{
    loaderDiv.classList.add('d-none');
  }
}
//not a good practice show data
document.getElementById('btn-show-all').addEventListener('click', function(){
  processSearch();
});
//------------load-phone-details----------------
const loadPhoneDetails = async id => {
  const url =  `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhoneDetails(data.data);
}
 */
//-----------display-phone-details---------
/* const displayPhoneDetails = phone =>
{
  console.log(phone);
  const modalTitle = document.getElementById('phoneDetailModalLabel');
  modalTitle.innerText = phone.name;
  const phoneDetails = document.getElementById('phone-details');
  phoneDetails.innerHTML = `
  <p>Release Date : ${phone.releaseDate ? phone.releaseDate : 'no release date found'}</p>
  <p>Others : ${phone.others ? phone.others.Bluetooth : 'no bluetooth found'}</p>
  `;
}

loadPhones('oppo'); */

//-------------Module introduction Different way to Create Object(module-35-start)---------
//-------------create object using object literals---------------
/* const player = {};
player.name = 'rafiq'; //this called property
player.age = 34;
player.job = function(){  //this called method
  //console.log('swing your ball');
}
//console.log(player);
player.job(); */
//------------Another way declare object----------
/* const student = 
{
  name : 'opu',
  age : 23,
  ball : function(){
   // console.log('swing the bll');
  },
  salary : 10000
} */

//------------object-constructor---------
//const person = new Object();
//console.log(person);

//------------object-create-method---------
//const atel = Object.create(student);
//console.log(atel);

//-----------using-class-create-object--------------------
/* class persons{
  name = 'opu';
  address = 'uttara';
  constructor(age)
  {
    this.age = age;
  }
}
const person1 = new persons(23); */
//console.log(person1);

//-----------using-function-create-object--------------------
/* function car(model, color)
{
  this.model = model;
  this.color = color;
}
const tesla = new car('opu', 'red'); */
//console.log(tesla);

//------------------Object method access and set property values----------------
/* const student = {
  name : 'opu',
  money : 5000,
  study : 'cse',
  subjects : ['c', 'c++', 'c#', 'java'],

  exam : function(){
    return this.name + ' is participating in this exam';
  },
  improveExam : function(subject){
    this.exam();
    return `${this.name} is taking exam on ${subject}`
  },
  treatDey : function(amount, tips){
    //set value
    this.money = this.money - amount - tips;
    return this.money;
  }
} */
/*const output = student.exam();
//console.log(output);
const reExam = student.improveExam('c#');
//console.log(reExam);
const remaining = student.treatDey(900, 100);
console.log(remaining);
const dolaRemaining = student.treatDey(500, 50);
console.log(dolaRemaining); */
//------------see-keys--------------
const bottle = {color : 'red', weight : '5kg', price : 50, isCleaned : true}
const keys = Object.keys(bottle);
//console.log(keys);
//------see-object-values--------
const values = Object.values(bottle);
//console.log(values);

//---------using entries see key and value together in array into array or multidimentional array---
const fullObject = Object.entries(bottle);
console.log(fullObject);

//---------using delete---delete key and values-----------
console.log(bottle);
//----------seal dile existing propertyr value change korke pare but new property add kora jabe na---

Object.seal(bottle);
delete bottle.isCleaned;
bottle.color = 'yellow';
console.log(bottle);