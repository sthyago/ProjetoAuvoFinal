import {Component, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { AppService } from '../app.service';
import { Contato } from '../model/Contato';

export interface IContato {
  id: number;
  name: string;
  cargo: string;
  telefone: string;
  email: string;
}

var ELEMENT_DATA: Contato[] = [
  {id: 1, name: 'Hydrogen', cargo: 'Analista TI', telefone: '3236-8847', email: 'fulafo.de.tal@gmail.com'},
  {id: 2, name: 'Maria', cargo: 'Analista TI', telefone: '3236-8847', email: 'fulafo.de.tal@gmail.com'},
  {id: 3, name: 'Fulano', cargo: 'Analista TI', telefone: '3236-8847', email: 'fulafo.de.tal@gmail.com'},
  {id: 4, name: 'João', cargo: 'Analista TI', telefone: '3236-8847', email: 'fulafo.de.tal@gmail.com'},
  {id: 5, name: 'Rafael', cargo: 'Analista TI', telefone: '3236-8847', email: 'fulafo.de.tal@gmail.com'},
  {id: 6, name: 'Thyago', cargo: 'Analista TI', telefone: '3236-8847', email: 'fulafo.de.tal@gmail.com'},
  {id: 7, name: 'Marcos', cargo: 'Analista TI', telefone: '3236-8847', email: 'fulafo.de.tal@gmail.com'},
  {id: 8, name: 'Marina', cargo: 'Analista TI', telefone: '3236-8847', email: 'fulafo.de.tal@gmail.com'},
  {id: 9, name: 'Amanda', cargo: 'Analista TI', telefone: '3236-8847', email: 'fulafo.de.tal@gmail.com'},
  {id: 10, name: 'Claudia', cargo: 'Analista TI', telefone: '3236-8847', email: 'fulafo.de.tal@gmail.com'},

];


@Component({
  selector: 'contato-component-component',
  styleUrls: ['contato-component.component.css'],
  templateUrl: 'contato-component.component.html',
})
export class ContatoComponentComponent {


  displayedColumns: string[] = ['contato'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  public isOpenClose: boolean = false;

  constructor(private appService: AppService) {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openEditarContato(){
    var list = ELEMENT_DATA;
    for(var i=0; i <= list.length; i++){
      this.appService.listaContatos[i] = list[i];
    }
    this.appService.isEditarContato = true;
  }

}
