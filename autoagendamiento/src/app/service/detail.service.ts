import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError} from "rxjs";
import { changeProduct, changeService, reagendar } from "../shared/components/detailOrder/interfaces/changes.interface";
import { RouterModule, Routes, Router } from '@angular/router';

@Injectable({
    providedIn:'root'
})
export class DetailOrderService{

    private apiURL='https://api.demo.maydayservicios.com'
    constructor(private http: HttpClient, private router: Router){
    }

    getOrderId(order:number, token:string){
        let header = new HttpHeaders()
        .set('Type-content','aplication/json').set('token',token);
        
        return this.http.get(`${this.apiURL}/v3/orders/`+order,{
            headers:header
        }).pipe(
            catchError((error) =>{
                return this.errorHandler(error);
            })
        )
    }
    
    putContact(data:any, order:number, token:string):Observable<any>{
        let header = new HttpHeaders()
        .set('Type-content','aplication/json').set('token',token);

        return this.http.put<any>(`${this.apiURL}/v3/orders/${order}/contact`,data,{headers:header}).pipe(
            (map((res:any)=>{
                return res;
            })))
    }

    getOrderDEV(order:Number, token:string):Observable<any>{
        let header = new HttpHeaders()
        .set('Type-content','aplication/json').set('token',token);
        
        return this.http.get('v3/orders/'+order,{
            headers:header
        }).pipe(
            catchError((error) =>{
                return this.errorHandler(error);
            })
        )
    }
    putContactDEV(data:any, order:number, token:string):Observable<any>{
        let header = new HttpHeaders()
        .set('Type-content','aplication/json').set('token',token);

        return this.http.put<any>(`v3/orders/${order}/contact`,data,{headers:header}).pipe(
            (map((res:any)=>{
                return res;
            })))
    }

    errorHandler(error:HttpErrorResponse){
        if(error instanceof HttpErrorResponse){
            if(error.error instanceof ErrorEvent){
                console.log('Client Error');
            }else{
                console.log('Service Error');
                this.router.navigate(['error'])
            }
        }else{
            console.log('Other Type');
            
        }
        return throwError(error)
    }
}
@Injectable({
    providedIn:'root'
})

export class DateService{
    headers = new HttpHeaders();
    private apiURL='https://api.demo.maydayservicios.com'

    constructor (private http : HttpClient){}

    getOrderId(order:number, token:string){
        let header = new HttpHeaders()
        .set('Type-content','aplication/json').set('token',token);
        return this.http.get(`${this.apiURL}/v3/orders/`+order,{
            headers:header
        })
    } 

    putDateDelivery(data: any, order:number, token:string):Observable<any>{
        let header = new HttpHeaders()
        .set('Type-content','aplication/json').set('token',token);

        console.log(data);
        
        return this.http.put<any>(`${this.apiURL}/v3/orders/${order}/delivery_date`,data,{headers:header}).pipe(
            (map((res:any)=>{
                return res;
            })))
    }

    getOrderIdDEV(order:number, token:string){
        let header = new HttpHeaders()
        .set('Type-content','aplication/json').set('token',token);
        return this.http.get('v3/orders/'+order,{
            headers:header
        })
    } 

    putDateDeliveryDEV(data: string, order:number, token:string):Observable<any>{
        let header = new HttpHeaders()
        .set('Type-content','aplication/json').set('token',token);

        console.log(data);
        
        return this.http.put<any>(`v3/orders/${order}/delivery_date`,data,{headers:header}).pipe(
            (map((res:any)=>{
                return res;
            })))
    }



} 

@Injectable({
    providedIn:'root'
})
export class ModifyProductService{
    
    private apiURL='http://localhost:3030';

    constructor (private http : HttpClient){}
    postChangeProduct(data: changeProduct): Observable<changeProduct>{
        return this.http.post<changeProduct>(`${this.apiURL}/editProduct`, data );
    }
    getChangeProduct():Observable<changeProduct[]>{
        return this.http.get<changeProduct[]>(`${this.apiURL}/editProduct`);
    }
}

@Injectable({
    providedIn:'root'
})
export class ModifyService{

    private apiURL='http://localhost:3030';

    constructor (private http : HttpClient){}
    
    postChangeService(data: changeService): Observable<changeService>{
        return this.http.post<changeService>(`${this.apiURL}/editService`, data );
    }
}

@Injectable({
    providedIn:'root'
})
export class ReagendarService{
    private apiURL='http://localhost:3030';
    constructor (private http : HttpClient){}
    postReagendar(data: reagendar): Observable<reagendar>{
        return this.http.post<reagendar>(`${this.apiURL}/reagendar`, data );
    }

    putReagendar(data: reagendar): Observable<reagendar>{
        return this.http.put<reagendar>(`${this.apiURL}/reagendar`, data );
    }

    getReagendar():Observable<reagendar[]>{
        return this.http.get<reagendar[]>(`${this.apiURL}/reagendar`);
    }
}