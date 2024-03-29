import {Injectable} from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { AlertifyService } from '../services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
 
@Injectable()
export class MemberListResolver implements Resolve<User[]>{
    
    constructor(private userService:UserService,private router:Router,private alertify:AlertifyService){}

    resolve(route:ActivatedRouteSnapshot):Observable<User[]>{
        return this.userService.getUsers().pipe(
            catchError(error=>{
                this.alertify.error("Problem retrieving data");
                this.router.navigate(['/home']);
                //we return observable of null if theres problem
                return of(null);
            })
        )
    }
}