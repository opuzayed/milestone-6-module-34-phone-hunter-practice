const loadPhones = async(searchText) =>
{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}
const displayPhones = phones => {
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.textContent = '';
    //---display-10-phones -only-----
    phones = phones.slice(0, 10);
    //--display-no-phones found--
    const noPhone = document.getElementById('no-found-message');
    if(phones.length == 0)
    {
      noPhone.classList.remove('d-none');
    }
    else{
      noPhone.classList.add('d-none');
    }
   
    //--display-all-phones---
    phones.forEach(phone =>{
    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('col');
    phoneDiv.innerHTML = `
    <div class="card p-4">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${phone.phone_name}</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                      </div>
    `;
    phonesContainer.appendChild(phoneDiv);
    });
    //stop loader
    toggleSpinner(false);
}
//-------------handle-search-button-click---------
document.getElementById('btn-search').addEventListener('click', function(){
  //spinner - loading
  toggleSpinner(true);
    const searchfield = document.getElementById('search-field');
    const searchText = searchfield.value;
    loadPhones(searchText);
});
//------loading function-------
const toggleSpinner = isLoading => {
  const loaderDiv = document.getElementById('loader');
  if(isLoading)
  {
    loaderDiv.classList.remove('d-none');
  }
  else{
    loaderDiv.classList.add('d-none');
  }
}
//loadPhones();