package com.example.complaintapp.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@Entity
@Table(name = "complaints")
public class Complaint {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String department;
    private String category;
    @Column(length = 2000)
    private String description;

    private String status;
    private LocalDateTime createdAt;

    public Complaint() {
        this.createdAt = LocalDateTime.now();
    }

}
