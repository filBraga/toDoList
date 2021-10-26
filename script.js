let olElement = document.getElementById('lista-tarefas');

document.getElementById('criar-tarefa').addEventListener('click', function () {
  let element = document.createElement('li');
  let elementText = document.getElementById('texto-tarefa').value;
  element.innerText = elementText;
  element.onclick = myFunction;
  olElement.appendChild(element);
  document.getElementById('texto-tarefa').value = '';
});

function myFunction() {
  if (this.classList.contains('selected')) {
    this.classList.remove('selected');
  } else {
    document.querySelectorAll('li').forEach(e => e.classList.remove('selected'));
    this.classList.add('selected');
  }
}
