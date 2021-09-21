import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { postApi } from './js/utils'
import { scoreConverter } from './js/utils'

// sass files
import './styles/resets.css'
import './styles/base.css'
import './styles/footer.css'
import './styles/form.css'
import './styles/header.css'


//console.log(checkForName);

//alert("I EXIST")
//console.log("CHANGE!!");


export {
    checkForName,
    handleSubmit,
    postApi,
    scoreConverter
   }