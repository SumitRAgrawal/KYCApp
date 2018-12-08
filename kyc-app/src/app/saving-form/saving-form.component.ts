import { Component, OnInit } from '@angular/core';
import { VisionService } from '../vision.service';

@Component({
  selector: 'app-saving-form',
  templateUrl: './saving-form.component.html',
  styleUrls: ['./saving-form.component.css']
})
export class SavingFormComponent implements OnInit {
  constructor(private vision: VisionService) { }
  fileContent: any;
  display = false;
  url = 'https://sumitfunctions.blob.core.windows.net/images/ipos-acceptance-1.jpg';
  ngOnInit() { }


  fileRemoved(event) {
    console.log('file removed');
  }

  showFile() {
    console.log(this.display);
    this.display = !this.display;
    this.vision.submitForProcessing(this.url).subscribe(res => console.log(res));

  }
  fileSelected(event) {
    console.log('file selected');
    const reader = new FileReader();
    reader.readAsArrayBuffer(event.files[0]);
    reader.onloadend = e => this.updateFile(e);
  }
  updateFile(fileData: any) {
    console.log('file read');
    this.fileContent = fileData.target.result;
    console.log(this.fileContent);
    this.vision.submitForProcessing(this.fileContent).subscribe(res => console.log(res));

  }
}
