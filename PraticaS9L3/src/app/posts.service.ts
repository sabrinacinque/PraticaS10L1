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

  getFromJson(): Promise<void> {
    return fetch(this.apiUrl)
      .then(res => res.json())
      .then(res => {
        this.postArr = res.posts;
      });
  }

  getAll(): Promise<iPost[]> {
    if (this.postArr.length === 0) {
      return this.getFromJson().then(() => this.postArr);
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
