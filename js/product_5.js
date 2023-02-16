var url = [
  '../../img/product_5/product_1.jpg',
  '../../img/product_5/product_2.jpg',
  '../../img/product_5/product_3.jpg',
  '../../img/product_5/product_4.jpg',
  '../../img/product_5/product_5.jpg'
];

var fullImg = document.querySelector('.img');
var imgs = document.querySelectorAll('.btn-ctrl');

var pictur = function (photo, photoes) {
  photo.addEventListener('click', function () {
    fullImg.src = photoes;
  });
};


for (var i = 0; i < imgs.length; i++) {
  pictur (imgs[i], url[i]);
}
