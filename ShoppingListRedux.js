'use strict';

const store = [
  { name: 'apples', checked: false },
  { name: 'oranges', checked: false },
  { name: 'milk', checked: true },
  { name: 'bread', checked: false }
];


function renderShoppingList() {
  const itemClass = item.completed ? 'shopping-item_checked' : '';
  
  $("shopping-list")
  `<li>
    <span class="shopping-item" ${itemClass}>apples</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`
  console.log('`renderShoppingList` ran');
}


function handleNewItemSubmit() {
  // this function will be responsible for when users add a new shopping list item
  console.log('`handleNewItemSubmit` ran');
}


function handleItemCheckClicked() {
  // this funciton will be reponsible for when users click the "check" button on
  // a shopping list item.
  console.log('`handleItemCheckClicked` ran');
}


function handleDeleteItemClicked() {
  // this function will be responsible for when users want to delete a shopping list
  // item
  console.log('`handleDeleteItemClicked` ran');
}

// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleShoppingList() {

}