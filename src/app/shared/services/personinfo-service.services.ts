import {Injectable} from "@angular/core";
import {personinfo} from "../models/personinfo.model";
import  {HttpClient} from "@angular/common/http";



@Injectable()
export class PersonInfoService {
persons:personinfo[];

    apiurl="https://reqres.in/api/users";
    

    constructor(private myHttpClient:HttpClient) {
        this.myHttpClient.get("https://reqres.in/api/users").subscribe((x:any) => {this.persons=x.data;});
    }
     
    /*
    mylocal={"page":1,"per_page":3,"total":12,"total_pages":4,"data":[{"id":1,"first_name":"George","last_name":"Bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"},{"id":2,"first_name":"Janet","last_name":"Weaver","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},{"id":3,"first_name":"Emma","last_name":"Wong","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"}]}

    persons:personinfo[]=this.mylocal.data;
    */
}

