
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

//First Models Project
const Vehicule = Backbone.Model.extend({
    idAttribute: "registrationNumber",
    urlRoot: "/api/vehicules",
    start: function(){
        console.log("Vehicule started");
    },
    validate: function(attrs){
        if(!attrs.registrationNumber)
        return "idAttribute is required";
    }
});

//Derive a new model from the Vehicule Model
const Car = Vehicule.extend({
    start: function(){
        console.log(`Car with registration number ${this.get("registrationNumber")} started`);
    }
});

//create a new instance
let car1 = new Car({
    registrationNumber: "XL1887",
    color: "Blue"
});

car1.unset("registrationNumber");

//check if the instance is valid
console.log(car1.isValid());
if(!car1.isValid())
    console.log(car1.validationError);

car1.set("registrationNumber", "XL1887");

if(!car1.isValid())
    console.log(car1.validationError);

console.log(car1.start());