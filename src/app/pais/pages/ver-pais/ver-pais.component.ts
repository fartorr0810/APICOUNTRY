import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaisServiceService } from '../../services/pais-service.service';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute,private paisservice:PaisServiceService) { }
  pais:any=null;
  ngOnInit(): void {
    console.log(this.activatedroute.snapshot.params);
    this.paisservice.verPais(this.activatedroute.snapshot.params['id']).subscribe(resp=>{
      console.log(resp[0]);
      this.pais=resp[0];
    });
  }

}
