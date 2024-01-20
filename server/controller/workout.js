import User from "../model/User.js";

let workout = {
    workoutPlan: (req,res) => {
        console.log(req.body)
        res.send('you succesfully sent the data to the backend')
    }, 
}

export default workout