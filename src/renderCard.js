export function renderCard({ title, resource, type, }) {
  let elems = '';
  if (type === "video") {
    elems = (`
      <div class="gallery__video">
        <video src="${resource}" controls></video>
      </div>`)
  }
  if (type === "image") {
    elems = (`
      <div class="gallery__img">
        <img src="${resource}" alt="${title}">
      </div>`)
  }
  if (type === "audio") {
    elems = (`
    <div class="gallery__audio">
      <audio src="${resource}" controls></audio>
    </div>
    `)
  }
  const card = `
  <div class="gallery__card">
      ${elems}
      <div class="gallery__text">${title}</div>
    </div>
  `
  return card
}