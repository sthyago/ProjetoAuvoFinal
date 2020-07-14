import { Component } from '@angular/core';
import { Cliente } from './model/Cliente';
import { Endereco } from './model/Endereco';
import { Contato } from './model/Contato';
import { MatTableDataSource } from '@angular/material';
import { AppService } from './app.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

export interface Task {
  typeTask: string;
  codigo: number;
  dateExecution: string;
  status: boolean;
  colaborador: string;
}

export interface IContato {
  id: number;
  name: string;
  cargo: string;
  telefone: string;
  email: string;
}

const CONTATOS: IContato[] = [
  {id: 1, name: 'Waldir Satos', cargo: 'WEB-Suporte', telefone: '99574-8847', email: 'fulano_de_tal@hotmail.com'},
  {id: 2, name: 'Eneson Silva', cargo: 'Analísta', telefone: '3236-1526', email: 'beltrano_soares@gmail.com'},
  {id: 3, name: 'Lilithy Francisca', cargo: '3236-8847', telefone: '1526-8847', email: 'fulano_de_tal@gmail.com'},
  {id: 4, name: 'Beryllium', cargo: 'WEB-Suporte', telefone: '99874-8847', email: 'beltrano_soares@gmail.com'},
  {id: 5, name: 'Mario Cunha', cargo: 'Analísta', telefone: '91526-8847', email: 'fulano_de_tal@live.com'},
  {id: 6, name: 'Carbon Altered', cargo: 'WEB-Suporte', telefone: '3236-5791', email: 'beltrano_soares@hotmail.com'},
  {id: 7, name: 'Nildrogen', cargo: 'Analísta', telefone: '3236-8847', email: 'fulano_de_tal@gmail.com'},
  {id: 8, name: 'Aline Oxygen', cargo: '3236-8847', telefone: '3236-8847', email: 'fulano_de_tal@live.com'},
  {id: 9, name: 'Rebeca Fluorine', cargo: 'Analísta', telefone: '99874-8847', email: 'fulano_de_tal@hotmail.com'},
  {id: 10, name: 'João Neon', cargo: '3236-8847', telefone: '3236-1526', email: 'beltrano_soares@gmail.com'}
];

const LISTA_ABERTOS: Task[] = [
  {codigo: 1, typeTask: 'Manutenção preventiva', dateExecution: '17/09/2020', status: true, colaborador: 'Marcos'},
  {codigo: 3, typeTask: 'Manutenção corretiva', dateExecution: '12/07/2020', status: true, colaborador: 'Marcos'},
  {codigo: 5, typeTask: 'Manutenção preventiva', dateExecution: '01/11/2020', status: true, colaborador: 'Marcos'},
  {codigo: 7, typeTask: 'Manutenção preventiva', dateExecution: '20/06/2020', status: true, colaborador: 'Marcos'},
  {codigo: 9, typeTask: 'Manutenção corretiva', dateExecution: '14/10/2020', status: true, colaborador: 'Marcos'},
  {codigo: 11, typeTask: 'Manutenção corretiva', dateExecution: '19/12/2020', status: true, colaborador: 'Marcos'},
];
const LISTA_FECHADOS: Task[] = [
  {codigo: 2, typeTask: 'Manutenção preventiva', dateExecution: '15/03/2020', status: false, colaborador: 'Marcos'},
  {codigo: 4, typeTask: 'Manutenção corretiva', dateExecution: '01/04/2020', status: false, colaborador: 'Marcos'},
  {codigo: 6, typeTask: 'Manutenção corretiva', dateExecution: '17/08/2020', status: false, colaborador: 'Marcos'},
  {codigo: 8, typeTask: 'Manutenção corretiva', dateExecution: '21/01/2020', status: false, colaborador: 'Marcos'},
  {codigo: 10, typeTask: 'Manutenção preventiva', dateExecution: '30/02/2020', status: false, colaborador: 'Marcos'},
  {codigo: 12, typeTask: 'Manutenção preventiva', dateExecution: '10/12/2020', status: false, colaborador: 'Marcos'},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public listaAbertos = LISTA_ABERTOS;
  public listaFechados = LISTA_FECHADOS; 
  public dataSourceContato = new MatTableDataSource(CONTATOS);
  constructor(public appService: AppService) { }

  public entidade = new Cliente();
  public entidadeContato: Contato;
  public contatoEditar;
  
  ngOnInit(){  
    this.setEntity();
  }
 
  
  displayedColumns: string[] = ['codigo', 'typeTask', 'dateExecution', 'colaborador', 'excluir'];
  
  

  setEntity(){
    this.entidade.id = 123456;
    this.entidade.nome = 'SetFocus Sistemas';
    this.entidade.cpfCnpj = '991.458.778-56';
    this.entidade.email = 'blablabla@gmail.com';
    this.entidade.telefone = '(62) 3236-5791';
    this.entidade.seguimento = 'Vendas corporativas';

    this.entidade.endereco = new Endereco();

    this.entidade.endereco.rua = 'Rua Almirante Tamandare';
    this.entidade.endereco.numero = '1257';
    this.entidade.endereco.bairro = 'Setor Bueno';
    this.entidade.endereco.cep = '74316-042';
    this.entidade.endereco.cidade = 'Manaus';
    this.entidade.endereco.estado = 'AM';

    this.entidade.contato = new Contato();
    this.entidade.contato.id = 987654;
    this.entidade.contato.name = 'João da Silva';
    this.entidade.contato.telefone = '98657-4141';
    this.entidade.contato.cargo = 'dados incorretos';
    this.entidade.contato.email = 'joaozinhoGyn_2005@hotmail.com';
  }

  displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumnsCtt: string[] = ['contato', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  fecharEdicao(){
    this.appService.isEditarContato = false;
  }

  openCloseInfo(contato: Contato) {
    var contatoEditar: Contato = new Contato();
    contatoEditar.name = contato.name;
    contatoEditar.cargo = contato.cargo;
    contatoEditar.email = contato.email;
    contatoEditar.telefone = contato.telefone;
    contatoEditar.id = contato.id;
    this.entidadeContato = contatoEditar;
    console.log(contatoEditar);
    this.appService.isEditarContato = true;
  }

  doEditarService() {
    this.appService.editar(this.contatoEditar);
  }  
  
}
