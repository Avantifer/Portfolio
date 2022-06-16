import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectPart(event: any): void {
    let allParts = document.querySelectorAll('.bottom-nav--part');
    let partSelected = event.classList.contains('icon') ? event.parentElement! : event as Element;

    allParts.forEach((part : Element) => {
      part.classList.contains('selected') ? part.classList.remove('selected') : null;
    });
    
    partSelected.classList.add('selected');
  }
}
