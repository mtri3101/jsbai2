var isVip = false

//toán tử so sánh
console.log (5 == 4);
console.log (4 != 4);
console.log (5 >= 4);
console.log (4 == '4');
console.log (4 === '4');

//== chỉ so sánh giá trị
//=== vừa so sánh giá trị, vừa so sánh kiểu dữ liệu

console.log (4 != '4');
console.log (4 !== '4');

//toán tử logic !, &&, ||
console.log(!isVip);

console.log(5 > 4 && 2 === 3); //false
console.log(5 > 4 || 2 === 3);//true

// if(biểu thức điều kiện){
//     //code sẽ chạy khi đúng điều kiện
// } else {
//     //code sẽ chạy khi điều kiện sai
//     //nếu ko có else: đk đúng thì chạy, ko thì bỏ qua
// }



//Bài tập tính tiền phạt thẻ tín dụng
var creditCardBalance = 5000000;
var payment = 8000000;
var balance = creditCardBalance - payment;
if(balance < 0){
    var penalty = balance * 0.015 ;
}
console.log('số tiền phải trả tháng này', -penalty);

/*
input: creditcardBalance(số tiền phải trả); payment(khoản đã trả), 
output: penalty
process: 
    1. lấy input (creditCardBalance, payment)
    2. tính tiền nợ = creditCardBalance - payment
    3. tiền phạt =  tiền nợ * 1.5%
*/


//Bài tập tính tiền lương nhân viên
/*
input: hours (số giờ làm), tiền theo giờ (pay), tiền trả OT(rate)  
output: tổng lương(totalSalary)
process:
    1. xác định số giờ làm nếu trên 40 thì OT
    2. (OT - 40) * 1.5
*/

var hours = 45;
var pay = 40000;
var rate = hours - 40;
var totalSalary = pay * hours;
if (rate > 0){
    totalSalary = pay * hours + (rate * 1.5);
}
console.log('tiền lương tuần là', totalSalary)


//Bài tập tính điểm và xếp loại
/*
input: điểm toán (mathPoint), điểm lý (phyPoint), điểm hoá (chemPoint) 
output:điểm trung bình (avrPoint), xếp loại (classification)
process:
    1. tính điểm tb = (toán + lý + hoá)/3
    2. xếp loại
*/


var mathPoint = 1;
var phyPoint = 9;
var chemPoint = 3.5;
var avrPoint = (mathPoint + phyPoint + chemPoint)/3;
var classification = '';
if(avrPoint < 5){
    classification = 'Yếu';
} else if (avrPoint < 6.5){
    classification = 'TB';
} else if (avrPoint < 8.5){
    classification = 'Khá';
}else{
    classification = 'Giỏi'
}
console.log('Điểm trung bình là:',avrPoint + ' Xếp loại:', classification)


//Bài tập mua hàng
/*
input: đơn giá hàng (rate), số lượng mua (number), tiền giảm giá (discount)
output: số tiền phải trả (payment)
process: 
    1. số tiền phải trả = số lượng x đơn giá
    2. if số lượng > 100 => số tiền trả = 1. - discount x 0.08
                   > 120 => số tiền trả = 1. - discount x 0.12
*/

var rate = 1500;
var number = 70;
var payment ;
if (number <= 50){
    payment = rate * number;
} else if ( number <= 100){
    payment = 50 * price + (number - 50)*0.92;
}else {
    payment = 50 * price + 59*0.92 + (number - 100) * 0.88;
}
console.log ('Số tiền phải trả:', payment)


// Bài tập xuất 3 số theo thứ tự tăng dần 
/*
input : 3 số
output: sắp xếp thứ tự
process: 
    1. a > b > c
    2. a > c > b
    3. b > a > c
    4. b > c > a
    5. c > b > a
    6. c > a > b
*/
var a = 48;
var b = 23; 
var c = 21;
var max1;
var max2;
var max3;
if (a > b > c){
    a = max1;
    b = max2;
    c = max3;
}else if( a > c > b ){
    a = max1;
    b = max3;
    c = max2;
}else if (b > a>  c){
    b = max1;
    a = max2;
    c = max3;
}else if (b > c > a){
    b = max
}

var d = -2;
if(d < 0){
    d = -d;
    console.log(d)
} else {
    console.log(d, 'đã là số dương');
}

// toán tử 3 ngôi từ bài tập d
d === d < 0 ? -d : d;
// if(d < 0){
//     d = -d;
//     console.log(d)
// } else {
//     console.log(d, 'đã là số dương');
// }


var isLogin = false;
var message = "";
message = isLogin === true ? "Xin chào" : "Vui lòng đăng nhập";



var month = 2;

switch(month){
    case 1:
}