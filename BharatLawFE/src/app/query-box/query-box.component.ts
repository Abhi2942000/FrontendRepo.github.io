
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

// interface box{
//   image:string;
//   alt:string;
// }
// @Component({
//   selector: 'app-query-box',
//   templateUrl: './query-box.component.html',
//   styleUrls: ['./query-box.component.css']
// })
// export class QueryBoxComponent implements OnInit {
//   myForm: FormGroup;

//   boxes = [
//     { image: 'file_logo.png', alt: 'New Query' },
//     { image: 'file_logo.png', alt: 'File Logo' },
//     { image: 'file_logo.png', alt: 'File Logo' },
//     { image: 'file_logo.png', alt: 'File Logo' }
//   ];

//   constructor(private formBuilder: FormBuilder) { }

//   ngOnInit() {
//     this.myForm = this.formBuilder.group({
//       user: [''],
//       boxes: this.formBuilder.array([])
//     });

//     this.populateBoxes();
//   }

//   populateBoxes() {
//     const boxArray = this.myForm.get('boxes') as FormArray;

//     this.boxes.forEach(box => {
//       boxArray.push(this.createBoxGroup(box));
//     });
//   }

//   createBoxGroup(box): FormGroup {
//     return this.formBuilder.group({
//       image: [box.image],
//       alt: [box.alt]
//     });
//   }

//   onSubmit() {
//     console.log(this.myForm.value);
//   }
// }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

interface Box {
  image: string;
  alt: string;
}

@Component({
  selector: 'query-box-component',
  templateUrl: './query-box.component.html',
  styleUrls: ['./query-box.component.css']
})
export class QueryBoxComponent implements OnInit {
  myForm!: FormGroup;

  boxes: Box[] = [
    { image: '../assets/Add-Button-PNG-Free-Download.png', alt: 'New Query' },
    { image: '../assets/folderimages.png', alt: 'File Logo' },
    { image: '../assets/folderimages.png', alt: 'File Logo' },
    { image: '../assets/folderimages.png', alt: 'File Logo' }
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      user: [''],
      boxes: this.formBuilder.array([])
    });

    this.populateBoxes();
  }

  populateBoxes() {
    const boxArray = this.myForm.get('boxes') as FormArray;

    this.boxes.forEach(box => {
      boxArray.push(this.createBoxGroup(box));
    });
  }

  createBoxGroup(box: Box): FormGroup {
    return this.formBuilder.group({
      image: [box.image],
      alt: [box.alt]
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
