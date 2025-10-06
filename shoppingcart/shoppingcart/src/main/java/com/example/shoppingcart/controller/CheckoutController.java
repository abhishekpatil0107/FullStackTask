package com.example.shoppingcart.controller;

import com.example.shoppingcart.dto.CheckoutRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/checkout")
@CrossOrigin(origins = "*")
public class CheckoutController {

    @PostMapping
    public ResponseEntity<?> checkout(@RequestBody CheckoutRequest request) {
        System.out.println("Received checkout request:");
        request.getItems().forEach(i ->
            System.out.println("ProductId: " + i.getProductId() + ", Qty: " + i.getQuantity())
        );

        Map<String, Object> resp = new HashMap<>();
        resp.put("status", "success");
        resp.put("message", "Order received successfully!");
        return ResponseEntity.ok(resp);
    }
}
