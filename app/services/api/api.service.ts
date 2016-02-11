import {Injectable} from 'angular2/core';
import {Http, Response, Headers, HTTP_PROVIDERS} from 'angular2/http'
import {Observable} from 'rxjs/Observable';

/*
* @todo: see :
* http://stackoverflow.com/questions/12111936/angularjs-performs-an-options-http-request-for-a-cross-origin-resource
* https://angular.io/docs/js/latest/api/http/RequestOptions-class.html
*/
import {RequestOptions, Request, RequestMethod} from 'angular2/http';

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
                   .map(res => res.json().data)
                   .catch(this.handleError);
    }

    /*
    * Post method for the API
    */
    public post(url: string, data): any {
        return this.http.post(this.baseURL + url, JSON.stringify(data))
                   .map(res => res.json())
                   .catch(this.handleError);
    }

    /*
    * Put method for the API
    */
    public put(url: string, data): any {

        // See @todo on top in import section
        var options = new RequestOptions({
            method: RequestMethod.Put,
            body: JSON.stringify(data),
            url: this.baseURL + url
        });

        return this.http.put(this.baseURL + url, JSON.stringify(data))
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
