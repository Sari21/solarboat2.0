package hu.schdesign.solarboat.dao;

import hu.schdesign.solarboat.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String userName);

}
