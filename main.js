"use strict";

let express = require('express');
let app = new express();

app.use(express.static('./'))

// --- API \/
app.get('/:str', (req, res) => {
  // ---
  var str = req.params.str;
  function getDate(x) {
  	let date = new Date(x);
  	if (date == 'Invalid Date') {
  		date = new Date (parseInt(x) * 1000);
  	}
  	return date;
  }

  function getDateObj(time) {
    var obj = {}
  	obj.unix = Math.ceil(time.getTime() / 1000);
  	obj.natural = time.toDateString().slice(4);
  	if (obj.natural === "Invalid Date") {
  		obj.natural = null;
  		obj.unix = null;
  	}
  	return obj
  }

  var timeObj = getDateObj(getDate(str))
  res.status(200).json(timeObj);
  // ---
})
// --- API /\

app.listen(3000, () => {
  console.log("Listening");
});
