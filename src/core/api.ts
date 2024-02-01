import {NewsFeed, NewsDetail} from '../types';

export default class Api {

    url: string;
    ajax: XMLHttpRequest;

    constructor(url: string){
      this.url = url;
      this.ajax = new XMLHttpRequest();
    }
  
    getRequest<AjaxResponse>(): AjaxResponse{
      this.ajax.open('GET',this.url, false)
      this.ajax.send();
  
      return JSON.parse(this.ajax.response) as AjaxResponse;
    }
  }
  
  
  export class NewsFeedApi extends Api{
    
    constructor(url:string){
      super(url)
    }
    getData(): NewsFeed[] {
      return this.getRequest<NewsFeed[]>()
    }
  }
  
  
  export class NewsDetailApi extends Api{

    constructor(url:string){
      super(url)
    }
    getData(): NewsDetail {
      return this.getRequest<NewsDetail>()
    }
  }