
/**
 * @typedef {object} AddItemProps
 * @property {string} title
 * @property {number} value
 * @property {string} type
 * @property {Date} date
 */

export default class ExpenseRender {
    list = document.querySelector('.expense__list')

    /** @param {AddItemProps} param0 */
    addItem({ title, value, type, date }) {

        const dateValue = new Intl.DateTimeFormat('pt-Br', { dateStyle: 'short' }).format(date)
        const time = new Intl.DateTimeFormat('pt-Br', { timeStyle: 'short' }).format(date)
        const template = `
            <div class="expense__date">
                <span class="expense__date__date">${dateValue}</span>
                <span class="expense__date__time">${time}</span>
            </div>
            <div>
                <h2 class="expense__title">${title}</h2>
                <p class="expense__value">R$ ${value.toFixed(2)}</p>
            </div>
            <span class="expense__type" data-expense-type="${type}">${type === 'credit' ? 'Crédito' : 'Debito'}</span>
        `
        const li = document.createElement('li')
        li.classList.add('expense__item')
        li.innerHTML = template
        this.list.append(li)
    }
}
