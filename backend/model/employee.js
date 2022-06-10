const mongoose= require ('mongoose');

const Employee = mongoose.model('Employee', {
    name: {type: string},
    position: {type: string},
    dept: {type: string}
})

module.exports= Employee;