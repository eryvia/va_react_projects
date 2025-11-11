/*type bankSpaces = {
  id: string
  name: string
  interestRate: number
}*/

export const banksInfo = [
    { id: 'moneta', name: 'Moneta Money Bank', interestRate: 0.05 },
    { id: 'cs', name: 'Česká spořitelna', interestRate: 0.035 },
    { id: 'kb', name: 'Komerční banka', interestRate: 0.03 },
    { id: 'airbank', name: 'Air Bank', interestRate: 0.045 }
] as const; //readabel only
