import { Injectable } from '@angular/core';
import { Contato } from './model/Contato';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  isEditarContato: boolean = false;
  public listaContatos: Contato[] = [];

  GetApiUrl(): string {
    return 'https://localhost:5001/';
  }

  editar(contatoEditar: Contato) {

    let httpParams = new HttpParams();
    httpParams = httpParams.append('id', contatoEditar.id.toString());
    httpParams = httpParams.append('name', contatoEditar.name);
    httpParams = httpParams.append('cargo', contatoEditar.id.toString());
    httpParams = httpParams.append('telefone', contatoEditar.id.toString());
    httpParams = httpParams.append('email', contatoEditar.id.toString());

    this.http.put(this.GetApiUrl(), contatoEditar);
  }
}
