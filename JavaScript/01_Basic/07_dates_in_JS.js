let date = new Date

// console.log(date); //output: 2024-09-24T09:50:24.000Z (current date and time)

// console.log(date.toString()); // output:Tue Sep 24 2024 14:49:41 GMT+0500 (Pakistan Standard Time) //(current date,time,timeZone)

// console.log(date.toDateString()); //  output:Tue Sep 24 2024//complete date only(day,date,month,year)

// console.log(date.toLocaleString());// output: 9/24/2024, 2:51:42 PM

// console.log(date.toLocaleDateString()); // output: 9/24/2024

// console.log(date.toTimeString()); // output: 14:52:20 GMT+0500 (Pakistan Standard Time)

// console.log(date.toLocaleTimeString()) // Converts a time to a string by using the current or specified locale, output:2:52:39 PM



// console.log(date.getDay()); //output : 2 (current day of week) (starts from monday)

// console.log(date.getDay()+1); //output : 3 
// console.log(date.getDate()); //output : 24 (current date)


// console.log(date.getFullYear()); //output: 2024 (current year)

// console.log(date.getMinutes()); // get minutes of current time for example extract 31 from 10:31 AM or PM, following two on same pattern
// console.log(date.getHours());
// console.log(date.getSeconds());



// console.log((date.getTime())); // Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.

// console.log(Math.floor(date.getTime() / 1000)); // Returns the stored time value in seconds (without decimal points) since midnight, January 1, 1970 UTC.



// console.log(typeof (date.toJSON())); // type:string






// let myCreatedDate = new Date(2024,8,24) 

// console.log(myCreatedDate.toDateString());


// let myCreatedDate = new Date(2024,0,24,2,58)
// console.log(myCreatedDate.toLocaleString());


// let myCreatedDate = new Date("2024-09-24")
// console.log(myCreatedDate.toLocaleString());


// let myNewCreatedDate = new Date("09-24-2024")
// console.log(myNewCreatedDate.toString());

// console.log(myNewCreatedDate.getMonth())

let myTimeStamps = Date.now()

// console.log(myTimeStamps);


// let myName = new String("AaMna AnSari")