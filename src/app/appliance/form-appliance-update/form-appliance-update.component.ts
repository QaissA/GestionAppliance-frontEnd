import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplianceService } from '../appliance.service';
import Swal from 'sweetalert2';
import { ApplianceHomeComponent } from '../appliance-home/appliance-home.component';


@Component({
  selector: 'app-form-appliance-update',
  templateUrl: './form-appliance-update.component.html',
  styleUrls: ['./form-appliance-update.component.css']
})
export class FormApplianceUpdateComponent implements OnInit {
  
  @Input() appliance : any
  idValue: number = 0;
  LibelleValue : string ='';
  DbidValue : string  ='';
  disponibiliteValue : string = '';
  referenceValue : string = '';
  AppTypevalue : number = 0;

  applianceList$! : Observable<any[]>
  typeApplianceList$! : Observable<any[]>


  constructor(private service : ApplianceService) { }

  ngOnInit(): void {
    this.idValue = this.appliance.appliance_Id;
    this.LibelleValue = this.appliance.libell;
    this.DbidValue = this.appliance.dbid;
    this.disponibiliteValue = this.appliance.disponibilite;
    this.referenceValue = this.appliance.references;
    this.AppTypevalue = this.appliance.applianceType;
    this.applianceList$ =this.service.getApplianceList();
    this.typeApplianceList$= this.service.getTypeApplianceList();
  }

 
  // inputValueId(value : number){
  //     this.idValue = value;
  //     console.log(value)
  //     console.log(typeof(this.idValue))
  //   }

    inputValueLibelle(value : string){
      this.LibelleValue = value;
      console.log(this.LibelleValue)
    }

    inputValueDbid(value : string){
      this.DbidValue = value;
      console.log(this.DbidValue)
    }
    inputValueDisponibilite(value : string){
      this.disponibiliteValue = value;
      console.log(this.disponibiliteValue)
    }
    inputValueref(value : string){
      this.referenceValue = value;
      console.log(this.referenceValue)
    }
    inputValueAppType(value : number){
      this.AppTypevalue = value;
      console.log(this.AppTypevalue)
    }

    UpdateAppliance(){
      Swal.fire({
        title: 'Voulez-vous vraiment Modifier ce declaration?',
       text: "Modification!",
       icon: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#fbbc06',
       cancelButtonColor: '#7987a1',
       confirmButtonText: 'Modifier'
     }).then((result) => {
       if (result.isConfirmed) {
        const appliance = {
          "appliance_Id": this.idValue,
          "libell": this.LibelleValue,
          "dbid": this.DbidValue,
          "disponibilite": this.disponibiliteValue,
          "references": this.referenceValue,
          "applianceType": this.AppTypevalue,
          "typeAppliance": {
            "typeApp_ID": 0,
            "libelle": "string"
          }
        }        
        if(appliance.libell == '' || appliance.dbid =='' || appliance.references == ''){
          Swal.fire("champ vide !",'veuillez remplir tous les champs', 'warning')
          return
        }else{
          console.log(appliance)
          const id : number = 30
          console.log(id)
          this.service.updateAppliance(appliance.appliance_Id,appliance).subscribe(res =>{
            var closeModalBtn = document.getElementById("updateAppliance");
            if(closeModalBtn){
              closeModalBtn.click();
            }
            
            var updateapplianceSucces = document.getElementById('updateApplianceSucces');
            if(updateapplianceSucces){
              updateapplianceSucces.style.display = "block";
            }
      
            setTimeout(() => {
              if(updateapplianceSucces){
                updateapplianceSucces.style.display = "none";
              }
            }, 4000);
  
          })

            }
  


  
         
       Swal.fire(
             'Modification réussi !',
             'le demande est bien modifié!',
             'success'
           )
       }
     })
    }
}
