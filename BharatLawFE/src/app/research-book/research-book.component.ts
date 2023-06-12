import { Component } from '@angular/core';

@Component({
  selector: 'app-research-book',
  templateUrl: './research-book.component.html',
  styleUrls: ['./research-book.component.css']
})
export class ResearchBookComponent {
  // Add any necessary properties for your component
  isContainerVisible: boolean = true;

  onContinue(): void {
    // Function to handle the "Continue" button click event
    console.log('Continue button clicked');
    // Add your desired functionality here
  }

  onClose(): void {
    // Function to handle the "Close" button click event
    console.log('Close button clicked');
    this.isContainerVisible = false;
    // Add your desired functionality here
  }
}



