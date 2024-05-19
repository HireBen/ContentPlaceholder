const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')
setTimeout(getData, 2500)
function getData() {
  header.innerHTML =
    '<img src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600" alt="female laughing with yellow background" />'
  title.innerHTML = 'HireBen '
  excerpt.innerHTML =
    'Coding thai Where you can Learn HTML CSS and JS you can find the project of Web Development '
  profile_img.innerHTML =
    '<img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="business handshake" />'
  name.innerHTML = 'Devi Chand'
  date.innerHTML = 'Oct 08, 2022'
  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
