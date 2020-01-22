import { State, StateContext, Action, Selector } from '@ngxs/store';

import { AddCat } from './cats.actions';

@State<string[]>({
  name: 'cats',
  defaults: ['nameless cat one', 'nameless cat two', 'nameless cat one', 'nameless cat two', 'nameless cat one', 'nameless cat two']
})
export class CatsState {
  @Selector()
  static cats(state: string[]): string[] {
    return state;
  }

  @Action(AddCat)
  addCat(ctx: StateContext<string[]>, { name }: AddCat) {
    const state = ctx.getState();
    ctx.setState([...state, name]);
  }
}
