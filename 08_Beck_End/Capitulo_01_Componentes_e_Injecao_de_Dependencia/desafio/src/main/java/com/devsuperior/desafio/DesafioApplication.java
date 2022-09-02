package com.devsuperior.desafio;

import com.devsuperior.entities.Order;

import com.devsuperior.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;



@SpringBootApplication
@ComponentScan({"com.devsuperior"})
public class DesafioApplication implements CommandLineRunner {



    @Autowired
    private OrderService orderService;

    public static void main(String[] args) {

        SpringApplication.run(DesafioApplication.class, args);


    }

    @Override
    public void run(String... args) throws Exception {
        Order order = new Order(1309, 95.90, 0.0);
        System.out.printf("Pedido código: %d\n", order.getCode());
        System.out.printf("Valor Total: R$%.2f", orderService.total(order));

    }
}
