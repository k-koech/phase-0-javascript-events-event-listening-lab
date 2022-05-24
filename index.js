const input = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}
// addEventListener();
function addingEventListener(){
    input.addEventListener('click', clickAlert);

}


