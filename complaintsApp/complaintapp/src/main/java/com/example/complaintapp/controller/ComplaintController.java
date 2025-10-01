package com.example.complaintapp.controller;

import com.example.complaintapp.model.Complaint;
import com.example.complaintapp.service.ComplaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/complaints")
public class ComplaintController {

    @Autowired
    private ComplaintService complaintService;

    @PostMapping("/submit")
    public Complaint submit(@RequestBody Complaint c) {
        c.setStatus("PENDING");
        return complaintService.save(c);
    }

    @GetMapping("/all")
    public List<Complaint> all() {
        return complaintService.findAll();
    }

    @PostMapping("/updateStatus")
    public String updateStatus(@RequestParam Long id, @RequestParam String status) {
        complaintService.updateStatus(id, status);
        return "OK";
    }
}
