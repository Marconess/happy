const map = L.map("mapid").setView(
  [48.438886, 1.5087313],
  15
); /* nesta linha o js criou o mapa e guardou numa variavel*/

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
  map
); /**aqui ele criou o tileLayer e guradou o mapa */

const icon = L.icon({
  /**aqui ele criou o icone e guardou em memoria */
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker; /**nesta linha criou uma varivavel marker */

// create and add marker

map.on("click", (event) => {
  /**o click vai desparar o evento de de criar um novo icone e automaticamente apagar o anterior */
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector(
    "[name=lat]"
  ).value = lat; /**"consulta.busca de seletores" ele esta pegando isto no HTML, nas linhas 57 e 60(  <div class="map-container">
    <div id="mapid"></div>
    <input type="hidden" name="lat">
    <input type="hidden" name="lng">) */
  document.querySelector("[name=lng]").value = lng;

  //remove icon sim, esta linha apaga o icone/marker
  marker && map.removeLayer(marker); //marker é o nome de variavel atribuido ao icone sorridente dentro da mapa

  //add icon tileLayer
  marker = L.marker([lat, lng], {
    icon,
  }) /** e esta linha vai criar um novo icone/marker */
    .addTo(map);
});

// adicionar o campo de fotos
function addPhotoField() {
  // pagar o container de fotos #images
  const container = document.querySelector("#images");
  //pegar o container para duplicar  .new-images
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // realizar  o clone da ultima imagen addicionada.
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //verificar se o campo esta vazio, e se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  //limpar o campo antes de adicionar ao container de imagens
  input.value = "";

  // adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deletField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //limpar campo
    span.parentNode.children[0].value =
      ""; /** o [0] representa o "input" que é o primeiro filho/children, ou seja, ele vai limpar o primeiro campo */
    return;
  }

  //deletar o campo.
  span.parentNode.remove(); /**[ o parentNode/nó pai, é o "new-upload"  ] o "span" aqui, é o elemento originado no HTML dentro da "new upload" 
        
        (<div class="new-upload">
        <input
          name="images"
          placeholder="Cole o link da imagem aqui"
          required
        />
        <!--O placeholder faz com que uma mensagem seja exibida dentro de um campo de preenchimento e seja automaticamente apagado quando o usuario começa a digitar-->
        <span onclick="deletField(event)"> <!--qual é o evento? o evento é o click e o evento vai conter informações de quem esta clicando ele-->
          <img
            src="/images/remove-fille.svg"
            alt="Remover fotos"
          />
        </span>
      </div>). 
      
      Esta tag do js (span.parentNode.remove(); vai remover "todo" o conteudo de span quando o "event" que é o botão "x" dentro do segundo campo en diante for disparado, pois no primeiro o botão "x" apenas apagara o conteudo ao inves de remover o campo inteiro[ apenas limpar sera feito com o "span.parentNode.children[0].value = "" " ])  a razão de iserir aqui todo a div new-upload, ao invés de apenas spam é porque o a tag remove do js vai remover todo o campo ao invés limpar. */
}

//select yes or no
function toggleSelect(event) { /**este "event" foi definido la no HTML como "onclick" */
    


// retirar a classe .active (dos botões)
  document.querySelectorAll('.button-select button') /**esta tag é uma forma de dizer "procure todos o botões la dentro */
  .forEach( function(button) {
      button.classList.remove('active')
  })

// colocar  a class .active nesse botão clicado
const button = event.currentTarget
button.classList.add('active')
//atualizar input hidden com o valor selecionado
const input = document.querySelector('[name="open_on_wekeends"]')

input.value = button.dataset.value



//pegar o botão clicado duplicar 

// verificar se sim ou não
}
