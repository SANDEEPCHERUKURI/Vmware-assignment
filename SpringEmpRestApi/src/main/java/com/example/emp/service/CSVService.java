package com.example.emp.service;

import com.example.emp.Model.Employee;
import com.example.emp.helper.CSVHelper;
import com.example.emp.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class CSVService {
    @Autowired
    EmployeeRepository employeeRepository;

    public void save(MultipartFile file) {
        try {
            List<Employee> empList = CSVHelper.csvToEmployees(file.getInputStream());
            employeeRepository.saveAll(empList);
        } catch (IOException e) {
            throw new RuntimeException("fail to store csv data: " + e.getMessage());
        }
    }


}
