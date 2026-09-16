//Step1
function getData1(){
return "Hello";
}

const res1 = console.log(getData1())//Hello

//Step2
async function getData2(){
return "Hello";
}

const res2 = console.log(getData2())//Promise { 'Hello' }

//Step3
async function getData3(){
return "Hello";
}
getData3().then(data=>console.log(data))//Hello

//Step4
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data mil gaya");
        }, 2000);
    });
}

async function showData() {
    const result = await getData();

    console.log(result);
}

showData();//Data mil gya --2sec baad

//Step5
async function getUser() {
    console.log("1");

    const data = await fetchData();

    console.log("2");
}

getUser();

console.log("3");//132

//Step6
async function getUsers() {
    const response = await fetch("https://example.com/users");//fetch->Response object

    const data = await response.json();//response.json()->actual usable JavaScript data

    console.log(data);
}

//Step7