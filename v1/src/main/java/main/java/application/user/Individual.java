package main.java.application.user;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Individual {
    private @Id @GeneratedValue Long id;

    private String username;
    private String password;
    private String firstName;
    private String lastName;

    public Individual() {

    }

    public Individual(String username, String password, String firstName, String lastName) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
