import { Injectable } from '@angular/core';
import { iPost } from './Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiUrl: string = '../../../assets/db.json';
  postArr: iPost[] = [];

  constructor() {
    this.getFromJson();
  }

  async getFromJson(): Promise<void> {
    const res = await fetch(this.apiUrl);
    const res_1 = await res.json();
    this.postArr = res_1.posts;
  }

  async getAll(): Promise<iPost[]> {
    if (this.postArr.length === 0) {
      await this.getFromJson();
      return this.postArr;
    }
    return Promise.resolve(this.postArr);
  }

  async getById(id: number): Promise<iPost | undefined> {
    if (this.postArr.length === 0) {
      await this.getFromJson();
      return this.postArr.find(p => p.id === id);
    }
    return Promise.resolve(this.postArr.find(p => p.id === id));
  }


  async getPostsTrueOrFalse(status: boolean): Promise<iPost[]> {
    if (this.postArr.length === 0) {
      await this.getFromJson();
    }
    return this.postArr.filter(p => p.active === status);
  }
}
