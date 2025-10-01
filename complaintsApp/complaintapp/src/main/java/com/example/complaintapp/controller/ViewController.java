package com.example.complaintapp.controller;

import com.example.complaintapp.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import jakarta.servlet.http.HttpSession;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class ViewController {
    @Autowired
    private SessionService sessionService;

    @GetMapping("/")
    public void root(HttpServletResponse resp) throws IOException {
        resp.sendRedirect("/login.html");
    }

    @GetMapping("/student.html")
    public void studentView(HttpSession session, HttpServletResponse resp) throws IOException {
        if (!sessionService.isLoggedIn(session)) {
            resp.sendRedirect("/login.html");
            return;
        }
        if (!"STUDENT".equals(sessionService.getUserType(session))) {
            resp.sendRedirect("/login.html");
            return;
        }
        resp.sendRedirect("/student.html");
    }

    @GetMapping("/hod.html")
    public void hodView(HttpSession session, HttpServletResponse resp) throws IOException {
        if (!sessionService.isLoggedIn(session)) {
            resp.sendRedirect("/login.html");
            return;
        }
        if (!"HOD".equals(sessionService.getUserType(session))) {
            resp.sendRedirect("/login.html");
            return;
        }
        resp.sendRedirect("/hod.html");
    }
}
