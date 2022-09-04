import express from "express"

import HttpStatusCode from '@mlplatform/brain/const/httpStatusCode'
import { showResponseToClient } from '@mlplatform/brain/utils/responseUtils'

const route = express.Router();

route.get('/', async (req, res) => {
	let data = {
		status: true,
		message: 'service is running',
	}
	showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
});

export default route;
