package com.example.complaintapp.controller;

import com.example.complaintapp.service.AuthService;
import com.example.complaintapp.service.SessionService;
import com.example.complaintapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpSession;
import org.springframework.ui.Model;

import java.util.Map;

@Controller
public class AuthController {
    @Autowired
    private AuthService authService;

    @Autowired
    private SessionService sessionService;

    @GetMapping({"/", "/login"})
    public String loginPage() { return "redirect:/login.html"; }

    @PostMapping("/api/login")
    @ResponseBody
    public String doLogin(@RequestBody Map<String, String> payload, HttpSession session) {
        String email = payload.get("email");
        String password = payload.get("password");
        var uOpt = authService.authenticate(email, password);
        if (uOpt.isPresent()) {
            User user = uOpt.get();
            sessionService.createSession(session, user);
            return user.getType();
        } else {
            return "INVALID";
        }
    }


    @PostMapping("/api/logout")
    @ResponseBody
    public String logout(HttpSession session) {
        sessionService.invalidate(session);
        return "OK";
    }
    @GetMapping("/api/whoami")
    @ResponseBody
    public Map<String, Object> whoami(HttpSession session) {
        if (!sessionService.isLoggedIn(session)) {
            return Map.of("error", "not_logged_in");
        }
        return Map.of(
                "type", sessionService.getUserType(session),
                "name", sessionService.getUserName(session),
                "dept", sessionService.getUserDept(session)
        );
    }

}
