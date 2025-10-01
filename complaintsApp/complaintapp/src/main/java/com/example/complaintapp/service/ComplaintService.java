package com.example.complaintapp.service;

import com.example.complaintapp.model.Complaint;
import com.example.complaintapp.repository.ComplaintRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ComplaintService {
    @Autowired
    private ComplaintRepository complaintRepository;

    public Complaint save(Complaint c){
        return complaintRepository.save(c);
    }

    public List<Complaint> findAll(){
        return complaintRepository.findAll();
    }

    public Complaint findById(Long id){
        return complaintRepository.findById(id).orElse(null);
    }

    public void updateStatus(Long id, String status){
        Complaint c = findById(id);
        if (c != null) {
            c.setStatus(status);
            complaintRepository.save(c);
        }
    }
}
