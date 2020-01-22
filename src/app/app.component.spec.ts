import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Store } from '@ngxs/store';
import { instance, mock } from 'ts-mockito';
import { CatsState } from './state/cats.state';

describe('AppComponent', () => {
  let mockStore: Store;
  let app: AppComponent;

  beforeEach(async(() => {
    mockStore = mock(Store);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        {
          provide: Store,
          useFactory: () => instance(mockStore)
        }
      ]
    }).compileComponents();
    mockStore = TestBed.get(Store);
  }));

  beforeEach(() => {
    jest.spyOn(mockStore, 'selectSnapshot').mockImplementation((action) => {
      if (action === (CatsState as any)) {
        return ['one cat array'];
      }
    });
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('expect cats to be the mocked value', () => {
    expect(app.cats.length).toEqual(1);
  });
});
