let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}

let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}

var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    

    const descriptions = {
        '1': {
            'image': 'images/tr.jpeg',
            'name': 'Cake Tiramisu' ,
            'price': 'Harga: Rp 80.000',
            'desc': 'Perpaduan rasa kopi, mascarpone, dan kakao menciptakan harmoni rasa yang tak terlupakan.Lapisan ladyfingers yang direndam kopi berpadu sempurna dengan krim mascarpone yang lembut, menghasilkan tekstur yang lumer di mulut.'
        },
        '2': {
            'image': 'images/blog-img2.png',
            'name': 'Cake Caramel',
            'price': 'Harga: Rp 70000',
            'desc': 'Perpaduan sempurna antara lembutnya sponge cake dan manisnya saus karamel yang meleleh di mulut akan membuat setiap gigitan terasa begitu istimewa.'
        },
        '3': {
            'image': 'images/gr.jpeg',
            'name': 'Cake Greentea',
            'price': 'Harga: Rp 85.ooo',
            'desc': 'Cake ini dipanggang dengan sempurna sehingga menghasilkan tekstur yang lembut, lembab, dan tidak kering.frosting green tea kami dibuat dengan bahan-bahan terbaik, menghasilkan rasa yang creamy dan tidak terlalu manis.'
        },
        '4': {
            'image': 'images/blog-img1.png',
            'name': 'Cup Cake Vanila ',
            'price': 'Harga: Rp 45.000',
            'desc': 'Rasa vanila yang manis dan harum memberikan sensasi klasik yang tak terlupakan.Dihiasi dengan springkel warna-warni yang ceria dan menarik, membuat cupcake ini semakin menggugah selera. '
        },
        '5': {
            'image': 'images/ld.jpg',
            'name': 'Kue Kering Lidah Kucing',
            'price': 'Harga: Rp 35.000',
            'desc': 'Selain rasa klasik manis, kue lidah kucing kini hadir dalam berbagai varian rasa menarik, seperti cokelat, keju, matcha, dan pandan. Hal ini membuat kue ini semakin digemari oleh berbagai kalangan.'
        },
        '6': {
            'image': 'images/keju.jpg',
            'name': 'Kue Kering Kastengel ',
            'price': 'Harga: Rp 50.000',
            'desc': 'Perpaduan gurih keju cheddar dan sedikit rasa manis dari adonan menghasilkan sensasi rasa yang tak terlupakan.Gigitan pertama kastengel akan langsung disambut dengan teksturnya yang renyah dan mudah lumer di mulut. '
        },
        '7': {
            'image': 'images/kd.jpg',
            'name': 'Kue Kering Bunga Dahlia',
            'price': 'Harga: Rp 45.000',
            'desc': 'Kue ini memiliki tekstur yang renyah, rasa yang manis, dan aroma yang harum, sehingga membuat siapapun yang mencicipinya akan ketagihan.Kue kering bunga dahlia tidak hanya lezat, tetapi juga cantik dan instagramable.  '
        },
        '8': {
            'image': 'images/ns.jpeg',
            'name': 'Kue Nastar',
            'price': 'Harga: Rp 55.000',
            'desc': 'Nastar Klasik kami memiliki tekstur yang renyah di luar dan lumer di mulut, memberikan sensasi makan yang tak terlupakan.Setiap kue dibuat dengan tangan yang terampil dan penuh perhatian, memastikan detail dan kualitas terbaik.'
        },

    };

    const productDescription = descriptions[id];

    if (productDescription) {
        document.getElementById('product-image').src = productDescription.image;
        document.getElementById('product-name').innerText = productDescription.name;
        document.getElementById('product-price').innerText = productDescription.price;
        document.getElementById('product-desc').innerText = productDescription.desc;
    } else {
        document.getElementById('product-description').innerText = 'Produk tidak ditemukan.';
    }
});
function goBack() {
    window.history.back();
}


var swiper = new Swiper(".blogs-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextE1 :".swiper-button-next",
        prevE1 :".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });

  var swiper = new Swiper(".review-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });