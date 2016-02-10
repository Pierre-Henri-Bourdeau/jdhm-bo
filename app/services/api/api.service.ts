import {Injectable} from 'angular2/core';
import {Http, Response, Headers, HTTP_PROVIDERS} from 'angular2/http'
import {Observable} from 'rxjs/Observable';

@Injectable()

export class ApiService {

    private http: Http;
    private baseURL: string;

    constructor(http: Http) {
        this.http = http;
        this.baseURL = 'http://jdhm-api/app_dev.php';
    }

    /*
    * Get method for the API
    */
    public get(url: string): any {
        return this.http.get(this.baseURL + url)
                   .map(res => res.json())
                   .catch(this.handleError);
    }

    /*
    * Post method for the PAI
    */
    public post(url: string, data): any {
        return this.http.post(this.baseURL + url, JSON.stringify(data))
                   .map(res => res.json())
                   .catch(this.handleError);
    }

    /*
    * Error handling for the API
    */
    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }

}
