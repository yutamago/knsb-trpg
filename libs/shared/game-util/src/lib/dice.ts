function randomIntFromInterval(min: number, max: number): number { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export class Dice {
  public static roll1D6(): number {
    return randomIntFromInterval(1, 6);
  }

  public static roll2D6(): number {
    return randomIntFromInterval(1, 6) + randomIntFromInterval(1, 6);
  }

  public static rollD66(): number {
    return (randomIntFromInterval(1, 6) * 10) + randomIntFromInterval(1, 6);
  }
}
