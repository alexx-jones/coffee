export default async function decodeOrder(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({message: 'Method not allowed.'}) // 405 - Method not allowed.
    }
    else {
        const { base64String } = req.query;

        if (!base64String) {
            return res.status(406).json({message: 'Missing base64String variable.', base64String: 'Not set.'}) // 406 - Not processable.
        }
        else {
            try {
                const buffer = Buffer.from(base64String, 'base64');
                const binaryString = buffer.toString('binary');
                const decimalValue = BigInt(binaryString);
                const reversedBinaryString = decimalValue.toString(2);

                return res.status(200).json({message: 'Successfully decoded.', binaryString: reversedBinaryString});
            }
            catch (err) {
                return res.status(500).json({message: 'Uh oh.'});
            }
        }
    }
}