//! დაწერეთ არსებული კოდი Typescript-ში:

// მაგალითი 1

let nameaa: string = "Alice";

// მაგალითი 2

let numbers: number[] = [1, 2, 3];

// მაგალითი 3

function multiply(a: number, b: number): number {
  return a * b;
}

// მაგალითი 4

const usere: { id: number; name: string } = { id: 1, name: "Alice" };

// მაგალითი 5
// რისთვის ვიყენებთ არსებული კოდში = Guest-ს :

function greet(name: string = "Guest") {}

// პასუხი: Guest-ის დაწერით ჩვენ, თუ მაგალთად name არ იარსებებს, მის მაგივრად ფუნქცია მიიღებს ამ string-ს.

// მაგალითი 6
// დაწერეთ ტიპი რომელიც მოერგება ყველა ქვემოთ ჩამოთვლილ ელემენტს. მაგ: type Config = {

type config = {
  theme?: string;
  tester?: string;
  options?: {
    fontSize?: number;
    layout?: null;
  };
};

const config1: config = {
  theme: "dark",
  options: {
    fontSize: 16,
    layout: null,
  },
};

const config2: config = {
  theme: "dark",
};

const config3: config = {
  tester: "test",
};

// მაგალითი 7
// დაწერეთ ტიპი რომელიც მოერგება ყველა ქვემოთ ჩამოთვლილ ელემენტს. მაგ: type MixedArray =
type mixedArray = (
  | number
  | boolean
  | string
  | { name: string }
  | { isValid: boolean }
)[];

const array1: mixedArray = [42, "hello", { name: "Alice" }];

const array2: mixedArray = ["apple", true, { isValid: false }];

const array3: mixedArray = [];

// მაგალითი 8
// აღწერეთ რისი ტიპიზაცია ხდება არსებულ კოდში წერილობით

// ფუნქციის return-ის მნიშვნელობის
type Handler = {
  process?: () => string;
  validate?: (input: string) => boolean;
  log?: () => void;
};

// მაგალითი 9

// შექმენით ტიპი მონაცემისთივს:

type User = {
  id: number;
  username: string;
  isAdmin: boolean;
  profile: {
    fullName: string;
    age: number;
    interests: string[];
  };
  settings: {
    theme: string;
    notifications: {
      email: boolean;
      sms: boolean;
    };
  };
  metadata: undefined;
};

const user: User = {
  id: 101,
  username: "tech_learner",
  isAdmin: false,
  profile: {
    fullName: "Alice Johnson",
    age: 25,
    interests: ["coding", "gaming", "reading"],
  },
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
  },
  metadata: undefined,
};
