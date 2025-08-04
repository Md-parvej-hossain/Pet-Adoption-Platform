const catagoreButton = async () => {
  const respons = await fetch(
    'https://openapi.programming-hero.com/api/peddy/categories'
  );
  const data = await respons.json();
  buttonText(data.categories);
};

const buttonText = catagore => {
  const continer = document.getElementById('button-catagore');
  catagore.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `
      <button class="btn btn-neutral text-xl">
      <img class="w-8" src="${item.category_icon}" alt="">
      ${item.category}</button>

    `;
    continer.append(div);
  });
};

const loadeAllFetchData = async () => {
  const respons = await fetch(
    'https://openapi.programming-hero.com/api/peddy/pets'
  );
  const data = await respons.json();
  loadeDataDesplay(data.pets);
};

const loadeDataDesplay = data => {
  const catdContiner = document.getElementById('all-Card');

  data.forEach(item => {
    const {
      breed,
      category,
      date_of_birth,
      gender,
      image,
      petId,
      pet_details,
      pet_name,
      price,
      vaccinated_status,
    } = item;
    const continer = document.createElement('div');
    continer.classList.add = ('card', 'bg-base-100', 'shadow-sm', 'p-4');
    continer.innerHTML = `
    
  <figure class=" pt-10">
    <img
      src=${image}
      class="rounded-xl w-full h-[224px]" />
  </figure>
  <div class="py-4 ">
    <h2 class="card-title">${category ? category : 'Not Avalable'}</h2>
    <p>Namr : ${pet_name ? pet_name : 'Not Avalable'}</p>
    <p>Price :${price ? price : 'Not Avalable'}</p>
    <p>Vaccinated : ${
      vaccinated_status ? vaccinated_status : 'Not Avalable'
    }</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>

  <div class="flex items-center justify-between">
  <p><img>  https://icons8.com/icon/83166/facebook-like</p>
  <p>b2</p>
  <p>b3</p>
  </div>


    
    `;
    console.log(item);
    catdContiner.append(continer);
  });
};
const loadingSpiner = () => {};
catagoreButton();
loadeAllFetchData();
