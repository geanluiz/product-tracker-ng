import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
	inputType = "password"

	toggleShowPwd() {
		if (this.inputType == "password"){
			this.inputType = "text"
		}
		else {
			this.inputType = "password"
		}
	}
}
