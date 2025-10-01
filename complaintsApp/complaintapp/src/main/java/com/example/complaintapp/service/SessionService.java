package com.example.complaintapp.service;

import com.example.complaintapp.model.User;
import org.springframework.stereotype.Component;
import jakarta.servlet.http.HttpSession;

@Component
public class SessionService {
    private static final String USER_ID = "USER_ID";
    private static final String USER_TYPE = "USER_TYPE";
    private static final String USER_NAME = "USER_NAME";
    private static final String USER_DEPT = "USER_DEPT";

    public void createSession(HttpSession session, User user) {
        session.setAttribute(USER_ID, user.getId());
        session.setAttribute(USER_TYPE, user.getType());
        session.setAttribute(USER_NAME, user.getName());
        session.setAttribute(USER_DEPT, user.getDepartment());
    }

    public void invalidate(HttpSession session) {
        session.invalidate();
    }

    public boolean isLoggedIn(HttpSession session) {
        return session != null && session.getAttribute(USER_ID) != null;
    }

    public String getUserType(HttpSession session){
        return (String) session.getAttribute(USER_TYPE);
    }

    public Long getUserId(HttpSession session){
        return (Long) session.getAttribute(USER_ID);
    }

    public String getUserName(HttpSession session){
        return (String) session.getAttribute(USER_NAME);
    }

    public String getUserDept(HttpSession session){
        return (String) session.getAttribute(USER_DEPT);
    }
}
