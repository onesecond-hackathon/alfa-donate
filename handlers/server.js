const registration = require("./registration.js")

let CachedDonates = []

function ProcessDonate(donateinfo)
{

}

function OnPayment(data)
{
    CachedDonates[CachedDonates.length] = data
}

setInterval(function() {

    let donate = CachedDonates.pop()

    if (donate)
        ProcessDonate(donate)

},1)