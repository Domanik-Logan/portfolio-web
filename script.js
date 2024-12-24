function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamIcon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
    fetch('./assets/aboutme.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('aboutText').innerText = data;
        })
        .catch(error => {
            console.error('Error loading the text file:', error);
            document.getElementById('aboutText').innerText = 'Sorry, we couldn\'t load your bio at the moment.';
        });
});

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / scrollHeight;

    const fadeOpacity = Math.min(1, scrollFraction);

    const gradientStart = "#001933";
    const gradientEnd = "#2C115B";


    document.body.style.backgroundImage = `linear-gradient(to bottom, ${gradientStart}, ${gradientEnd} ${200 - fadeOpacity * 100}%), linear-gradient(to right, rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 90%)`;
});


window.addEventListener('DOMContentLoaded', () => {
    const name = document.getElementById('name');
    const cursorElement = document.getElementById('cursor');
    const nameText = name.textContent;
    name.textContent = '';
    const nameLen = nameText.length;
    let index = 0;
  
    function getRandomSpeed(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    function type() {
      if (index < nameLen) {
        name.textContent += nameText.charAt(index);
        index++;
        const typingSpeed = getRandomSpeed(300, 650);
        setTimeout(type, typingSpeed);
      } else {
        cursorElement.style.display = 'none';
      }
    }
  
    function updateCursorPosition() {
      if (index < nameLen) {
        cursorElement.style.display = 'inline-block';
      }
    }
  
    setInterval(updateCursorPosition, 100);
    type();
});

function copyToClipboard(info) {
  const textarea = document.createElement("textarea");
  textarea.value = info;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("Contact info copied to clipboard: " + info);
}








  
  
