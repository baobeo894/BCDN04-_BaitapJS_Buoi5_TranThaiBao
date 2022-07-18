// bài 1
function tinhdiemsv() {
    var selectP = document.getElementById("selectPerson").value;
    var selectAre = document.getElementById("selectArea").value;
    var diemchuan = Number(document.getElementById("diemchuan").value)
    var diem1 = Number(document.getElementById("diem1").value);
    var diem2 = Number(document.getElementById("diem2").value);
    var diem3 = Number(document.getElementById("diem3").value);
    console.log(selectP, selectAre, diemchuan, diem1, diem2, diem3);
    var diemkv = 0;
    var diemdt = 0;
    var diemt = 0;


    if (selectAre == "A") {
        diemkv = 2;
    } else if (selectAre == "B") {
        diemkv = 1;
    } else if (selectAre == "C") {
        diemkv = 0.5;
    } else {
        diemkv = 0;
    }
    if (selectP == 1) {
        diemdt = 2.5;
    } else if (selectP == 2) {
        diemdt = 1.5;
    } else if (selectP == 3) {
        diemdt = 1;
    } else {
        diemdt = 0;
    }

    diemt = diem1 + diem2 + diem3 + diemkv + diemdt

    if (diem1 > 0 && diem2 > 0 && diem3 > 0 && diemt >= diemchuan) {
        document.getElementById("txtResulttinh").innerHTML = "Bạn đã đậu. Tổng điểm là" + "\n" + diemt;
    } else {
        document.getElementById("txtResulttinh").innerHTML = "Bạn đã trượt. Tổng điểm là" + "\n" + diemt;
    }

}

document.getElementById("btntinh").onclick = tinhdiemsv;


// bai 2
function tinhtiendien() {
    var hoten = document.getElementById("Ten").value;
    var sokw = Number(document.getElementById("kw").value);
    console.log(hoten, sokw);

    var sokw1 = 50;
    var sokw2 = 100;
    var sokw3 = 150;
    var sokw4 = 200;
    var tien = 0;
    if (sokw <= 50 && sokw > 0) {
        tien = 500 * sokw;
        document.getElementById("tiendien").innerHTML = "Họ tên :" + "\n" + hoten + "\n.Tiền điện" + "\n" + tien.toLocaleString();
    } else if (sokw > 50 && sokw <= 100) {
        tien = 500 * sokw1 + (sokw - sokw1) * 650;
        document.getElementById("tiendien").innerHTML = "Họ tên :" + "\n" + hoten + "\n.Tiền điện" + "\n" + tien.toLocaleString();
    } else if (sokw > 100 && sokw <= 150) {
        tien = 500 * sokw1 + (sokw2 - sokw1) * 650 + (sokw - sokw2) * 850
        document.getElementById("tiendien").innerHTML = "Họ tên :" + "\n" + hoten + "\n.Tiền điện" + "\n" + tien.toLocaleString()
    } else if (sokw > 150 && sokw <= 200) {
        tien = 500 * sokw1 + (sokw2 - sokw1) * 650 + (sokw3 - sokw2) * 850 + (sokw - sokw3) * 1100;
        document.getElementById("tiendien").innerHTML = "Họ tên :" + "\n" + hoten + "\n.Tiền điện" + "\n" + tien.toLocaleString()

    } else {
        tien = 500 * sokw1 + (sokw2 - sokw1) * 650 + (sokw3 - sokw2) * 850 + (sokw - sokw3) * 1100 + (sokw - sokw4) * 1300
        document.getElementById("tiendien").innerHTML = "Họ tên :" + "\n" + hoten + "\n.Tiền điện" + "\n" + tien.toLocaleString()
    }


}
document.getElementById("tinhtien").onclick = tinhtiendien;



