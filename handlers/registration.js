const ws = require("socket.io")
const file = require("fs")

const membersFilePath = '../data/members.json'

// let members = JSON.parse(file.readFileSync(membersFilePath, 'utf-8'))
let UpdatedMembers = false

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

        UpdatedMembers = true
    }
}

setInterval(function()
{
    if (UpdatedMembers)
    {
        file.writeFileSync(membersFilePath, JSON.stringify(membersFilePath), 'utf-8')

        UpdatedMembers = false
    }
}, 10000)