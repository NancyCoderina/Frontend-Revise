const getStudents = (req,res)=>{
    res.send("All students")
}

const getStudentsByID = (req,res)=>{
    res.send(`Student ID: ${req.params.id}`)
}

module.exports = {
    getStudents,getStudentsByID
}