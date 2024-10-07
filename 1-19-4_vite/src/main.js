import './style.css'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div class="base">
    <h1>Home <img  class="logo" src="${viteLogo}" alt="viteLogo"></h1>
    <ul>
        <li><a href="../index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contacts.html">Contacts</a></li>
    </ul>
</div>
`
