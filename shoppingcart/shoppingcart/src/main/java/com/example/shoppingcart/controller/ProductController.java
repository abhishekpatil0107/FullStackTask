package com.example.shoppingcart.controller;

import com.example.shoppingcart.model.Product;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {

    @GetMapping
    public List<Product> listProducts() {
        return Arrays.asList(
            new Product(1L, "Wireless Headphones", 500.00, "https://picsum.photos/300/200?random=1"),
            new Product(2L, "Mechanical Keyboard", 1000.00, "https://picsum.photos/300/200?random=2"),
            new Product(3L, "USB-C Hub", 400.00, "https://picsum.photos/300/200?random=3"),
            new Product(4L, "Portable SSD 512GB", 700.00, "https://picsum.photos/300/200?random=4"),
            new Product(5L, "Smartwatch", 999.00, "https://picsum.photos/300/200?random=5")
        );
    }
}
