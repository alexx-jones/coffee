import { drinkEncoding } from "./values";
import { returnValueFromKey } from "./utilFunctions";

export default async function encodeOrder(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed.' });
    } else {
        const {
            milkType,
            syrupFlavour,
            whippedCream,
            initialChocolatePowder,
            milkSteamFoam,
            hotCold,
            size,
            decaf,
            tea,
            shots,
            syrupShots,
            chocolatePowderTopping,
            binOrB64,
        } = req.query;

        if (
            !milkType ||
            !syrupFlavour ||
            !whippedCream ||
            !initialChocolatePowder ||
            !milkSteamFoam ||
            !hotCold ||
            !size ||
            !decaf ||
            !tea ||
            !shots ||
            !syrupShots ||
            !chocolatePowderTopping
        ) {
            return res.status(406).json({
                message: 'Invalid inputs.',
                milkType: milkType || "null",
                syrupFlavour: syrupFlavour || "null",
                whippedCream: whippedCream || "null",
                initialChocolatePowder: initialChocolatePowder || "null",
                milkSteamFoam: milkSteamFoam || "null",
                hotCold: hotCold || "null",
                size: size || "null",
                decaf: decaf || "null",
                tea: tea || "null",
                shots: shots || "null",
                syrupShots: syrupShots || "null",
                chocolatePowderTopping: chocolatePowderTopping || "null",
            });
        }

        if (!binOrB64 || (binOrB64 !== "bin" && binOrB64 !== "b64")) {
            return res.status(406).json({
                message: "You haven't specified the response type. Binary or Base64.",
                binOrB64: "Not set.. Should be 'bin' or 'b64'",
            });
        } else {
            try {
                let binaryOrder = {
                    milkType: returnValueFromKey(milkType, drinkEncoding.milkType),
                    syrupFlavour: returnValueFromKey(syrupFlavour, drinkEncoding.syrupFlavour),
                    whippedCream: returnValueFromKey(whippedCream, drinkEncoding.whippedCream),
                    initialChocolatePowder: returnValueFromKey(
                        initialChocolatePowder,
                        drinkEncoding.initialChocolatePowder
                    ),
                    milkSteamFoam: returnValueFromKey(milkSteamFoam, drinkEncoding.milkSteamFoam),
                    hotCold: returnValueFromKey(hotCold, drinkEncoding.hotCold),
                    size: returnValueFromKey(size, drinkEncoding.size),
                    decaf: returnValueFromKey(decaf, drinkEncoding.decaf),
                    tea: returnValueFromKey(tea, drinkEncoding.tea),
                    shots: returnValueFromKey(shots, drinkEncoding.shots),
                    syrupShots: returnValueFromKey(syrupShots, drinkEncoding.syrupShots),
                    chocolatePowderTopping: returnValueFromKey(
                        chocolatePowderTopping,
                        drinkEncoding.chocolatePowderTopping
                    ),
                };
                
                const concatenatedBinaryString = (
                    binaryOrder.milkType +
                    binaryOrder.syrupFlavour +
                    binaryOrder.whippedCream +
                    binaryOrder.initialChocolatePowder +
                    binaryOrder.milkSteamFoam +
                    binaryOrder.hotCold +
                    binaryOrder.size +
                    binaryOrder.decaf +
                    binaryOrder.tea +
                    binaryOrder.shots +
                    binaryOrder.syrupShots +
                    binaryOrder.chocolatePowderTopping
                );

                if (binOrB64 === 'bin') {
                    return res.status(200).json(concatenatedBinaryString);
                } else {
                    let binary = (parseInt(concatenatedBinaryString, 2)).toString();
                    let buffer = Buffer.from(binary, 'binary');
                    const base64String = buffer.toString('base64');

                    return res.status(200).json(base64String);
                }
            } catch (err) {
                console.log(err);
                return res.status(422).json({ message: 'Order not complete.' });
            }
        }
    }
}
