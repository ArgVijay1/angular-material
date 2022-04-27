import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DidYouKnow } from '../did-you-know/did-you-know.model';
import { Faq } from '../faq-management/faq.model';
import { AppModel } from './app-model.model';
import { App } from './App.model';
import { EditModel } from './edit-app/edit-model';
export interface dynElement {
  ID: number;
  name: string;
  description:string;
  token:number;
  rating:number;
  downloads:number;
  playstoreLink:string;
  istoreLink:string;
  //category:string;
 }

@Injectable({
  providedIn: 'root'
})
export class AppManagementService {
  API_URL="http://alankar.me:8009/api";
  constructor(private http:HttpClient) { }

  getAppData():Observable<App[]>{
    return this.http.get<any>(this.API_URL+"/apps").pipe(
      map(posts=>{
        
        let appData:AppModel[]=[];
        for(let id in posts){
          appData.push({...posts[id],id,name})
        }
        return appData;
      })
    );
  }

  getSingleApp(appId){
    return this.http.get<{[id:string]:EditModel}>('http://alankar.me:8009/api/apps/'+appId)
    .pipe(map(posts=>{
      let editAppData:EditModel[]=[];
      for(let id in posts){
        id.toString();
        editAppData.push({ ...posts[id], id})
      }
      return editAppData;
    }))
  }

  getDidYouKnow():Observable<DidYouKnow[]>{
    return this.http.get<any>(this.API_URL+'/faqs').
    pipe(map(res=>{
      //return res
      console.log("getproducts")
      console.log(res);
      if(res.status == "success"){
      return res.data.map(sp=>{
        var order:Faq={
          id: sp.id, 
          title: sp.title,
          description: sp.description,
        }
        return order;
      });
    }
    else{
      return of([]);
    }
    })
    )
  }

  getFaqs():Observable<Faq[]>{
    return this.http.get<any>(this.API_URL+'/faqs').
    pipe(map(res=>{
      //return res
      console.log("getproducts")
      console.log(res);
      if(res.status == "success"){
      return res.data.map(sp=>{
        var order:Faq={
          id: sp.id, 
          title: sp.title,
          description: sp.description,
        }
        return order;
      });
    }
    else{
      return of([]);
    }
    })
    )
  }

  getSingleFaq(faqId){
    return this.http.get<{[id:string]:Faq}>('http://alankar.me:8009/api/faqs/'+faqId)
    .pipe(map(posts=>{
      let editAppData:Faq[]=[];
      for(let id in posts){
        id.toString();
        editAppData.push({ ...posts[id], id})
      }
      return editAppData;
    }))
  }

  getProducts(): Observable<App[]> {
    return this.http.get<any>(this.API_URL+'/apps').
    pipe(map(res=>{
      //return res
      console.log("getproducts")
      console.log(res);
      if(res.status == "success"){
      return res.data.map(sp=>{
        var order:App={
          id: sp.id, 
          name: sp.name,
          description: sp.description,
          token: sp.token,
          rating:sp.rating,
          downloads:sp.downloads,
          appstoreLink:sp.appstoreLink,
          playstoreLink:sp.playstoreLink,
          //category:sp.category.name,
        }
        return order;
      });
    }
    else{
      return of([]);
    }
    })
    )
  }
  
/*  getUsers(): Observable<App[]> {
    return this.http
      .get(this.API_URL)
      .pipe<App[]>(map((data: any) => data.apps));
  }
  getRandomUsers(): Observable<App> {
    const URL = `${this.API_URL}`;
    return this.http.get<App>(URL).pipe(
      tap((receivedData: App) => console.log(receivedData)),
      map((receivedData: App) => {
          return new dynElement(
              receivedData.id, 
              receivedData.name, 
              receivedData.description, 
              receivedData.token,
              receivedData.rating,
              receivedData.downloads,
              receivedData.appstoreLink,
              receivedData.playstoreLink,
             // receivedData.category,
              )
      })   
    );
   }
  */
}
