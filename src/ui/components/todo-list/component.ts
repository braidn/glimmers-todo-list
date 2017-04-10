import Component, { tracked } from "@glimmer/component";

export default class TodoList extends Component {
  @tracked newItemText = ''
  @tracked items = [
    {
      text: 'Install Glimmer',
      isDone: false
    },
    {
      text: 'Build a Test Suite',
      isDone: false
    },
    {
      text: 'Drink Some Beer',
      isDone: false
    }
  ]

  updateNewItemText(e) {
    this.newItemText = e.target.value
  }

  addItem() {
    if (!this.newItemText) return false

    let items = [
      ...this.items,
      {
        text: this.newItemText,
        isDone: false
      }
    ]

    this.items = items
    this.newItemText = ''
  }

  toggleItem(toggledItem) {
    let items = this.items.filter(item => {
      if (toggledItem.text === item.text) {
        return Object.assign(item, {
          isDone: !item.isDone
        })
      } else {
        return item
      }
    })

    this.items = items
  }

  deleteItem(deletedItem) {
    let items = this.items.filter(item => {
      return item.text !== deletedItem.text
    })

    this.items = items
  }
}
