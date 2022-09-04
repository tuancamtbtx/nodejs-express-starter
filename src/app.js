import 'module-alias/register'
import express from "express";
import bodyParser from "body-parser"
import swaggerUi from 'swagger-ui-express'
import DocumentSwagger from '@/docs'

import RouterUtils from '@/utils/routerUtils'
import Routers from '@/routers'
import config from '@/config'

import corsMiddleware from "@/middlewares/corsMiddleware";
import { accessMiddleware } from "@/middlewares/accessMiddleware";
import {
	errorDebugMiddleware,
	errorReleaseMiddleware,
	error404Forwarder
} from "@/middlewares/errorMiddleware";

import { logger } from '@/utils/loggerUtils'


const app = express();
// Allow maximum data upload up to 50 MBytes
app.use(bodyParser.json({ limit: '50mb' }));
// Allow maximum data upload up to 50 MBytes
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

//CORS middleware
app.use(accessMiddleware);
app.use(corsMiddleware);


/** health check route */
app.use('/health', Routers.HealthRoute);

/** site api */

const configNameSpace = {
	siteNameSpace: RouterUtils.withNamespace(app, 'site'),
}
configNameSpace.siteNameSpace(
	RouterUtils.mapping('/users', Routers.UserRouter),
)

/** documents api */
app.use('/docs', swaggerUi.serve, swaggerUi.setup(DocumentSwagger.swaggerDocument, DocumentSwagger.options));


// 404 page
app.use(error404Forwarder);

if (app.get('env') === 'development') {
	app.use(errorDebugMiddleware);
}

// production error handler
// no stacktraces leaked to user
if (app.get('env') === 'production') {
	app.use(errorReleaseMiddleware);
}

app.listen(config.PORT, () => {
	logger.info(`App listening !! Start APIs- port:  ${config.PORT}`);
});

