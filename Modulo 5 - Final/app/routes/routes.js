import express from 'express';
import TransactionService from '../services/TransactionService.js';

const transactionRouter = express.Router();

transactionRouter.get('/', async (request, response) => {
    const transactionsRepository = await TransactionService(request.query);

    return response.json(transactionsRepository);
})

export default transactionRouter;
