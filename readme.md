# mongoexport-wrapper

> A node js wrapper around [`mongoexport`](https://docs.mongodb.com/manual/reference/program/mongoexport/) command


## Install

```
$ npm install --save mongoexport-wrapper
```

## Usage

```js
var mongoexport = require('mongoexport-wrapper');

var opt = {
	host : '127.0.0.1:27017' //<hostname><:port>  Default: localhost:27017
	db : 'test',
	collection :'user',
	fields : "user,email,contact",
	out : 'users.csv',
	type : 'csv'
}
//mongoexport command should be in path variable
//all options for mongoexport command can be used

mongoexport(opt,(err,result)=>{
	if(err) console.log(err);
	else console.log(result);
});
```

