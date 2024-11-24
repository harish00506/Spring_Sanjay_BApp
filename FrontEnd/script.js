// script.js

async function createOrder(){
    console.log("---Order creation started");
    const response = await fetch("http://localhost:8080/create-order", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phno: document.getElementById('phno').value,
            course: document.getElementById('course').value,
            amount: document.getElementById('amount').value,
            currency: "INR"
        })
    });

    const order = await response.json();
    console.log("--order creation completed--");
    return order;
}

document.getElementById('rzp-button1').onclick = async function(e) {
    const order = await createOrder();
    console.log(order);

    var options = {
        "key": "rzp_test_bruReKEm7v6Xw7",
        "amount": order.amount,
        "currency": "INR",
        "name": "Sanjay Patil",
        "description": "Course Payment",
        "order_id": order.razorPayOrderId,
        "receipt": order.email,
        "callback_url": "http://localhost:8080/handle-payment-callback",
        "prefill": {
            "name": order.name,
            "receipt": order.email,
            "contact": order.phno
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
    e.preventDefault();
}

























// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>SwiftPay - Secure Payment Gateway</title>
//     <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
//     <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
//     <style>
//         /* Custom Styles */
//         body {
//             background-image: url('https://example.com/your-background-image.jpg');
//             background-size: cover;
//             background-position: center;
//             font-family: Arial, sans-serif;
//             color: white;
//             line-height: 1.6;
//         }

//         .navbar {
//             background-color: rgba(0, 0, 0, 0.7);
//             padding: 15px 30px;
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//         }

//         .navbar h1 {
//             font-size: 2rem;
//             color: #ffffff;
//             font-weight: bold;
//         }

//         .navbar a {
//             font-size: 1.1rem;
//             text-transform: uppercase;
//             color: #ddd;
//             margin: 0 20px;
//             transition: color 0.3s ease;
//         }

//         .navbar a:hover {
//             color: #fff;
//         }

//         .form-container, .login-container {
//             background-color: rgba(255, 255, 255, 0.9);
//             padding: 25px;
//             border-radius: 10px;
//             max-width: 500px;
//             margin: 50px auto;
//             box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
//         }

//         .form-container input, .form-container select, .login-container input {
//             padding: 12px;
//             margin-bottom: 15px;
//             border-radius: 8px;
//             border: 1px solid #ddd;
//             width: 100%;
//             font-size: 1rem;
//             color: #333; /* Text color inside input fields */
//             background-color: #fff; /* White background to enhance text visibility */
//         }

//         .form-container input:focus, .form-container select:focus, .login-container input:focus {
//             outline: none;
//             border-color: #4C6EF5;
//             box-shadow: 0 0 10px rgba(76, 110, 245, 0.5);
//         }

//         .button {
//             background-color: #4C6EF5;
//             color: white;
//             padding: 12px;
//             font-size: 1.2rem;
//             border-radius: 8px;
//             border: none;
//             width: 100%;
//             transition: background-color 0.3s ease;
//         }

//         .button:hover {
//             background-color: #3a56a1;
//         }

//         .icon {
//             font-size: 1.3rem;
//             margin-right: 10px;
//         }
//     </style>
//     <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
// </head>
// <body>

//     <!-- Navigation Bar -->
//     <header class="navbar">
//         <h1>SwiftPay</h1>
//         <nav>
//             <a href="payment.html" class="hover:text-white"><i class="fas fa-home icon"></i>Payments</a>
//             <a href="features.html" class="hover:text-white"><i class="fas fa-cogs icon"></i>Features</a>
//             <a href="pricing.html" class="hover:text-white"><i class="fas fa-dollar-sign icon"></i>Pricing</a>
//             <a href="contact.html" class="hover:text-white"><i class="fas fa-envelope icon"></i>Contact</a>
//             <a href="Login.html" class="hover:text-white"> <i class="fas fa-sign-in-alt icon"></i>Login</a>
//             <a href="SignUp.html" class="hover:text-white"> <i class="fas fa-user-plus icon"></i>SignUp</a>
//             <a href="success.html"></a>
//         </nav>
//     </header>
// <!-- 
//     Additional Section -->
//     <section class="mt-10">
//         <div class="form-container">
//             <h2 class="text-2xl font-bold text-gray-800">Get Started with SwiftPay</h2>
//             <form action="/signup" method="post">
//                 <label for="name">Full Name:</label>
//                 <input type="text" id="name" name="name" placeholder="Enter your full name" required>
//                 <label for="email">Email Address:</label>
//                 <input type="email" id="email" name="email" placeholder="Enter your email address" required>
//                 <label for="password">Password:</label>
//                 <input type="password" id="password" name="password" placeholder="Enter a secure password" required>
//                 <button type="submit" class="button">Sign Up</button>
//             </form>
//         </div>
//     </section> 

// </body>
// </html>
