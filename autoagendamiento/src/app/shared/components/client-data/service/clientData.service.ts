import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ClientDataService{
    private apiURL='http://localhost:3000/clients';
    
    constructor(private http: HttpClient){

    }

    postClient(data:any){
        return this.http.post<any>(`${this.apiURL}`, data)
    }
    getClient(){
        return this.http.get<any>(`${this.apiURL}`);
    }
    patchPhone(data:any, id:number){
        return this.http.patch<any>(`${this.apiURL}/`+id,data)
        
    }


}