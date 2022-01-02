let fs = require("fs");

function primeSieve(phandler, nphandler) {
    let oarr = this;
    phandler.calledForTheFirstTime = true;
    nphandler.calledForTheFirstTime = true;

    for (let i = 0; i < oarr.length; i++) {
        let num = oarr[i];

        let isPrime = true;
        for (let div = 2; div * div <= num; div++) {
            if (num % div == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime == true) {
            phandler(num);
        } else {
            nphandler(num);
        }
    }
}
Array.prototype.sieve = primeSieve;



let arr = [
    "My name is amit. I do Programming. I want to serve the community.",
    "I am also a Book lover. I usually read self-help books.",
    "I love reading on paperback. But I also have a kindle",
    "Most of my time goes in front of screen. But i love that too.",
    "yrhwe dslkjwdlf dsflks.sdlfj sdljfs sdlfkj.",
    "jdsf dhfs.dsjf.lf",
    "khdf dkhfslk sdf ds;lkf. dfsl sdlkfj lewruwioec fdljs.",
    "kjhfddsk slkdjfljs dskfhskd dsfkweijrf sifjel.sefljws sfljs sdjfskjhd."
];




arr.sieve(logAllPrimes, logAllNonPrimes)

function logAllPrimes(num) {
    if (logAllPrimes.calledForTheFirstTime == true) {
        if (fs.existsSync("primes.txt")) {
            fs.rmSync("primes.txt");
        }
        logAllPrimes.calledForTheFirstTime = false;
    }

    fs.appendFileSync("primes.txt", num + "->", "utf-8");
}

function logAllNonPrimes(num) {
    if (logAllNonPrimes.calledForTheFirstTime == true) {
        if (fs.existsSync("non-primes.txt")) {
            fs.rmSync("non-primes.txt");
        }
        logAllNonPrimes.calledForTheFirstTime = false;
    }
    fs.appendFileSync("non-primes.txt", num + "->", "utf-8");
}