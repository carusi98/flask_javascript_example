// How to view JS Functions in Console logging
//console.log(window)

// Create a request variable and assign a new XMLHttpRequest object to it.
//var request = new XMLHttpRequest()
//
//// Open a new connection, using the GET request on the URL endpoint and perform the request
//request.open('GET', '/api/getdata', true)
//request.send();
//
//
//request.onload = ()=>{
//  if(request.status == 200){
//    var obj = JSON.parse(request.response)
//    console.log(obj)
//  } else{
//    console.log(`error ${request.status}`)
//  }
//  
//  
//  //document.write(`<pre>${request.response}</pre>`)
//  //console.log(JSON.parse(request.response))
//}
//
//request.onerror = ()=>{
//  console.log(request);
//}


function getStatus() {
  return new Promise((resolve, reject) => {
      fetch('/api/getdata')
      .then(data => {
          resolve(data.json());
          console.log(data)
      }).catch(err => {
          console.log(err);
          reject(err);
      })
  });
}

function postStatus(id) {
  return new Promise((resolve, reject) => {
      fetch('/api/postdata',{
        method: 'POST',
        body: JSON.stringify({ 'action' : id }),
        headers: {
            'Content-Type' : 'application/json'
        } 
      })
      .then(data => {
          console.log(id)
          resolve(data.json());
          console.log(data)
      }).catch(err => {
          console.log(err);
          reject(err);
      })
  });
}





function LED_onbuttonClick() {
  getStatus().then(data => {
    const prettyText = JSON.stringify(data);
    output.innerHTML = `<h1>API Output:</h1>
                        <pre>${prettyText} </pre>`
                        //console.log(data.Switch2)
  })
  .catch(e => {
      output.innerHTML = `<h1>API Error: API UNREACHABLE</h1>`;
  })
}

function LED_offbuttonClick() {
  const id = 'LED_off';
  postStatus(id).then(data => {
    const prettyText = JSON.stringify(data);
    output.innerHTML = `<h1>API Output:</h1>
                        <pre>${prettyText} </pre>`
                        //console.log(data.Switch1)
  })
  .catch(e => {
      output.innerHTML = `<h1>API Error: API UNREACHABLE</h1>`;
  })
}


