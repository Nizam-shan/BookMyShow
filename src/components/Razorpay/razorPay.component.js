const launchRazorPay = () => {
    let options = {
       key: "rzp_test_1jetrYAgo8VSXc",
       amount: 500*100,
       currency: "INR",
       name: "BOOK MY SHOW",
       description : "Movies Purchase on Rental",
       images:"https://in.bmscdn.com/webin/common/icons/logo.svg",
       handler:() => { //this will be triggered when the payment is done
          alert ("Payment Done")
       },
       theme : {color :"#c4242d"}  // theme we changed 
    };
    let rzp = new window.Razorpay(options) // window we are accessing scriptfile index.html
    rzp.open();
 };

 export default launchRazorPay;