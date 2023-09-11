// fetch('https://randomuser.me/api').then((response)=>{
//     let data =response.json();
//     return data;
// }).then((res)=>{
//     console.log(res);
// // }).catch((error)=>{
// // console.log(error);
// })
let locationNew ;
const apiKey = 'f89c4ff2d6441a4134f6b13975cc84ba';

function search(){
    locationNew= document.querySelector('.text').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationNew}&appid=${apiKey}`).then((response)=>{
    let data=response.json();
    return data;
}).then((data)=>{
    let city = data.name;
    let contry= data.sys.country;
    let temperature= Math.round(data.main.temp-273.15);
    let weather= data.weather[0].main;
    console.log(temperature);
    console.log(weather);
    console.log(city,contry);
    let img =document.querySelector('.img1');

    document.querySelector('.text1').innerHTML = Math.round(temperature)
    +"<sup>0</sup>C";
    document.querySelector('.text2').innerHTML = weather;
    document.querySelector('.text3').innerHTML = city +' '+contry;

    if(weather=='Clouds')
    {
        img.src="image/cloudy.png";
    }
    else if(weather=='Sunny')
    {
        img.src="image/sunny.png";
    }
    else if(weather=='Rain')
    {
        img.src="image/rainy.png";
    }
})
}
