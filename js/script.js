
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

var btnBasket = document.getElementById('basket-btn');
var goodsListSection = document.getElementById('goods-list-section');

class GoodsItem {
    constructor (title, price, src) {
        this.title = title;
        this.price = price;
        this.src = src;
    }
    
    render () {
        return `<div class="goods-list__product-box">
        <span class="goods-list__product-box__name">${this.title}</span>
        <div class="goods-list__product-box__price">${this.price}</div>
        <img class="goods-list__product-box__img" src=${this.src} width=" 150px" height="100px" alt="">
        <input type="submit" value="X" class="goods-list-item__product-box__delete" onclick="deleteProductStringBasket()">
        </div>`
    }
}


class GoodsList {
    constructor () {
        this.goods = [];
    }
     
    fetchGoods () {
        this.goods = [
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
    }

    
}


class Cart {
    constructor () {
        this.goods = [];
    }
    
    addCartItem(cartItem) {
        this.goods.push(cartItem);
    }

    
    totalCartPrice() {
        let totalPrice = document.getElementById('goods-list__total'); 
        let sum = 0;
        this.goods.forEach (good => { 
            sum += good.price
        });
        totalPrice.innerText = `Итого  ${sum} рублей`;
    }

    render() {
        let listHtml = '';
        let goodsList = document.getElementById('goods-list__product-box'); 
        
        this.goods.forEach (good => {
            const goodItem = new GoodsItem (good.title, good.price, good.img);
            listHtml += goodItem.render();
        });
        goodsList.innerHTML = listHtml;
    }
}

let renderCart = () => {
    const list =  new GoodsList ();
    const cart = new Cart();

    list.fetchGoods();
    cart.addCartItem(list.goods[0]);
    cart.addCartItem(list.goods[1]);
    cart.addCartItem(list.goods[2]);
    cart.addCartItem(list.goods[3]);
    cart.addCartItem(list.goods[4]);
    cart.addCartItem(list.goods[5]);
    cart.addCartItem(list.goods[6]);
    cart.addCartItem(list.goods[7]);
    cart.addCartItem(list.goods[8]);
    cart.addCartItem(list.goods[9]);
    cart.render();

    cart.totalCartPrice();
    goodsListSection.style.display = 'block';
};

btnBasket.addEventListener('click', renderCart);
window.addEventListener('click', function (evt) {console.log(evt)});


