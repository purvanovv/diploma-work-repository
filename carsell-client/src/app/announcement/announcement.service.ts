import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Make,
  AnnouncementPreview,
  CategoryPair,
  AnnouncementCreate,
  ImageFile,
  AnnouncementSearch
} from './models';
import { HttpClient } from '@angular/common/http';

const routes = {
  categories: () => `api/auth/announcements/categories`,
  groupmakes: (mainCategoryId: number) => `api/auth/announcements/groupmakes?mainCategoryId=${mainCategoryId}`,
  regions: () => `api/auth/announcements/regions`,
  announcement: (announcementId?: number) => announcementId !== null ? `api/announcements/announcement?announcementId=${announcementId}` : `api/announcements/announcement`,
  announcements: () => `api/auth/announcements/announcements`,
  upload: () => `api/announcements/upload`,
  announcementPreview: (announcementVehicleId: number) =>
    `api/auth/announcements/announcementPreview?announcementVehicleId=${announcementVehicleId}`,
  getImages: (announcementId: number) => `api/auth/announcements/images?announcementId=${announcementId}`,
  deleteImage:(announcementId: number) => `api/announcements/images?announcementId=${announcementId}`,
  search: () => 'api/auth/announcements/search'
};

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  constructor(private httpClient: HttpClient) { }

  public getCategories(): Observable<CategoryPair[]> {
    return this.httpClient.disableHttpAuth().get<CategoryPair[]>(routes.categories());
  }

  public getMakes(mainCategoryId: number): Observable<Map<string, Make[]>> {
    return this.httpClient.disableHttpAuth().get<Map<string, Make[]>>(routes.groupmakes(mainCategoryId));
  }

  public getRegions(): Observable<Map<string, string[]>> {
    return this.httpClient.disableHttpAuth().get<Map<string, string[]>>(routes.regions());
  }

  public createAnnouncement(announcement: AnnouncementCreate): Observable<number> {
    return this.httpClient.post<number>(routes.announcement(), announcement);
  }

  public editAnnouncement(announcement: AnnouncementCreate): Observable<number> {
    return this.httpClient.put<number>(routes.announcement(), announcement);
  }

  public getAnnouncementPreview(announcementId: number): Observable<AnnouncementPreview> {
    return this.httpClient.disableHttpAuth().get<AnnouncementPreview>(routes.announcementPreview(announcementId));
  }

  public getAnnouncements(): Observable<AnnouncementPreview[]> {
    return this.httpClient.disableHttpAuth().get<AnnouncementPreview[]>(routes.announcements());
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
    return this.httpClient.disableHttpAuth().get<ImageFile[]>(routes.getImages(announcementId));
  }

  public searchAnnouncements(searchData: AnnouncementSearch): Observable<AnnouncementPreview[]> {
    return this.httpClient.disableHttpAuth().post<AnnouncementPreview[]>(routes.search(), searchData);
  }

  public deleteImages(announcementId: number): Observable<any> {
    return this.httpClient.delete(routes.deleteImage(announcementId));
  }

  public removeAnnouncementById(announcementId: number): Observable<any> {
    return this.httpClient.delete(routes.announcement(announcementId));
  }

}
