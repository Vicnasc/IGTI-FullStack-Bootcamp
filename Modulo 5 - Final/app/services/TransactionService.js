import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
import TransactionModel from '../models/TransactionModel.js';

async function getTransactions(request, response) {
    try {
        const data = request;
        const db = TransactionModel.find({ "yearMonth": data.period });

        return db;
    } catch (err) { Error(err.message) }
}

export default getTransactions;