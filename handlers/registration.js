const file = require("fs") 

const membersFilePath = '../data/members.json'
const membersBkpFilePath = '../data/members.json.bkp'

let members = file.readFileSync(membersFilePath, 'utf-8')
members = JSON.parse(members)

// Add sockets
function NewMember(data)
{
    let tbl = JSON.parse(data)

    if (tbl.login && tbl.password)
    {
        let member = {}

        member.login = tbl.login
        member.password = tbl.password

        members.push(member)
    }
}

setInterval(function()
{
    file.writeFileSync(membersFilePath, JSON.stringify(membersFilePath), 'utf-8')
}, 10000)

setInterval(function()
{
    file.copyFileSync(membersFilePath, membersBkpFilePath)
}, 60000)