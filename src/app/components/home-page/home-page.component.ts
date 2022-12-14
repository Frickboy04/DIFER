import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterView(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems,{
        indicators:true,
        fullwidth:true
      } );
    });
  }
}
