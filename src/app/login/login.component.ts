import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formObject: any = { value: null };

  stayConnected: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.createForms();
  }

  createForms() {
    this.formObject = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
    });
  }

  myEvent = new HeaderComponent();
  login(values) {
    console.log('values ', values);
    console.log('stayConnected ', this.stayConnected);
    this.loginService.login(values)
    .then( (res) => {
      console.log('res ', res);
      this.router.navigateByUrl('/home');
      // aca no pude probar bien si la respuesta es correcta o no porque nunca me vino un error desde el server
      // todos los usuarios y contraseñas daban un 200 ok
      if(res.status == 200) {
        // si el usuario eligió estar conectado
        values.stayConnected = this.stayConnected;
        values.time = 1;
        console.log('values ', values)
        localStorage.setItem('user', JSON.stringify(values));
        window.location.reload();
      } else {
        alert('Error de conección');
      }
    })
  }
}
