import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('container') container: ElementRef;
  @ViewChild('programmer') programmer: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
}
