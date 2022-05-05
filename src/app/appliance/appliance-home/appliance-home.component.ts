import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { ApplianceService } from '../appliance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appliance-home',
  templateUrl: './appliance-home.component.html',
  styleUrls: ['./appliance-home.component.css']
})
export class ApplianceHomeComponent implements OnInit {

  applianceList$! : Observable<any[]>
  typesApplianceList$! : Observable<any[]>
  typesApplianceList : any =[];
  modalTitle:string = 'Appliance form';
  activeFormAppliance!: boolean;
  appliance: any;
  typeApplianceList : any=[];


  //map to display data associate with foreign key
  typesApplianceMap : Map<number, string> = new Map();

  constructor(private service : ApplianceService) { }

  ngOnInit(): void {
    
    this.typesApplianceList$ = this.service.getTypeApplianceList();
    this.applianceList$ = this.service.getApplianceList();
    this.refreshtypesApplianceMap();
  

  }





  modalAdd(){
    this.appliance = {
      "libell": "",
      "dbid": "",
      "disponibilite": true,
      "references": "",
      "applianceType": 0
    }
    this.modalTitle = "Ajouter Appliance";
    this.activeFormAppliance = true;

  }

  modalClose() {
    this.activeFormAppliance  = false;
    this.applianceList$ = this.service.getApplianceList();
  }


  refreshModal() {
    if(this.activeFormAppliance == false){
      this.applianceList$ = this.service.getApplianceList();
    }
}

//TABLE PROPERTIES




//map to display data associated with foreign key
typeApplianceMap: Map<number, string> = new Map();



refreshtypesApplianceMap(){
  this.service.getTypeApplianceList().subscribe(data => {
    this.typeApplianceList =data;

    for(let i = 0 ; i<data.length ; i++){
      this.typeApplianceMap.set(this.typeApplianceList[i].typeApp_ID, this.typeApplianceList[i].libelle)
    }
  })
}
 // END OF TABLE PROPERTIES

 //MODAL UPDATE
 modalUpdate(item : any) {
   this.appliance = item;
  this.modalTitle = "Modifier Appliance";
  this.activeFormAppliance = true;

}


 //END OF MODAL UPDATE

 //DELETE FUNCTION
 delete(item : any) {
  Swal.fire({
    title: 'Voulez-vous vraiment Supprimer cette declaration?',
   text: "suppression!",
   icon: 'warning',
   showCancelButton: true,
   confirmButtonColor: '#fbbc06',
   cancelButtonColor: '#7987a1',
   confirmButtonText: 'Supprimer'
 }).then((result) => {
   if (result.isConfirmed) {
     const id = item.appliance_Id;
     console.log(id)
     this.service.deleteAppliance(id).subscribe(res => {      
      var updateapplianceSucces = document.getElementById('updateApplianceSucces');
      if(updateapplianceSucces){
        updateapplianceSucces.style.display = "block";
      }

      setTimeout(() => {
        if(updateapplianceSucces){
          updateapplianceSucces.style.display = "none";
        }
      }, 4000);
      this.applianceList$ = this.service.getApplianceList();
     })


        }




     
   Swal.fire(
         'Modification réussi !',
         'le demande est bien modifié!',
         'success'
       )
   }
 )
}


}


