const forecast = (latitude, longitude, callback) => {
  const request = require('request')
  const url = 'http://api.weatherstack.com/current?access_key=084e6ff06e23c0d89336854e5a187865&query='+latitude+','+longitude

  request({ url, json:true} , (error,response)=>{
  if(error) {
    callback('Unable to connect to weather service', undefined)
  }else if(response.body.error){
    callback('Unable to find location', undefined)
  } else{
          callback(undefined, { 
            description: response.body.current.weather_descriptions[0] ,
            temperature: response.body.current.temperature ,
            feelslike: response.body.current.feelslike,
            humidity: response.body.current.humidity
            })
  
      }
  
    })
  }

  module.exports = forecast