/*type bankSpaces = {
  id: string
  name: string
  interestRate: number
}*/

export const banksInfo = [
    { id: 'moneta', name: 'Moneta Money Bank', interestRate: 0.05, color: '#fc561f' },
    { id: 'cs', name: 'Česká spořitelna', interestRate: 0.035, color: '#ff835a' },
    { id: 'kb', name: 'Komerční banka', interestRate: 0.03, color: '#ffb69e' },
    { id: 'airbank', name: 'Air Bank', interestRate: 0.045, color: '#f9b6c5' }
] as const; //readabel only
