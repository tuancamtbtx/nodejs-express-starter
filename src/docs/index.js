const swaggerDocument = require('./swagger.json');

const options = {
	customCss: `
	.swagger-ui img {
		content: url('https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/241916651_3086190291617682_4509631930990074939_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=lOR1w2qvK-4AX9fG8SE&_nc_ht=scontent.fsgn2-5.fna&oh=677418c9673cf565aa612ed902a1c6ef&oe=6173D94D');
		width: 140px; /* width of your logo */
		height: 40px; /* height of your logo */
   }
   .swagger-ui .topbar {
	   background-color: white;
   }
	`
};


export default {
	swaggerDocument,
	options
}

