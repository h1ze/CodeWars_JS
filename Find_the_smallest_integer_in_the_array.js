// Given an array of integers your solution should find the smallest integer.

// Упорядочиваем элеметенты через функцию в методе sort и берем первый элемент в массиве

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return args.sort( (a, b) => a - b) [0];
    }
  }

// Через Math.min

class SmallestIntegerFinder2 {
  findSmallestInt2(args2) {
    return Math.min(...args2);
  }
}