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

catagoreButton();
