import { MediaMatcher } from '@angular/cdk/layout';
import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreemSize {
  private mobileQuery:MediaQueryList;
  private readonly _ismobile =signal(false);

  constructor (private mediaMatcher: MediaMatcher){
    this.mobileQuery= mediaMatcher.matchMedia('(max-width:600px)')
    this._ismobile.set(this.mobileQuery.matches);

    this.mobileQuery.addEventListener('change',(e)=>{
      this._ismobile.set(e.matches)
    })
  }

  get isMobile():Signal<boolean>{
    return this._ismobile
  }
}
