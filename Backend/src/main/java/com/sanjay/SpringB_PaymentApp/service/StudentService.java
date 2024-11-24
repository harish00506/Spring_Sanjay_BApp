package com.sanjay.SpringB_PaymentApp.service;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.sanjay.SpringB_PaymentApp.model.StudentOrder;
import com.sanjay.SpringB_PaymentApp.repo.StudentOrderRepo;
import org.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class StudentService {


    @Autowired
    private StudentOrderRepo repo;

    @Value("${razorpay.key.id}")
    private String razorPayKey;
    @Value("${razorpay.secret.key}")
    private String razorPaySecret;
    private RazorpayClient client;

    public StudentOrder createOrder(StudentOrder stuOrder) throws Exception{

        JSONObject orderReq=new JSONObject();
        orderReq.put("amount",stuOrder.getAmount()*100);
        orderReq.put("currency","INR");
        orderReq.put("receipt",stuOrder.getEmail());

        this.client=new RazorpayClient(razorPayKey,razorPaySecret);

        //create order in razorpay
        Order razorPayOrder =client.orders.create(orderReq);
        System.out.println(razorPayOrder);
        stuOrder.setRazorPayOrderId(razorPayOrder.get("id"));
        stuOrder.setOrderStatus(razorPayOrder.get("status"));
        repo.save(stuOrder);
        return stuOrder;

    }

    public StudentOrder updateOrder(Map<String ,String> responsePayLoad){
         String razorPayOrderId=  responsePayLoad.get("razorpay_order_id");

         StudentOrder order=repo.findByRazorPayOrderId(razorPayOrderId);
         order.setOrderStatus("PAYMENT_COMPLETED");
         StudentOrder updatedOrder =repo.save(order);
         return updatedOrder;
    }

}
