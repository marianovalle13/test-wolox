import { Component, OnInit, ɵConsole } from '@angular/core';
import { TechService } from '../services/tech.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  tecnologies: any = [];
  tecnologiesAll: any = [];

  filter: String = "";
  constructor(private techService: TechService) { }

  ngOnInit(): void {
    this.getTechs();
  }

  getTechs() {
    this.techService.getTech()
    .then( (res) => {
      console.log('res ', res);
      this.tecnologies = res;
      this.tecnologiesAll = res;
      
    })
  }
  
  myFunction(value) {
    console.log('------ ', value);
    this.tecnologies = [];
    this.tecnologiesAll.forEach(element => {
      console.log('element ', element.tech)
      if(element.tech.includes(value)) {
        console.log('element Aaaaaaa', element)
        this.tecnologies.push(element);
      }
    });
  }
}
