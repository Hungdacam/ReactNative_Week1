// Steven muốn xây dựng một công cụ tính tiền boa rất đơn giản mỗi khi anh ấy đi ăn ở nhà hàng. 
// Ở đất nước của anh ấy, người ta thường boa 15% nếu giá trị hóa đơn nằm trong khoảng từ 50 đến 300.
// Nếu giá trị khác, tiền boa là 20%.

// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)

var billValue=275;
var tips= billValue>=50 && billValue<=300? billValue*0.15: billValue*0.2;
console.log(tips);  

// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25” 

var result = `The bill was ${billValue}, the tip was ${tips}, and the total value ${billValue+tips}`;
console.log(result);
