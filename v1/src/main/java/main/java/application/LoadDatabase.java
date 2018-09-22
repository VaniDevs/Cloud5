package main.java.application;

import lombok.extern.slf4j.Slf4j;

import main.java.application.user.Individual;
import main.java.application.user.IndividualRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@Slf4j
class LoadDatabase {

    @Bean
    CommandLineRunner initDatabase(IndividualRepository repository) {
        return args -> {
            System.out.println("Preloading " + repository.save(new Individual("test", "test", "test", "test")));
            System.out.println("Preloading " + repository.save(new Individual("test", "test", "test", "test")));
        };
    }
}