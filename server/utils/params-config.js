const { v4: uuidv4 } = require('uuid');

const params = fileName => {
	const myFile = fileName.originalname.split('.');
	const fileType = myFile[myFile.length - 1];

	const imageParams = {
		Bucket: 'user-images606c3212-7c23-4f73-9c45-cdc25f7dc064',
		Key: `${uuidv4()}.${fileType}`,
		Body: fileName.buffer,
	};

	return imageParams;
};

module.exports = params;
