import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StoryTellerService {

   private baseUrl: string;

   constructor(
      private httpClient: HttpClient,
      @Inject("BASE_URL") baseUrl: string) {
      this.baseUrl = baseUrl + 'api/Story';
   }

   public getFirstStory() {
      return this.httpClient.get(`${this.baseUrl}`);
   }

   public getStory(id: string) {
      return this.httpClient.get(`${this.baseUrl}/${id}`);
   }
}

export interface Story {
   id: string;
   text: string;
   nextId: string;
   options?: StoryPath[]
}

export interface StoryPath {
   text: string;
   goToId: string;
}