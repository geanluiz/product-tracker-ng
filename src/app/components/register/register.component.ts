import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
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
