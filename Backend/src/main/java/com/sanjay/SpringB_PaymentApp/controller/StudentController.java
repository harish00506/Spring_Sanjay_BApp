package com.sanjay.SpringB_PaymentApp.controller;

import org.springframework.ui.Model;


import com.sanjay.SpringB_PaymentApp.model.StudentOrder;
import com.sanjay.SpringB_PaymentApp.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.Map;


@Controller
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping("/")
    public String init() {
        return "index";
    }

    @PostMapping(value = "/create-order", produces = "application/json")
    @ResponseBody
    public ResponseEntity<StudentOrder> createOrder(@RequestBody StudentOrder studentOrder) throws Exception {
        StudentOrder createdOrder = service.createOrder(studentOrder);
        return new ResponseEntity<>(createdOrder, HttpStatus.CREATED);
    }

    @PostMapping("/handle-payment-callback")
    public String handlePaymentCallack(@RequestParam Map<String, String> resPayLoad) {
        System.out.println(resPayLoad);
        StudentOrder updateOrder = service.updateOrder(resPayLoad);
        return "success";

    }
}
//    // Google login redirection
//    @GetMapping("/oauth2/authorization/google")
//    public String googleLogin() {
//        // Redirect handled by Spring Security
//        return "redirect:/login/oauth2/code/google";
//    }
//    // Handle successful Google login
//    @GetMapping("/dashboard")
//    public String dashboard(@RequestParam(required = false) OAuth2User oAuth2User, Model model) {
//        if (oAuth2User != null) {
//            String email = oAuth2User.getAttribute("email");
//            String name = oAuth2User.getAttribute("name");
//            model.addAttribute("name", name);
//            model.addAttribute("email", email);
//            return "dashboard"; // Create a "dashboard.html" to display user details
//        }
//        return "error"; // Redirect to an error page if user details are not available
//    }
//    // Login page
//    @GetMapping("/login")
//    public String login() {
//        return "login"; // Your Login.html page
//    }
//
//}
