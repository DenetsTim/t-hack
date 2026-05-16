import { AppleIcon, BoxIcon, BusIcon, GraduationCapIcon, MinusIcon, PlusIcon, RollerCoasterIcon } from 'lucide-react'
import styles from './TransactionAddPage.module.css'
import { TransactionType, type Transaction } from '@/shared/types/transaction.types'
import { useEffect, useRef } from 'react';
import { redirect, useNavigate } from 'react-router';

const TransactionsAddPage = () => {
    const typeRef = useRef(null);
    const amountRef = useRef(null);
    const categoryRef = useRef(null);
    const dateRef = useRef(null);
    const commentRef = useRef(null);

    const navigate = useNavigate();

    const addTransaction = () => {
        console.log(localStorage.getItem('transactions'));
        let newTransactions = JSON.parse(localStorage.getItem('transactions') as string) as Transaction[];
        if (newTransactions === null) newTransactions = [];
        newTransactions?.push({
            type: typeRef.current.value || TransactionType.Expense,
            amount: Number(amountRef.current.value),
            category: categoryRef.current.value || "other",
            date: new Date(dateRef.current.value || new Date()),
            comment: commentRef.current.value || ""
        })

        localStorage.setItem('transactions', JSON.stringify(newTransactions));

        navigate('/');
    }

    useEffect(() => { console.log(typeRef.current, amountRef.current, categoryRef.current, dateRef.current, commentRef.current) }, [typeRef.current])

    return (
        <form className={styles.form}>
            <label htmlFor="type">Операция</label>
            <select className={styles.select} id="type" ref={typeRef} defaultValue={TransactionType.Expense} required>
                <option value={TransactionType.Income}>+</option>
                <option value={TransactionType.Expense}>-</option>
            </select>
            <label htmlFor="amount">Сумма</label>
            <input className={styles.input} type="number" id="amount" ref={amountRef} />
            <label htmlFor="category">Категория</label>
            <select className={styles.select} id="category" ref={categoryRef} defaultValue="other" required>
                <option value="food">Еда</option>
                <option value="transport">Транспорт</option>
                <option value="education">Образование</option>
                <option value="entertainment">Развлечения</option>
                <option value="other">Другое</option>
            </select>
            <label htmlFor="date">Время</label>
            <input className={styles.input} type="datetime-local" id="date" ref={dateRef} required/>
            <label htmlFor="comment">Комментарий</label>
            <input className={styles.input} type="text" id="comment" ref={commentRef} required/>
            <button className={styles.addButton} type="submit" onClick={addTransaction}>Добавить</button>
            <button className={styles.cancelButton} type="submit" onClick={() => { navigate("/") }}>Отмена</button>
        </form>
    )
}

export default TransactionsAddPage
