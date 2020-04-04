'use strict'

function poll() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php', true);
  xhr.send();
  xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const title = response.data.title;
      const answers = response.data.answers;
      console.log(title);
      console.log(answers);
      document.getElementById('poll__title').textContent = title;
      const poll = document.getElementById('poll__answers');
      const pollInner = document.createElement('div');
      answers.forEach(answer => {
        pollInner.innerHTML += `
        <button class="poll__answer">
          ${answer}
        </button>
        `
      });
      poll.appendChild(pollInner);
    };
  };
};

document.addEventListener('DOMContentLoaded', poll);