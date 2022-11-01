let CachedDonates = []

function ProcessDonate(donateinfo)
{

}

function OnPayment(data)
{
    let tbl = JSON.parse(data)

    // if ()

    CachedDonates[CachedDonates.length] = tbl
}

setInterval(function() {

    let donate = CachedDonates.pop()

    if (donate)
        ProcessDonate(donate)

},1)