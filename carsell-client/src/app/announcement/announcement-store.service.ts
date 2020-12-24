import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AnnouncementCreate, AnnouncementPreview, FileUpload, FileUploadModel } from './models';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementStoreService {

  private readonly _announcementId = new BehaviorSubject<number>(undefined);

  private readonly _changeStep = new BehaviorSubject<number>(undefined);

  private readonly _initDataSecondStep = new Subject();

  private readonly _initDataThirdStep = new Subject();

  private readonly _announcements = new BehaviorSubject<AnnouncementPreview[]>([]);

  private readonly _filesToUpload = new BehaviorSubject<FileUpload[]>([]);

  private get filesToUpload(): FileUpload[] {
    return this._filesToUpload.getValue();
  }

  private set filesToUpload(files: FileUpload[]) {
    this._filesToUpload.next(files);
  }

  public getFilesToUpload$(): Observable<FileUpload[]> {
    return this._filesToUpload.asObservable();
  }

  public setFilesToUpload(files: FileUpload[]) {
    this.filesToUpload = files;
  }

  public addFileToUpload(file: FileUpload) {
    this.filesToUpload = [
      ...this.filesToUpload,
      file
    ];
  }

  public removeFileToUpload(index: number) {
    this.filesToUpload.splice(index, 1);
  }

  private get announcements(): AnnouncementPreview[] {
    return this._announcements.getValue();
  }

  private set announcements(announcements: AnnouncementPreview[]) {
    this._announcements.next(announcements);
  }

  public getAnnouncements$(): Observable<AnnouncementPreview[]> {
    return this._announcements.asObservable();
  }

  public setAnnouncements(announcements: AnnouncementPreview[]) {
    this.announcements = announcements;
  }


  private get announcementId(): number {
    return this._announcementId.getValue();
  }

  private set announcementId(id: number) {
    this._announcementId.next(id);
  }

  public getAnnouncementId(): number {
    return this.announcementId;
  }

  public setAnnouncementId(id: number) {
    this.announcementId = id;
  }

  public initDataSecondStep() {
    this._initDataSecondStep.next();
  }

  public get initDataSecondStep$() {
    return this._initDataSecondStep.asObservable();
  }

  public initDataThirdStep() {
    this._initDataThirdStep.next();
  }

  public get initDataThirdStep$() {
    return this._initDataThirdStep.asObservable();
  }

  public get changeStep$(): Observable<number> {
    return this._changeStep.asObservable();
  }

  private set step(step: number) {
    this._changeStep.next(step);
  }

  private get step(): number {
    return this._changeStep.getValue();
  }

  public changeStep(step: number) {
    this.step = step;
  }



}
