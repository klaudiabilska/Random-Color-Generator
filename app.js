const changeColor = () => {
    let randomNumbers = Math.floor(Math.random() * 16777215)
    let heximal = randomNumbers.toString(16)
    document.documentElement.style.setProperty('--dynamic-color', `#${heximal}`)
    document.querySelector('#copy_hex').value = `color: #${heximal}`
}
changeColor();