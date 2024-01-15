//Promises:
//In JavaScript, a promise is like a special kind of object that represents the eventual completion or failure of an asynchronous operation. Let's break this down in simpler terms:
//Example: Imagine ordering food online. You make a promise (place an order) to get some food delivered. The delivery might take some time, but you don't wait doing nothing. Instead, you do other things (asynchronous behavior). When the food arrives, you either enjoy your meal (fulfilled promise) or deal with a problem like a missing item (rejected promise).

let pr = new Promise((res,rej) => {
    let pizzadelivery = true;
    if(pizzadelivery){ 
        res("Pizza is ready");
    }else{
        rej("Pizza is not ready");
    }
});

// Now you can react to the promise being fulfilled or rejected
pr.then((data)=>{
    console.log(data)
    return data;
}).catch((err)=>{
    console.log(err)
});


async function create_order(){
    console.log("Create Order")
}
async function process_payment(){
    console.log("Process Payment")
}
async function show_order_summery(){
    console.log("Show Order Summery")
}
async function update_wallet(){
    console.log("Update Wallet")
}
//async await 
async function asynchronousBehavior(){
    await create_order();
    await process_payment();
    await show_order_summery();
    await update_wallet();
}

asynchronousBehavior(); 