$(document).ready(function () {

    let productCount = 0;

    donu.forEach(function (product) {
        productCount++;

        if (productCount % 4 === 1) {
            $("#listProduct_nu").append('<div class="row"></div>');
        }
        let themnu = `
            <div class="product-small col has-hover" id="${product.id}">
                <div class="col-inner">
                    <div class="badge-container absolute left top z-1">
                    </div>
                    <div class="product-small box">
                        <div class="box-image">
                            <div class="image-zoom_in">
                                <img class="default-image" width="300" height="300" src="${product.details}" alt="Default Image">
                            </div>
                        </div>
                        <div class="box-text box-text-products text-center grid-style-2">
                            <div class="title-wrapper">
                            <p class="name">
                                <a href="chitietsanpham.html" class="product-link" data-product-id="${product.id}">${product.name}</a>
                            </p>
                            </div>
                            <div class="price-wrapper">
                                <span class="price"><span><bdi>${product.price}&nbsp;<span>đ</span></bdi></span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        $("#listProduct_nu .row:last-child").append(themnu);
    });

    donam.forEach(function (product) {
        productCount++;

        if (productCount % 4 === 1) {
            $("#listProduct_nam").append('<div class="row"></div>');
        }
        let themnam = `
            <div class="product-small col has-hover" id="${product.id}">
                <div class="col-inner">
                    <div class="badge-container absolute left top z-1">
                    </div>
                    <div class="product-small box">
                        <div class="box-image">
                            <div class="image-zoom_in">
                                <img class="default-image" width="300" height="300" src="${product.details}" alt="Default Image">
                            </div>
                        </div>
                        <div class="box-text box-text-products text-center grid-style-2">
                            <div class="title-wrapper">
                            <p class="name">
                                <a href="chitietsanpham.html" class="product-link" data-product-id="${product.id}">${product.name}</a>
                            </p>
                            </div>
                            <div class="price-wrapper">
                                <span class="price"><span><bdi>${product.price}&nbsp;<span>đ</span></bdi></span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        $("#listProduct_nam .row:last-child").append(themnam);
    });

    $('.product-link').click(function(e) {
        e.preventDefault();
        let productId = $(this).data('product-id');
        window.location.href = 'chitietsanpham.html?id=' + productId;
    });


});

const donam = [
    {
        "id": 1,
        "name": "Áo thun cổ bẻ dài tay bé trai Rabity x ELLE Kids- designed in Paris 82021",
        "price": "119,500",
        "details": "../img/products/donam1.png",
    },
    {
        "id": 2,
        "name": "Bộ thun sát nách Mickey bé trai Rabity 5710",
        "price": "239,000",
        "details": "../img/products/donam2.png",
    },
    {
        "id": 3,
        "name": "Áo dài tay bé trai Rabity x ELLE Kids - designed in Paris 80011",
        "price": "124,500",
        "details": "../img/products/donam3.png",
    },
    {
        "id": 4,
        "name": "Áo len gile bé trai / bé gái Rabity 63328",
        "price": "149,000",
        "details": "../img/products/donam4.png",
    },
    {
        "id": 5,
        "name": "Áo thun ngắn tay Capybara bé trai/bé gái Rabity 900.070",
        "price": "125,300",
        "details": "../img/products/donam5.png",
    },
    {
        "id": 6,
        "name": "Áo thun ngắn tay Spider-man bé trai Rabity 500.035",
        "price": "169,000",
        "details": "../img/products/donam6.png",
    },
    {
        "id": 7,
        "name": "Áo thun ngắn tay bé trai Rabity x ELLE Kids - designed in Paris 83023",
        "price": "174,300",
        "details": "../img/products/donam7.png",
    },
    {
        "id": 8,
        "name": "Quần short thô Captain America bé trai Rabity 530.005",
        "price": "229,000",
        "details": "../img/products/donam8.png",
    }
]

const donu = [
    {
        "id": 9,
        "name": "Đầm váy thun thỏ xinh ngắn tay bé gái Rabity 950.040",
        "price": "139,300",
        "details": "../img/products/donu1.png",
    },
    {
        "id": 10,
        "name": "Đầm váy nhung dài tay Minnie bé gái Rabity 551.004",
        "price": "399,000",
        "details": "../img/products/donu2.png",
    },
    {
        "id": 11,
        "name": "Đầm váy công chúa ngôi sao sát nách bé gái Rabity 953.010",
        "price": "299,000",
        "details": "../img/products/donu3.png",
    },
    {
        "id": 12,
        "name": "Đầm váy thô ngắn tay caro bé gái Rabity 950.045",
        "price": "239,200",
        "details": "../img/products/donu4.png",
    },
    {
        "id": 13,
        "name": "Đầm váy voan công chúa ngắn tay bé gái Rabity 93618",
        "price": "258,300",
        "details": "../img/products/donu5.png",
    },
    {
        "id": 14,
        "name": "Đầm váy voan phối ren ngắn tay bé gái Rabity 92502",
        "price": "159,600",
        "details": "../img/products/donu6.png",
    },
    {
        "id": 15,
        "name": "Đầm váy phối yếm liền áo bé gái Rabity 956.001",
        "price": "349,000",
        "details": "../img/products/donu7.png",
    },
    {
        "id": 16,
        "name": "Chân váy jean dài bé gái Rabity 955.014",
        "price": "499,000",
        "details": "../img/products/donu8.png",
    }
]
