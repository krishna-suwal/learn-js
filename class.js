// properties => variables
// methods => functions

class Dog {
  face = "laamcho";

  show_your_face() {
    console.log(this.face);
  }
}

class BullDog extends Dog {
  face = "thepcho";
}

const dog1 = new Dog();

dog1.show_your_face();

const dog2 = {
  face: "laamcho",

  show_your_face() {
    console.log(this.face);
  },

  leg: "asdfwe",
};

const dog3 = {
  face: "square",

  show_your_face() {
    console.log(this.face);
  },
};

const bull_dog1 = new BullDog();

bull_dog1.show_your_face();
