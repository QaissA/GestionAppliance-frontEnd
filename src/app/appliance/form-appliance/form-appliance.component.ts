import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplianceService } from '../appliance.service';
import Swal from 'sweetalert2';
import { AnyForUntypedForms } from '@angular/forms';



@Component({
  selector: 'app-form-appliance',
  templateUrl: './form-appliance.component.html',
  styleUrls: ['./form-appliance.component.css']
})
export class FormApplianceComponent implements OnInit {
  @Input() appliance : any;
  applianceId : number = 0;
  libelle : string = '';
  dbid : string = '';
  dispo : boolean = true;
  ref : string = '';
  appType : number = 0;

  applianceList$! : Observable<any[]>
  typeApplianceList$! : Observable<any[]>

  constructor(private service : ApplianceService) { }



  ngOnInit(): void {
    this.applianceId = this.appliance.appliance_Id;
    this.libelle = this.appliance.libell;
    this.dbid = this.appliance.dbid;
    this.dispo = this.appliance.disponibilite;
    this.ref = this.appliance.references;
    this.appType = this.appliance.applianceType
    this.applianceList$ =this.service.getApplianceList();
    this.typeApplianceList$= this.service.getTypeApplianceList();
  }

  inputValueLibelle(value : string){
    this.libelle = value
    console.log(this.libelle)
  }

  inputValueDbid(value : string){
    this.dbid = value
  }

  inputValuedispo(value : boolean){
    if(value == true || value ==false){
      this.dispo = value
    }else{
      throw console.error('only bool values');
    }
  }

  inputValueref(value : string){
    this.ref = value
  }

  inputValueAppType(value : number){
    if(value == 1 || value == 2 || value == 3){
      this.appType = value
    }else{
      console.log("error a khouya")
    }
  }

  addAppliance(){


    Swal.fire({
      title: 'Voulez-vous vraiment ajouter ce declaration?',
     text: "confirmation!",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '##00A300',
     cancelButtonColor: '#7987a1',
     confirmButtonText: 'confirmer'
   }).then((result) => {
     if (result.isConfirmed) {

      const appliance = {      
        "libell": this.libelle,
        "dbid": this.dbid,
        "disponibilite": this.dispo,
        "references": this.ref,
        "applianceType": this.appType
      }
      
      if(appliance.libell == '' || appliance.dbid =='' || appliance.references == ''){
        Swal.fire("champ vide !",'veuillez remplir tous les champs', 'warning')
        return
      }else{
        this.service.addAppliance(appliance).subscribe( res =>{
          var closeModalBtn = document.getElementById("addModalClose");
          if(closeModalBtn){
            closeModalBtn.click();
          }
          
          var addapplianceSucces = document.getElementById('addApplianceSucces');
          if(addapplianceSucces){
            addapplianceSucces.style.display = "block";
          }
    
          setTimeout(() => {
            if(addapplianceSucces){
              addapplianceSucces.style.display = "none";
            }
          }, 4000);
        })
    
      }
  

         
        
       
     Swal.fire(
           '',
           'le demande est bien modifié!',
           'success'
         )
     }
   })



  }
}
