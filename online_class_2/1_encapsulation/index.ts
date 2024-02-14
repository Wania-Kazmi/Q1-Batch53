//What is an Encapsulation?
//Encapsulation is a concept where the details of an object's implementation are hidden from
//the outside world, and access to that
//object's data is controlled through a public interface. This means that the object's
//properties (data) are kept private, and they can only be accessed or modified through methods (functions)
//that are part of the object's public interface. Encapsulation ensures that an object's internal state
//cannot be changed directly, protecting against unintended modifications and making the code more secure
//and easier to maintain.

//Basic understanding:
//Encapsulation in TypeScript, or in any object-oriented programming language, is like having a personal diary
//with a lock. Imagine you write all your secrets, thoughts, and personal information in this diary.
//You wouldn't want just anyone to open it up and read everything, right? So, you put a lock on it.
//You have the key, and you can decide if you want to share that key with anyone else.
//This diary with a lock is your way of controlling who sees the information inside.

//In TypeScript, encapsulation works similarly but with data and functions inside objects (which are like the diary). Here's how it breaks down:

//------------------------------------------PRIVATE INFORMATION------------------------------------------------------------
//Private Information (The Diary's Pages): Just like the pages of your diary, in a TypeScript class, you have data (properties)
//and functions (methods). Some of this information is private, meaning you don't want it to be accessible from outside the class.
//You only want it to be used or modified by the functions inside the class itself.

//-----------------------------------------PRIVATE KEYWORD------------------------------------------------------------------
//The Lock (Private Keyword): TypeScript uses something called the private keyword, which acts like the lock on your diary.
//When you mark a property or method in a class as private, it means that no one outside the class can access or modify it directly.
//It's locked away and protected.

//------------------------------------------PUBLIC METHODS--------------------------------------------------------------------
//Sharing the Key (Public Methods): Sometimes, you might want to let others have some information or interact with your diary
//in a controlled way. For example, you could have a public method in your class that lets others read a summary of your thoughts
//without seeing everything. This method is like you deciding to share a key to a specific part of your diary, but not everything.
//In TypeScript, public methods allow controlled access to the private data. You can perform checks or modify the data in specific
//ways before giving it out.

//Example:
class BankAccount {
  private balance: number; // This is like the pages of your diary. It's private.

  constructor(initialBalance: number) {
    this.balance = initialBalance; // You decide the initial balance when you create the account.
  }

  // Public method to add money to the account. Like giving someone a key to add notes to your diary.
  //setter function
  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount; // Safely add money to the balance.
    } else {
      console.log("You can only deposit a positive amount.");
    }
  }

  // Another public method to check the balance. Like allowing someone to read a summary without seeing everything.
  //getter function
  getBalance(): number {
    return this.balance; // Show the balance.
  }
}

let myAccount = new BankAccount(100); // Create a new bank account with $100.
myAccount.deposit(50); // Deposit $50.
console.log(myAccount.getBalance()); // Check the balance, should be $150.


//The balance is private, like the pages of your diary. It's protected, so no one outside the class can directly see or change it.
//The deposit method is like giving someone a key to add something to your diary but in a controlled way. They can't take anything out or see everything, just add money if it's a positive amount.
//The getBalance method lets you share how much money is in the account without exposing the internal workings or allowing direct modifications.

//This is encapsulation in TypeScript: keeping some parts of your class private and controlling access through public methods, much like a diary with a lock and selective key sharing.

//Example 2
//TypeScript supports getters/setters as a way of intercepting
//accesses to a member of an object, thus allowing Encapsulation
//This gives you a way of having finer-grained control over how a
//member is accessed on each object.

//Encapsulation is the packing of data and functions into a single
//component.
//It allows selective hiding of properties and methods in an
//object by building an impenetrable wall to protect the code
// from accidental corruption.
