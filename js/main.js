// bài 1






function tinhdiemsv(){
    var selectP = document.getElementById("selectPerson").value;
    var selectAre =document.getElementById("selectArea").value;
    var diemchuan = Number(document.getElementById("diemchuan").value)
    var diem1 = Number(document.getElementById("diem1").value);
    var diem2 = Number(document.getElementById("diem2").value);
    var diem3 = Number(document.getElementById("diem3").value);
    console.log(selectP,selectAre,diemchuan,diem1,diem2,diem3);
var diemkv =0;
var diemdt =0;
var diemt =0;


if(selectAre == "A"){
    diemkv = 2;
}else if(selectAre == "B"){
    diemkv = 1;
}else if(selectAre == "C"){
    diemkv = 0.5;
}else {
    diemkv = 0;
}
if(selectP == 1){
    diemdt =2.5; 
}else if(selectP == 2){
    diemdt =1.5; 
}else if(selectP == 3){
    diemdt =1; 
}else {
    diemdt =0;
}
  
diemt = diem1 +diem2 + diem3 + diemkv + diemdt

if(diem1 > 0 && diem2 > 0 && diem3 >0 && diemt >= diemchuan){
    document.getElementById("txtResulttinh").innerHTML ="Bạn đã đậu. Tổng điểm là" +"\n" + diemt;
}else{
    document.getElementById("txtResulttinh").innerHTML ="Bạn đã trượt. Tổng điểm là" +"\n" + diemt;
}

}   

document.getElementById("btntinh").onclick = tinhdiemsv;


