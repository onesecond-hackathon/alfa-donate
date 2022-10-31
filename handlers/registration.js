const file = require("fs") 

function SaveMember(member)
{
    let members = file.open("./data/members.json")

    // if (!members)
    //     members = file.file

    file.writeFileSync(members,JSON.parse(member))
}

function NewMember(data)
{
    let tbl = JSON.parse(data)

    if (tbl.login && tbl.password)
    {
        let member = []

        member.login = tbl.login
        member.password = tbl.password

        SaveMember(member)
    }
}

setInterval(function()
{

},1000)