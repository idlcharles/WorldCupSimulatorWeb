import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../Models/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
apiUrl = 'https://localhost:7154/api/Teams/groups'

  constructor(private httpClient: HttpClient) { }

  public getGroups() {
   return this.httpClient.get<Team[][]>(this.apiUrl)
  }
}
