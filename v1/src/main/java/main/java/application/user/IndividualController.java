package main.java.application.user;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndividualController {

    private final IndividualRepository repository;

    public IndividualController(IndividualRepository userRepository) {
        this.repository = userRepository;
    }

    @GetMapping("/v1/user/individuals")
    public List<Individual> individual() {
        return repository.findAll();
    }

    @PostMapping("/v1/user/individuals")
    public Individual newIndividual(@RequestBody Individual individual) {
        return repository.save(individual);
    }

    @DeleteMapping("/v1/user/individual/{id}")
    void deleteIndividual(@PathVariable Long id) {
        repository.deleteById(id);
    }
}