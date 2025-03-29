export function createMarkup(data) {
  return data.map(createCard).join('');
}

export function createCard(singleCard) {
  return `
  <li class="task-list-item" data-id="${singleCard.id}">
      <button class="task-list-item-btn">Delete</button>
      <h3>${singleCard.name}</h3>
      <p>${singleCard.description}</p>
  </li>`;
}
