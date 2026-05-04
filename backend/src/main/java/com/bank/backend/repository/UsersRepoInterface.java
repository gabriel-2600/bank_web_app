package com.bank.backend.repository;

import com.bank.backend.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepoInterface extends JpaRepository<Users, Long> {
}
