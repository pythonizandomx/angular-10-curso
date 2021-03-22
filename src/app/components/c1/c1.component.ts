import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  @Input() title: string;
  @Input() description: string;
  constructor() { }

  ngOnInit(): void {
  }

}
