import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public emitter = new Subject<void>()

}
