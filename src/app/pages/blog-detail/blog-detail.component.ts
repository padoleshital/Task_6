import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blogForm!: FormGroup;
  submitted = false;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.blogForm = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.required]
    });
  }

  get f() {
    return this.formbuilder.control;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.blogForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.blogForm.value, null, 2))
  }

}
