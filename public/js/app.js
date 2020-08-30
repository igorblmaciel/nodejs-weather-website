console.log('Client side javascript')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From javascript'


weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''
  
const url = 'http://localhost:3000/weather?address='+location
fetch(url).then((response)=>{
  response.json().then((data)=> {

    if(data.error) {
       messageOne.textContent = data.error
        // console.log(data.error)
    }else{
      messageOne.textContent = data.location 
      
      messageTwo.textContent =    'Description: ' + data.forecast.description +
                                  ' Temperature: '+ data.forecast.temperature + 
                                  ' Feelslike: '  + data.forecast.feelslike

      // console.log(data.location)
      console.log(data.forecast)
    }
    
  })

})


})