import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MainCategory } from './models';
import { HttpClient } from '@angular/common/http';

const routes = {
  categories:() => `announcements/categories`
};

@Injectable({
  providedIn: 'root'
})

export class AnnouncementService {
 
  constructor(private httpClient: HttpClient) { }

  public getCategories(): Observable<MainCategory[]>{
    return this.httpClient.get<MainCategory[]>(routes.categories());
  }
}
