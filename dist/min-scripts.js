const pokemonRepository=function(){let t=[];function n(n){"object"==typeof n&&"name"in n&&"detailsUrl"in n?t.push(n):console.log("pokemon is not correct")}function o(){return t}function e(t){let n=t.detailsUrl;return fetch(n).then(function(t){return t.json()}).then(function(n){t.imageUrl=n.sprites.front_default,t.height=n.height,t.types=n.types}).catch(function(t){console.error(t)})}function i(t){e(t).then(function(){!function t(n){$(".modal-header");let o=$(".modal-title"),e=$(".modal-body");o.empty(),e.empty();let i=$("<h1>"+n.name+"</h1>"),a=$("<p>Height: "+n.height+"</p>"),l=$("<img class='modal-img' alt='image of pokemon' style='width:50%'>");l.attr("src",n.imageUrl),o.append(i),e.append(l),e.append(a)}(t)})}return{add:n,getAll:o,addListItem:function t(n){let o=$(".list-group").append("<li></li>"),e=$(`<button style="width:100%; margin-bottom: 20px;" class="btn btn-primary" type="button"
      data-toggle="modal" data-target="#modalContainer">${n.name}</button>`);$(e).on("click",function(){i(n)}),$(o).append(e)},loadList:function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){let o={name:t.name,detailsUrl:t.url};n(o),console.log(o)})}).catch(function(t){console.error(t)})},loadDetails:e,showDetails:i}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});