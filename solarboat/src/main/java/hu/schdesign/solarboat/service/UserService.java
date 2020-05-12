package hu.schdesign.solarboat.service;

import hu.schdesign.solarboat.dao.RoleRepository;
import hu.schdesign.solarboat.dao.UserRepository;
import hu.schdesign.solarboat.model.Role;
import hu.schdesign.solarboat.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    @Autowired
    public UserService(UserRepository userRepository, RoleRepository roleRepository){
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }
    public Iterable<User> getUsers(){
        return this.userRepository.findAll();
    }
    public Optional<User> getUserById(long id){
        return this.userRepository.findById(id);
    }
    public User updateUser(User newUser)
    {
        Optional<User> oldUser = this.userRepository.findById(newUser.getId());
        if(oldUser.isPresent()){
            if(newUser.getPassword() != null){
                oldUser.get().setPassword(newUser.getPassword());
            }
            oldUser.get().setUsername(newUser.getUsername());
            oldUser.get().setName(newUser.getName());
            oldUser.get().setEmail(newUser.getEmail());

            Set<Role> newRoles = new HashSet<Role>();
            oldUser.get().clearRoles();
            for(Role r : newUser.getRoles()){
                Optional<Role> tmprole = this.roleRepository.findByName(r.getName());
                if(tmprole.isPresent()){
                    newRoles.add(tmprole.get());
                }
            }
            oldUser.get().setRoles(newRoles);
            return this.userRepository.save(oldUser.get());
        }
        return null;
    }
    public User addUser(User user){
        return this.userRepository.save(user);
    }
    public void deleteUserById(long id){
        this.userRepository.deleteById(id);
    }
}
