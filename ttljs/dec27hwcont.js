Array.prototype.processString = function (params) {
    
}

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

arr.processString(handleShortString, handleLongString){

}

function handleLongString(str) {
    let res1 = str.split(".");
    let res2 = res1.filter(s => s.length > 0);
    let res3 = res2.map(s => s.trim());
    let res4 = res3.reverse();
    let res5 = res4.join(".");
    let res6 = res5 + ".";
    console.log(res6);
}

function handleShortString(str) {
    let res1 = str.split(".");
    let res2 = res1.filter(s => s.length > 0);
    let res3 = res2.map(s => s.trim());
    let res4 = res3.
}