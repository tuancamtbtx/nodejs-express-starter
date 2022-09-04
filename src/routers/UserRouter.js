import express from "express";

import { showResponseToClient } from '@/utils/responseUtils'
import { logger } from '@/utils/loggerUtils'
import HttpStatusCode from '@/const/httpStatusCode'

const route = express.Router();

route.get('/', async (req, res) => {
	try {
		let data = {
			message: 'sucess',
			data: []
		}
		showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
	}catch(err) {
		logger.error(err)
		showResponseToClient(err, null, HttpStatusCode.HTTP_BAD_IMPLEMENT, res)
	}
})

export default route