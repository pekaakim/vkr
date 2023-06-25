import { Component } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private viewportScroller: ViewportScroller, private router: Router) { }
  scroll(pos1: number, pos2: number) {
    this.viewportScroller.scrollToPosition([pos1, pos2]);
  }

  form() {
    this.router.navigate(['form'])
  }
}

