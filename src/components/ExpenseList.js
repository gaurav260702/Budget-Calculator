import React from "react";
import Item from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses, handleEdit, handleDelete, clearItems }) => {
    return (
        <>
            <ul className="list">
                {expenses.map(expense => {
                    return <Item 
                      key={expense.id} 
                      expense={expense}  
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                      />

                })}
                {expenses.length > 0 && (
                    <button className="btn" onClick={clearItems}>
                     clear expenses
                     <MdDelete className="btn-icon" />
                    </button>
                )}
            </ul>
        </>
    )
}

export default ExpenseList;