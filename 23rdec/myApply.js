
Function.prototype.myApply = function(){
    let orgFun = this;
    let args = Array.from(arguments);

    let boundFun = function(){
        let thisForOrgFun = args[0];
        let argsForOrgFun = args.slice(1);
        let argsFromInvocation = Array.from(arguments);
        argsForOrgFun = argsForOrgFun.concat(argsFromInvocation);

        orgFun.apply(thisForOrgFun, argsForOrgFun);
    }

    boundFun(args, argsForOrgFun);
}




let obj = {
    fun1: function (friend1, friend2) {
        console.log("This person is called " + this.fullName + ". His/Her age is " + this.age + ".");
        console.log(this.fullName + " Sayes hello to " + friend1);
        console.log(this.fullName + " Sayes hello to " + friend2);
    },
    fullName: "Amit Anand",
    age: 22
};

// obj.fun1("Sumit", "Girish");
let o2 = {
    fullName: "Sumeet Mallik",
    age: 34
}

// obj.fun1.call(o2, "Mehwish", "Shailja");
// o2.fullName = "Neha";
o2.age = 33;
let arr = ["Shailja", "Mehwiah"];
obj.fun1.myApply(o2, arr);

// let boundFunction = obj.fun1.bind(o2, "Mehwish", "Shailja", "Supriya");
// boundFunction("Sumeet");