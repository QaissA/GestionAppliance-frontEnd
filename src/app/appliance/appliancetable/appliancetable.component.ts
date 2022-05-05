import { Component, OnInit, Input } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ApplianceService } from '../appliance.service';
import { ApplianceModule } from '../appliance.module';

@Component({
  selector: 'app-appliancetable',
  templateUrl: './appliancetable.component.html',
  styleUrls: ['./appliancetable.component.css']
})
export class AppliancetableComponent implements OnInit {
  // @Input() refresh : any;

  // applianceList$! : Observable<any[]>;
  // typeApplianceList : any=[];
  

  // //map to display data associated with foreign key
  // typeApplianceMap: Map<number, string> = new Map();

  constructor(private service : ApplianceService) { }

  ngOnInit(): void {
  }

  // refreshtypesApplianceMap(){
  //   this.service.getTypeApplianceList().subscribe(data => {
  //     this.typeApplianceList =data;

  //     for(let i = 0 ; i<data.length ; i++){
  //       this.typeApplianceMap.set(this.typeApplianceList[i].typeApp_ID, this.typeApplianceList[i].libelle)
  //     }
  //   })
  // }

    
}
