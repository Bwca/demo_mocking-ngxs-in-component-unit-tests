import { Component } from '@angular/core';

import { Store } from '@ngxs/store';
import { CatsState } from './state/cats.state';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let cat of cats">{{ cat }}</li>
    </ul>
  `
})
export class AppComponent {
  public cats: string[] = this.store.selectSnapshot(CatsState);

  constructor(private store: Store) {}
}
