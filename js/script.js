
const goods = [
    { title: 'Bleu De Chanel Eau De Parfum', price: 8000, img: 'img/pic1.jpg' },
    { title: 'Giorgio Armani Si', price: 7000, img: 'img/pic2.jpg' },
    { title: 'Calvin Klein Be', price: 5000, img: 'img/pic3.jpg' },
    { title: 'Chanel Coco Madmoiselle', price: 7500, img: 'img/pic4.jpg' },
    { title: 'Dolche & Gabbana Imperatrice', price: 6500, img: 'img/pic5.jpg' },
    { title: 'Giorgio Armani Sun Di Gioia', price: 5500, img: 'img/pic6.jpg' },
    { title: 'Chanel Coco Noir', price: 7600, img: 'img/pic7.jpg' },
    { title: 'Marc Jacobs Daisy', price: 4500, img: 'img/pic8.jpg' },
    { title: 'Vera Wang For Men', price: 8300, img: 'img/pic9.jpg' },
    { title: 'Leau Laurissi eau de poeme', price: 6700, img: 'img/pic10.jpg' },
  ];
  
  const renderGood = (item, img) =>
             `<div class="product-item">
                <img src="${img}" alt="image" class="product-img">
                <h3 class="product-title">${item.title}</h3>
                <p class="product-price">${item.price} руб</p>
                <button class="by-btn">В корзину</button>
            </div>`;

const renderGoods = list => {
    document.querySelector('.goods-list').insertAdjacentHTML('beforeend', list.map(item => renderGood(item, item.img)).join(''));
};

renderGoods(goods);
  