export class Exercise {
  constructor(
    public name: string,
    public muscle?: string,
    public sets?: number,
    public reps?: number,
    public weight?: number
  ) {}
}
