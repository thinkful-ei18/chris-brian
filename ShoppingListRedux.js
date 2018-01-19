'use strict';

const store = {
  items: [
    { name: 'apples', checked: false },
    { name: 'oranges', checked: false },
    { name: 'milk', checked: true },
    { name: 'bread', checked: false }
  ], 
  hideChecked: false
};

function generateListItem(item, index) {
  return `
  <li class="js-item-index-element" data-item-index="${index}">
    <span class="shopping-item js-shopping-item ${item.checked ? 'shopping-item__checked' : ''}">${item.name}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle js-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete js-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
    </li >`;
}

function toggleChecked() {
  // if checked = true, hide else show
  $('.js-search-form').on('click', '.toggleClass', function(event) { 
    // const itemIndex = getItemIndexFromElement(event.currentTarget);
    console.log(itemIndex);
    // const items = store.map(function(items, index) {});
  });
}

function generateList(shoppingList) {
  const items = shoppingList.map((items, index) => generateListItem(items, index));
  return items.join('');
}

function renderShoppingList(item) {
  console.log('`renderShoppingList` ran');
  const shoppingList = generateList(store.items);
  $('.shopping-list').html(shoppingList);
}

function addItemToShoppingList(itemName) {
  store.items.push({name:itemName, checked: false});
}

function handleNewItemSubmit() {
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    const newItem = $('.js-shopping-list-entry').val();
    addItemToShoppingList(newItem);
    $('.js-shopping-list-entry').val('');
    renderShoppingList();
  })
  console.log('`handleNewItemSubmit` ran');
}

function toggleCheckedForListItem(itemIndex) {
  store.items[itemIndex].checked = !store.items[itemIndex].checked;
}

function getItemIndexFromElement(item) {
  const itemIndexString = $(item).closest('.js-item-index-element').attr('data-item-index');
  return parseInt(itemIndexString, 10);
}

function handleItemCheckClicked() {
  $('.js-shopping-list').on ('click', '.js-item-toggle', function(event){
    const itemIndex = getItemIndexFromElement(event.currentTarget);
    toggleCheckedForListItem(itemIndex);
    console.log(itemIndex);
    renderShoppingList();
  });

  console.log('`handleItemCheckClicked` ran');
}

function deleteItemClicked(itemIndex) {
  delete store.items[itemIndex];
}

function handleDeleteItemClicked() {
  $('.js-shopping-list').on ('click', '.js-item-delete', function(event){
    const itemIndex = getItemIndexFromElement(event.currentTarget);
    deleteItemClicked(itemIndex);
    renderShoppingList();
  });
  console.log('`handleDeleteItemClicked` ran');
}

// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  toggleChecked();
  handleItemCheckClicked();
  handleDeleteItemClicked();
  
}

$(handleShoppingList);