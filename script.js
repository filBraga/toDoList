let olElement = document.getElementById('lista-tarefas');

document.getElementById('criar-tarefa').addEventListener('click', function () {
  let element = document.createElement('li');
  let elementText = document.getElementById('texto-tarefa').value;
  element.innerText = elementText;
  element.onclick = myFunction;
  element.ondblclick = myFunction2;
  olElement.appendChild(element);
  document.getElementById('texto-tarefa').value = '';
});

function myFunction() {
  if (this.classList.contains('selected')) {
    this.classList.remove('selected');
  } else {
    document
      .querySelectorAll('li')
      .forEach((e) => e.classList.remove('selected'));
    this.classList.add('selected');
  }
}

function myFunction2() {
  if (this.classList.contains('completed')) {
    this.classList.remove('completed');
  } else {
    this.classList.add('completed');
  }
}

document.getElementById('apaga-tudo').addEventListener('click', function () {
  document.getElementById('lista-tarefas').innerHTML = '';
});

document.getElementById('remover-finalizados').addEventListener('click', function () {
    const elements = document.getElementsByClassName('completed');
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
});
