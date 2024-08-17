const data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    img: 'https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg',
    price: 74,
    cat: 'Dress',
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: 'https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg',
    price: 74,
    cat: 'Dress',
  },
  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: 'https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg',
    price: 40,
    cat: 'Sport',
  },
  {
    id: 3,
    name: 'Breitling Superocean Heritage',
    img: 'https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg',
    price: 200,
    cat: 'Luxury',
  },
  {
    id: 4,
    name: 'Casio Classic Resin Strap ',
    img: 'https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg',
    price: 16,
    cat: 'Sport',
  },
  {
    id: 5,
    name: 'Garmin Venu Smartwatch ',
    img: 'https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg',
    price: 74,
    cat: 'Casual',
  },
];

const products = document.querySelector('.products');
const searchInput = document.querySelector('.search');
const cats = document.querySelector('.cats');
const priceRange = document.querySelector('.priceRange');
const priceValue = document.querySelector('.priceValue');

const displayProducts = (filtredProducts) => {
  products.innerHTML = filtredProducts.map(
    (ele, idx) =>
      `
        <div class="product" id=${idx}>
                <img
                  src=${ele.img} 
                  alt=${ele.name}
                />
                <h3>${ele.name}</h3>
                <span> $ ${ele.price}</span>
              </div>
    `
  );
};

searchInput.addEventListener('keyup', (e) => {
  const value = e.target.value.toLowerCase();
  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});

const setCategories = () => {
  const allCategories = data.map((item) => item.cat);
  const categories = [
    'All',
    ...allCategories.filter((item, idx) => {
      return allCategories.indexOf(item) === idx;
    }),
  ];
  cats.innerHTML = categories
    .map(
      (item) => `
    <span class="cat">${item}</span>
  `
    )
    .join('');
  cats.addEventListener('click', (e) => {
    const selectedCat = e.target.textContent;
    selectedCat === 'All'
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectedCat));
  });
};

const setPrice = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceValue.textContent = '$' + maxPrice;
  priceRange.addEventListener('input', (e) => {
    displayProducts(data.filter((item) => item.price <= e.target.value));
  });
};
displayProducts(data);
setCategories();
setPrice();
