import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MainCategory, Make, AnnouncementPreview, CategoryPair, AnnouncementCreate, ImageFile, AnnouncementListItemModel } from './models';
import { HttpClient } from '@angular/common/http';

const routes = {
  categories: () => `announcements/categories`,
  groupmakes: (mainCategoryId: number) => `announcements/groupmakes?mainCategoryId=${mainCategoryId}`,
  regions: () => `announcements/regions`,
  announcement: () => `announcements/announcement`,
  announcements: () => `announcements/announcements`,
  upload: () => `announcements/upload`,
  announcementPreview: (announcementVehicleId: number) =>
    `announcements/announcementPreview?announcementVehicleId=${announcementVehicleId}`,
  images: (announcementId: number) => `announcements/images?announcementId=${announcementId}`,
};

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  constructor(private httpClient: HttpClient) { }

  public getCategories(): Observable<CategoryPair[]> {
    return this.httpClient.get<CategoryPair[]>(routes.categories());
  }

  public getMakes(mainCategoryId: number): Observable<Map<string, Make[]>> {
    return this.httpClient.get<Map<string, Make[]>>(routes.groupmakes(mainCategoryId));
  }

  public getRegions(): Observable<Map<string, string[]>> {
    return this.httpClient.get<Map<string, string[]>>(routes.regions());
  }

  public createAnnouncement(announcement: AnnouncementCreate): Observable<number> {
    return this.httpClient.post<number>(routes.announcement(), announcement);
  }

  public getAnnouncementPreview(announcementId: number): Observable<AnnouncementPreview> {
    return this.httpClient.get<AnnouncementPreview>(routes.announcementPreview(announcementId));
  }

  public getAnnouncements(): Observable<AnnouncementPreview[]> {
    return this.httpClient.get<AnnouncementPreview[]>(routes.announcements());
  }
  public upload(file: File, announcementId: number): Observable<any> {
    const uploadData = new FormData();
    uploadData.append('imageFile', file, file.name);
    uploadData.append('announcementId', announcementId.toString());
    return this.httpClient.post(routes.upload(), uploadData, {
      observe: 'events',
      reportProgress: true,
      responseType: 'json',
    });
  }

  public getImages(announcementId: number): Observable<ImageFile[]> {
    return this.httpClient.get<ImageFile[]>(routes.images(announcementId));
  }

}
