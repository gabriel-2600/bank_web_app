package com.bank.backend.service;

import com.bank.backend.entity.Users;
import com.bank.backend.repository.UsersRepoInterface;
import org.springframework.stereotype.Service;

@Service
public class UsersService {

    private final UsersRepoInterface usersRepository;

    public UsersService(UsersRepoInterface usersRepository){
        this.usersRepository = usersRepository;
    }

    public Users createUser(Users user){
        if(user.getFullName().isBlank() || user.getUsername().isBlank() || user.getPassword().isBlank()){
            return null;
        }

        if(user.getUsername().length() < 8 || user.getUsername().length() > 12){
            return null;
        }

        if(user.getPassword().length() < 8){
            return null;
        }

        return usersRepository.save(user);
    }

    public Users getUserById(Long userID){
        return usersRepository.findById(userID).orElseThrow();
    }

    public void deleteById(Long userID){
        usersRepository.deleteById(userID);
    }
}
