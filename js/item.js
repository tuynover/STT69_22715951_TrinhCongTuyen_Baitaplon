$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const product_nam = donam.find(product => product.id == productId);
    const product_nu = donu.find(product => product.id == productId);

    if (product_nam) {
        let title = `${product_nam.name}`;
        $('#title').html(title);
        let img = `<img src="${product_nam.details}">`;
        $('#pic').html(img);
        let productDetailsHTML = `<p class="itemName">${product_nam.name}</p>`;
        $('#product-title').html(productDetailsHTML);
        let priceHTML = `Giá hiện tại: <span>${product_nam.price}</span>`;
        $('#price').html(priceHTML);
    } else if (product_nu) {
        let title = `${product_nu.name}`;
        $('#title').html(title);
        let img = `<img src="${product_nu.details}">`;
        $('#pic').html(img);
        let productDetailsHTML = `<p class="itemName">${product_nu.name}</p>`;
        $('#product-title').html(productDetailsHTML);
        let priceHTML = `Giá hiện tại: <span>${product_nu.price}</span>`;
        $('#price').html(priceHTML);
    } else {
        console.log('Không tìm thấy sản phẩm với ID đã cho.');
    }

});
$("#btnThemVaoGioHang").click(function(e) {
    e.preventDefault();
    let imgURL = $("#pic img").attr("src");
    let tensp = $("#product-title").text(); 
    let soluong = $("#quantity").val();
    
    let dongiaString = $('#price span').text().trim().replace(/\D/g, ''); 
    let dongia = parseInt(dongiaString);
    
    let gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];
    
    gioHang.push({ imgURL, tensp, soluong, dongia });
    
    localStorage.setItem("gioHang", JSON.stringify(gioHang));
    
    alert("Thêm vào giỏ hàng thành công");
});



///

$(document).ready(function () {
    // Khởi tạo giỏ hàng từ localStorage
    let gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];
    
    // Hiển thị giỏ hàng
    gioHang.forEach(function(sanPham, index) {

        let newRow = "<tr>" + 
                         "<td>" + (index + 1) + "</td>" + 
                         "<td><img src='" + sanPham.imgURL + "' style='max-width:150px;height:auto;'></td>" + 
                         "<td>" + sanPham.tensp + "</td>" + 
                         "<td>" + sanPham.soluong + "</td>" + 
                         "<td>" + sanPham.dongia.toLocaleString() + "</td>" + 
                         "<td>" + (sanPham.soluong * sanPham.dongia).toLocaleString() + "</td>" + 
                         "<td>Đang xử lý</td>" +
                         "<td><button class='btn btn-delete btn-danger mt-4'>Xóa</button></td>" +
                     "</tr>";
        $("#datarow").append(newRow); 
    });

    // Xử lý sự kiện xóa sản phẩm
    $(document).on("click", ".btn-delete", function() {
        $(this).closest("tr").remove();
        // Cập nhật lại giỏ hàng trong localStorage
    });

    // Xử lý sự kiện thanh toán
    $("#btnthanhtoan").click(function() {
        // Kiểm tra xem người dùng đã đăng nhập chưa
        var user = localStorage.getItem("username");
        if (!user) {
            alert("Vui lòng đăng nhập để thanh toán!");
            window.location.href = "login.html"; // Chuyển hướng tới trang login.html
            return; // Dừng lại nếu chưa đăng nhập
        }
    
        // Nếu người dùng đã đăng nhập, tiếp tục xử lý thanh toán
        if (gioHang.length === 0) {
            alert("Giỏ hàng rỗng, không thể thanh toán!");
            return; // Dừng nếu giỏ hàng rỗng
        }
    
        let tongtien = parseFloat(localStorage.getItem("tongtien")) || 0;   // Biến lưu tổng tiền
        let tongsoluong = parseInt(localStorage.getItem("tongsoluong")) || 0; // Biến lưu tổng số lượng sản phẩm
    
        // Tính toán tổng tiền và tổng số lượng
        gioHang.forEach(function(sanPham) {
            let thanhtien = sanPham.soluong * sanPham.dongia;
            let soluong= parseInt(sanPham.soluong);
            tongtien += thanhtien;
            tongsoluong += soluong;
        });
    
        // Lưu tổng tiền và tổng số lượng vào localStorage sau khi thanh toán
        localStorage.setItem("tongtien", tongtien);
        localStorage.setItem("tongsoluong", tongsoluong);
    
        // Xóa giỏ hàng và hiển thị thông báo
        localStorage.removeItem('gioHang'); // Điều này sẽ xóa giỏ hàng
        $("#datarow").empty(); // Xóa tất cả dòng trong bảng giỏ hàng
    
        alert("Thanh toán thành công!");
    });

});


