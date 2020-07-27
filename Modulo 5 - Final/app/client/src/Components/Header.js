import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>Bootcamp Full Stack - Desafio Final</h1>
            <h2>Controle Financeiro Pessoal</h2>

            <hr />

            <select name="yearMonth" id="yearMonth">
                <option value='teste'>Teste</option>
            </select>

            <hr />
            <table>
                <thead>
                    <tr>
                        <td>Lançamentos: {props.number}</td>
                        <td>Receita: {props.income}</td>
                        <td>Despesas: {props.outcome}</td>
                        <td>Saldo: {props.balance}</td>
                    </tr>
                </thead>
            </table>
            <hr />

            <button>Novo lançamento</button>
            <input type="text" placeholder='Filtro' />
        </div>
    )
}

export default Header;