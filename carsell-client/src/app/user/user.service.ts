import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from './user.models';

const routes = {
  userInfo: (userId?: number) => userId !== null ? `api/users/userInfo?userId=${userId}` : `api/users/userInfo`
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public getUserInfo(userId: number): Observable<UserInfo> {
    return this.httpClient.get<UserInfo>(routes.userInfo(userId));
  }

  public editUserInfo(userInfo: UserInfo): Observable<any> {
    return this.httpClient.put<UserInfo>(routes.userInfo(), userInfo);
  }
}
