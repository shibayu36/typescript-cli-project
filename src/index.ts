const str = process.argv[2];
run(str);

function run(str: string): void {
  console.log(str);
}

export function add(num1: number, num2: number): number {
  return num1 + num2;
}
