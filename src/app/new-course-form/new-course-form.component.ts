import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css'],
})
// 12- FormArray
export class NewCourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([]),
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: any) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
}

// 13 - FormBuilder
// export class NewCourseFormComponent {
//   form;

//   constructor(fb: FormBuilder){
//     this.form = fb.group({
//       name: ['',Validators.required],
//       contact: fb.group({
//         email:[],
//         phone:[]
//       }),
//       topics:fb.array([])
//     });
//   }

// }
