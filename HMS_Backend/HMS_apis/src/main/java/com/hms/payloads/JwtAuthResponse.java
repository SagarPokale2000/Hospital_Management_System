/**
*	@Developer : Sagar_Pokale
*	@Date		 	   : 26-Feb-2023 12:19:49 PM
*/

package com.hms.payloads;

import lombok.Data;

@Data
public class JwtAuthResponse {
	
	private String token;

	private UserDto user;

	
}
