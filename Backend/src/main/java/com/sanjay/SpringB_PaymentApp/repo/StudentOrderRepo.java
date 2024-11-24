package com.sanjay.SpringB_PaymentApp.repo;

import com.sanjay.SpringB_PaymentApp.model.StudentOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface StudentOrderRepo extends JpaRepository<StudentOrder,Integer> {

    public StudentOrder findByRazorPayOrderId(String razorPayOrderId);
}
