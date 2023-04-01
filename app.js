"use strict"

const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".sliderImg")

const bottom = document.querySelector(".bottom")

let sliderNum = 1
const length = images.length

for (let i = 0; i < images.length; i++) {
  const div = document.createElement("div")
  div.className = "button"
  bottom.appendChild(div)
}

const buttons = document.querySelectorAll(".button")

buttons[0].style.backgroundColor = "black"

const resetbg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent"
  })
}

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetbg()
    slider.style.transform = `translateX(-${i * 800}px)`
    sliderNum = i + 1
    button.style.backgroundColor = "black"
  })
})

const nextSlide = () => {
  slider.style.transform = `translateX(${sliderNum * -800}px)`
  sliderNum++
}
const prevSlide = () => {
  slider.style.transform = `translateX(-${(sliderNum - 2) * 800}px)`
  sliderNum--
}

const toTheFirstSlide = () => {
  slider.style.transform = `translateX(0px)`
  sliderNum = 1
}
const toTheLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`
  sliderNum = length
}

const changeButton = () => {
  resetbg()
  buttons[sliderNum - 1].style.backgroundColor = "black"
}

right.addEventListener("click", () => {
  sliderNum < images.length ? nextSlide() : toTheFirstSlide()
  changeButton()
})

left.addEventListener("click", () => {
  sliderNum > 1 ? prevSlide() : toTheLastSlide()
  changeButton()
})
