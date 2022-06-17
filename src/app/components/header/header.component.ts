import { Component, OnInit } from '@angular/core';

declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPdf(): void {
    const pdfUrl = '../../../assets/cv.pdf';
    const pdfName = 'CV - Fernando Ruiz Rodriguez.pdf';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  scrollToBottom(): void {
    window.scrollTo(document.body.scrollHeight, document.body.scrollHeight);
  }

}
