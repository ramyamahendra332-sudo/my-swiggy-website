package com.app;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FoodController {

    @GetMapping("/foods")
    public String foods() {
        return "<h1>Swiggy Mini App</h1>"
             + "<p>Pizza - ₹199</p>"
             + "<p>Burger - ₹99</p>"
             + "<p>Biryani - ₹149</p>";
    }
}
