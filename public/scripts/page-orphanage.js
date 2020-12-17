const options = {
    dragging: false,/* anula o arrastamento do mapa */
    touchZoom: false,
    doubleClickZoom: false,/* anula a função de dublo click no mapa para aumentar o zoom */
    scrollWheelZoom: false, /** anula a funçao de rolagem da pagina  */
    zoomControl: false /** anula a função maximizar/minimizar o mapa, através do icone +- que estaria no canto superior esqerdo*/


}

const map = L.map('mapid', options/***Este "options é a variavel de "const que na verdade penso ser um array. O mapid e o options, são argumentos""  */).setView([48.438886,1.5087313], 15);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
})

/*const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1"class="choose-orphanage"> <img src="/images/seta4.png" ></a>') 
este codigo foi comentado para anular a interação com o mapa através do icone sorridente, que deveria mostrar o popup "lar das meninas" e um link, como no mapa principal do "orphanageS", com "S"*/


L.marker([48.438886,1.5087313], {icon})
.addTo(map)

/** image gallery */

   function selectImage(event) {
      const button = event.currentTarget

      //remover todas as classes .active
      const buttons = document.querySelectorAll(".images button")
      buttons.forEach(removeActiveClass)

      function removeActiveClass(button) {
          button.classList.remove('active')
      }
      

      //selecionar image clicada
      const image = button.children[0]
      const imageContainer = document.querySelector(".orphanage-details > img")

      // atualizar o container de image
      imageContainer.src = image.src

      // adicionar a classe .active pra este botão
      button.classList.add("active")
   }
