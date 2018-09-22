package main.java.application.user;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
class IndividualNotFoundAdvice extends Exception {

    @ResponseBody
    @ExceptionHandler(IndividualNotFoundAdvice.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String employeeNotFoundHandler(IndividualNotFoundAdvice ex) {
        return ex.getMessage();
    }
}
