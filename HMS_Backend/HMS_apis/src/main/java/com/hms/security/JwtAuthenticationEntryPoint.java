/**
*	@Developer : Sagar_Pokale
*	@Date		 	   : 26-Feb-2023 11:21:51 AM
*/

package com.hms.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

// 1st
@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

	
 	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException authException) throws IOException, ServletException {
 		
 		response.sendError(HttpServletResponse.SC_UNAUTHORIZED,"Access Denied !");
 		  
	}

}
