export class InputDelay {
  public timer: number | null = null;
  public numberOfMs: number;

  constructor(numberOfMs: number = 500) {
    this.numberOfMs = numberOfMs;
  }

  public onSearch = <T = any>(data: T, callback: (data: T) => void) => {
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    this.timer = setTimeout(() => callback(data), this.numberOfMs) as any;
  };
}
