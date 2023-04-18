import { BankAccountPipe } from './bank-account.pipe';

describe('BankAccountPipe', () => {
  it('create an instance', () => {
    const pipe = new BankAccountPipe();
    expect(pipe).toBeTruthy();
  });
});
