import StateManager from './StateManager.js'
import FormController from './FormController.js'
import ExpenseRender from './ExpenseRender.js'

const expenseState = new StateManager([])
const formController = new FormController()
const expenseRender = new ExpenseRender()

formController.onSubmit(({ isCredit, ...data }) => {
    const expenses = expenseState.getState()
    const expense = { ...data, type: isCredit ? 'credit' : 'debit' }
    expenseState.setState([expense, ...expenses])
})

expenseState.getState((expenses) => {
    expenseRender.list.innerHTML = ""
    for (const expense of expenses) {
        console.log(expense)
        expenseRender.addItem({
            title: expense.title,
            value: parseFloat(expense.value),
            date: new Date(),
            type: expense.type
        })
    }
})