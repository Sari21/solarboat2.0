package hu.schdesign.solarboat.service;

import hu.schdesign.solarboat.dao.UserRepository;
import hu.schdesign.solarboat.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    public Iterable<User> getUsers(){
        return this.userRepository.findAll();
    }
    public Optional<User> getUserById(long id){
        return this.userRepository.findById(id);
    }
    public User updateUser(User user){
        return this.userRepository.save(user);
    }
    public User addUser(User user){
        return this.userRepository.save(user);
    }
    public void deleteUserById(long id){
        this.userRepository.deleteById(id);
    }
}
