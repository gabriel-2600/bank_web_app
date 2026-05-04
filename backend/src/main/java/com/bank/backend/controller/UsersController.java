package com.bank.backend.controller;

import com.bank.backend.entity.Users;
import com.bank.backend.service.UsersService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UsersController {
    private final UsersService usersService;

    public UsersController(UsersService usersService){
        this.usersService = usersService;
    }

    @PostMapping("/register")
    public Users registerUser(@RequestBody Users user){
        return usersService.createUser(user);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable Long id){
        usersService.deleteById(id);
    }
}




