import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MainCategory, Make, Announcement } from './models';
import { HttpClient } from '@angular/common/http';

const routes = {
  categories: () => `announcements/categories`,
  groupmakes: (mainCategoryId: number) => `announcements/groupmakes?mainCategoryId=${mainCategoryId}`,
  regions: () => `announcements/regions`,
  announcement: () => `announcements/announcement`

};

@Injectable({
  providedIn: 'root'
})

export class AnnouncementService {

  constructor(private httpClient: HttpClient) { }

  public getCategories(): Observable<MainCategory[]> {
    return this.httpClient.get<MainCategory[]>(routes.categories());
  }

  public getMakes(mainCategoryId: number): Observable<Map<String, Make[]>> {
    return this.httpClient.get<Map<String, Make[]>>(routes.groupmakes(mainCategoryId));
  }

  public getRegions(): Observable<Map<String, String[]>> {
    return this.httpClient.get<Map<String, String[]>>(routes.regions());
  }

  public createAnnouncement(announcement: Announcement): Observable<number> {
    return this.httpClient.post<number>(routes.announcement(), announcement);
  }
}
