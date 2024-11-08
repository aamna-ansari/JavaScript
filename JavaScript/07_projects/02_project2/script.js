const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault() //stops the browser's default action for an event, like preventing a form submission or link navigation.

    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = 'Please give a valid height'
    }
    else  if (weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = 'Please give a valid weight'
    }
    else {
        let BMI = (weight / ((height * height) / 10000)).toFixed(2)
        if (BMI < 18.6) {
            result.innerHTML = `Your BMI is ${BMI} and you are under weight`
        }
        else if (BMI >= 18.6 && BMI < 24.9) {
            result.innerHTML = `Your BMI is ${BMI} and you have normal weight`
        }
        else if (BMI > 24.9) {
            result.innerHTML = `Your BMI is ${BMI} and you are over weight`
        }

        else {

            result.innerHTML = `Your BMI is ${BMI}`
        }
    }
})