// bai 3
function tinhtiendien() {
    var hoten = document.getElementById("hoten").value;
    var thunhap = Number(document.getElementById("thunhap").value);
    var songuoi = Number(document.getElementById("songuoi").value)
    console.log(hoten, thunhap, songuoi);
    var thunhapchiuthue = thunhap - 4000000 - songuoi * 1600000;
    if (thunhapchiuthue > 0 && thunhapchiuthue <= 60000000) {
        tienthue = thunhapchiuthue * 5 / 100;
        document.getElementById("tienthue").innerHTML = "Họ tên:" + "\n" + hoten + "Tiền thuế thu nhập cá nhân:" + tienthue.toLocaleString();
    } else if (thunhapchiuthue > 60000000 && thunhapchiuthue <= 120000000) {
        tienthue = thunhapchiuthue * 10 / 100;
        document.getElementById("tienthue").innerHTML = "Họ tên:" + "\n" + hoten + "Tiền thuế thu nhập cá nhân:" + tienthue.toLocaleString();
    } else if (thunhapchiuthue > 120000000 && thunhapchiuthue <= 210000000) {
        tienthue = thunhapchiuthue * 15 / 100;
        document.getElementById("tienthue").innerHTML = "Họ tên:" + "\n" + hoten + "Tiền thuế thu nhập cá nhân:" + tienthue.toLocaleString();
    } else if (thunhapchiuthue > 210000000 && thunhapchiuthue <= 384000000) {
        tienthue = thunhapchiuthue * 20 / 100;
        document.getElementById("tienthue").innerHTML = "Họ tên:" + "\n" + hoten + "Tiền thuế thu nhập cá nhân:" + tienthue.toLocaleString();
    } else if (thunhapchiuthue > 384000000 && thunhapchiuthue <= 624000000) {
        tienthue = thunhapchiuthue * 25 / 100;
        document.getElementById("tienthue").innerHTML = "Họ tên:" + "\n" + hoten + "Tiền thuế thu nhập cá nhân:" + tienthue.toLocaleString();
    } else if (thunhapchiuthue > 624000000 && thunhapchiuthue <= 960000000) {
        tienthue = thunhapchiuthue * 25 / 100;
        document.getElementById("tienthue").innerHTML = "Họ tên:" + "\n" + hoten + "Tiền thuế thu nhập cá nhân:" + tienthue.toLocaleString();
    } else if (thunhapchiuthue > 960000000) {
        tienthue = thunhapchiuthue * 20 / 100;
        document.getElementById("tienthue").innerHTML = "Họ tên:" + "\n" + hoten + "Tiền thuế thu nhập cá nhân:" + tienthue.toLocaleString();
    } else {
        tienthue = 0;
        document.getElementById("tienthue").innerHTML = "Họ tên:" + "\n" + hoten + "Tiền thuế thu nhập cá nhân:" + tienthue;
    }


}
document.getElementById("tinhtienthue").onclick = tinhtiendien;



// bai 4
// NHA DAN
const PHI_XU_LY_HD_ND = 4.5; 
const PHI_DV_CO_BAN = 20.5;
const THUE_KENH_CAO_CAP_ND = 7.5;
// DOANH NGHIEP
const PHI_XU_LY_HD_DN =15;
const THUE_KENH_CAO_CAP_DN = 50;
const GIA_10_KET_NOI_DAU =75;

function tinhtiencap() {
    var choncap = document.getElementById("choncap").value;
    var makhachhang = document.getElementById("makhachhang").value;
    var sokenh = Number(document.getElementById("sokenh").value);
    var soketnoi = Number(document.getElementById("soketnoi").value);

    console.log(choncap,makhachhang,sokenh,soketnoi);
    
    
    
    if(choncap == "nhadan"){
        tiencap = PHI_XU_LY_HD_ND + PHI_DV_CO_BAN + THUE_KENH_CAO_CAP_ND * sokenh;
        document.getElementById("tiencap").innerHTML = "Mã khách hàng" + "\n" + makhachhang + "\nTiền cáp:" + "\n$" + tiencap.toLocaleString();
    }else {
        if( soketnoi > 0 && soketnoi <= 10){
            tiencap = PHI_XU_LY_HD_DN + THUE_KENH_CAO_CAP_DN * sokenh + soketnoi*GIA_10_KET_NOI_DAU;
            document.getElementById("tiencap").innerHTML = "Mã khách hàng" + "\n" + makhachhang + "\nTiền cáp:" + "\n$"+tiencap.toLocaleString();
        }else {
            tiencap = PHI_XU_LY_HD_DN + THUE_KENH_CAO_CAP_DN * sokenh + (soketnoi-10) * 5 + GIA_10_KET_NOI_DAU*10;
            document.getElementById("tiencap").innerHTML = "Mã khách hàng" + "\n" +makhachhang + "\nTiền cáp:" + "\n$" + tiencap.toLocaleString();
        }
    }
    
   
}
document.getElementById("tinhtiencap").onclick = tinhtiencap;
