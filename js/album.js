let container = document.querySelector('.album');

let search = new URLSearchParams(window.location.search);
let id = search.get('id');

let album = albums[id - 1];

if (!album) {
    container.innerHTML = 'Error 404. You will be returned to the main page in 5 seconds';
    setTimeout(() => {
        window.location.pathname = 'index.html';
    }, 5000);
} else {
    container.innerHTML = `
<div class="card mb-3">
    <div class="row">
        <div class="col-4">
            <img src="${album['img']}" alt="" class="img-fluid rounded-start">
        </div>
        <div class="col-8">
            <div class="card-body">
                <h5 class="card-title">${album['title']}</h5>
                <p class="card-text">${album['description']}</p>
                <p class="card-text"><small class="text-muted">Сборник был выпущен в ${album['year']} году</small></p>
            </div>
        </div>
    </div>
</div>
`;

let playlist = document.querySelector('.playlist');

let tracks = album['tracks'];

for (let i = 0; i < tracks.length; i++) {
    let track = tracks[i];
    playlist.innerHTML += `
    <li class="list-group-item d-flex align-items-center">
    <img src="${album['img']}" alt="" class="me-3" height="30px">
        <div>
            <div>${track['title']}</div>
            <div class="text-secondary">${track['author']}</div>
        </div>
        <div class="ms-auto">${track['time']}</div>
    </li>
    `;
}
}
