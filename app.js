// function sum(a, b){
// 	return a + b;
// }

/*1a. IMPORT MODULE FROM file import-modules*/
// const send = require("./import-modules");

//1a. can use var, let, const
// const total = send.sum(10,100);
// 	console.log("TOTAL: ",total);

/*1b. Object Destruction*/
// const { sum, equals } = require('./import-modules'); //import 2 argument sum and equals
// const http = require('http');
//
// const server = http.createServer(( req, res) => {
// 	res.end(" halo kakak ku, apa kabar ?");
// });
//
// server.listen(4000);

//1b
// const total = sum(10,100);
// 	console.log("TOTAL 1a: ",total);
// const totalEquals = equals(10,100);
// 	console.log("TOTAL 1b: ",totalEquals);

//1c EXPRESS
// const express = require('express')
// const app = express()
//
// app.get('/', (req, res) => {
// 	res.send("pesan dari express")
// })
// app.listen(4000);

//FOr event Loop async & sync
const fs = require('fs')
const fileName = "teks.txt";

const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());

//sync
// const data = fs.readFileSync(fileName);
// console.log(data.toString());
// console.log("sync program");

//async
// fs.readFile(fileName, (err, data) => {
// 	if(err){
// 		console.log(err);
// 	}
// 	console.log(data.toString());
// });

fs.readFile(fileName, (err, data) => {
  if (err) errHandler(err);
  dataHandler(data);
});

console.log("Async Program");