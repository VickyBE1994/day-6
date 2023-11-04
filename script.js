
//a.Write a constructor for the class Movie, which takes a String representing 
//the title of the movie, a String representing the studio, and a String representing 
//the rating as its arguments, and sets the respective class properties to these values.

class movie{
    constructor(title,studio,rating){
        this.title=title
        this.studio=studio
        this.rating=rating
    }
}
const moviename= new movie("leo","seven green studio","PG14");
console.log(moviename)


class movies{
    constructor(title,studio,rating="PG"){
        this.title=title
        this.studio=studio
        this.rating=rating
    }
}
const moviename1=new movies("leo"," 7 screen studio ",)
console.log(moviename1)

const moviename2=new movies("leo","7 screen studio","PG-14")
console.log(moviename2) 




 //Write a method getPG, which takes an array of base type Movie as its argument,
 //and returns a new array of only those movies in the
 // input array with a rating of "PG". 
 // You may assume the input array is full of Movie instances.
 //  The returned array need not be full.
 class Moviee {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(input) {
        let out = input.filter(movie => movie.rating === "PG");
        return out;
    }
}

let moviee1 = new Moviee("Thunivu", "Zee studios", "PG");
let moviee2 = new Moviee("Varisu", "Sri Venkateswara Creations", "V");
let movie3 = new Moviee("Kantara", "KRG Studios", "PG");
let movie4 = new Moviee("Vikram", "Raj kamal films", "PG-13");
let movie5 = new Moviee("veeram", "Vijaya production", "PG");

let movieArray = [moviee1, moviee2, movie3, movie4, movie5];
let pgMovies = Moviee.getPG(movieArray);
console.log(pgMovies); 



// Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
//the studio “Eon Productions”, and the rating “PG­13”


 class moviess{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
 }
 let casionoRoyale= new moviess("casino royale", "Eon productions", "PG-13")
 console.log(casionoRoyale)
 
 class Circle {
    constructor(radius = 1.0, color = "red") {
      this._radius = radius;
      this._color = color;
    }

    get radius() {
      return this._radius;
    }

    set radius(radius) {
      this._radius = radius;
    }

    get color() {
      return this._color;
    }

    set color(color) {
      this._color = color;
    }

    toString() {
      return `Circle [radius = ${this._radius} , color = ${this._color}]`;
    }

    getArea() {
      return Math.PI * Math.pow(this._radius, 2);
    }

    getCircumference() {
      return 2 * Math.PI * this._radius;
    }
  }

  const circle1 = new Circle(2, "green");
  const circle2 = new Circle(5, "Yellow");

  console.log(circle1.toString());
  console.log("Area:", circle1.getArea());
  console.log("Circumference:", circle1.getCircumference());

  console.log(circle2.toString());
  console.log("Area:", circle2.getArea());
  console.log("Circumference:", circle2.getCircumference());

 




//3.Write a “person” class to hold all the details.

class person{
    constructor(firstname ,lastname,age,department,email,city,mobile){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.department=department
        this.email=email;
        this.city=city;
        this.mobile=mobile;

    }
    getpersondetails(){
        return`name:${this.firstname} ${this.lastname}
        age:${this.age}
        department:${this.department}
        email:${this.email}
        city:${this.city}
        mobile:${this.mobile}`
        
    }

}
let person1=new person("vignesh", "murugesan", 28,"mechanical", "vickyvip81@gmail.com", "thanjavur", 9876531256);
let person2=new person("ajith", "kumar", 26, "mechanical", "ansjbu@gamil.com", "pudukkottai", 9859886044);
console.log(person1.getpersondetails());
console.log(person2.getpersondetails());


//write a class to calculate the uber price

class uberprice{
    constructor(kilometer,price){
        this.kilometer=kilometer;
        this.price=price;
        
    }
 
    get uberprice() {
        return this.kilometer * this.price;
      }
    }
  
    var uber1 = new uberprice(5,5);
    var uber2 = new uberprice(10,10);
    console.log(uber1.uberprice);
    console.log(uber2.uberprice);
    

    
  
    
  