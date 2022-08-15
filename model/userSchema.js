const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{

    },
    email:{

    },
    phone:{

    },
    password:{

    },
    cpassword:{

    },
})
 
const User = mongoose.model('User',userSchema);
module.exports = User


