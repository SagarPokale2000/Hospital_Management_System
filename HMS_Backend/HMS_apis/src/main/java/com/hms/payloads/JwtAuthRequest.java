/**
*	@Developer : Sagar_Pokale
*	@Date		 	   : 26-Feb-2023 12:27:28 PM
*/

package com.hms.payloads;

import lombok.Data;

@Data
public class JwtAuthRequest {

	private String username;
	private String password;

}
