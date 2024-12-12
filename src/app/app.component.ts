import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[FormBuilder,Validators]
})
export class AppComponent {
  title = 'AngularAssignment13';

  public fobj = new FormBuilder();

  contactForm = this.fobj.group({
    firstname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    lastname:[''],
    phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9 ]*')]],
    email:['',[Validators.required]],
    city:['',[Validators.required,Validators.minLength(4)]],
    state:[''],
    zip:['',[Validators.minLength(5),Validators.maxLength(5)]],
    comments:['',[Validators.required,Validators.minLength(30)]],
    tnc:['',[Validators.required]]
  }
  )
}
