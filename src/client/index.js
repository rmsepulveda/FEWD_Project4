import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { postApi } from './js/utils'
import { scoreConverter } from './js/utils'

// sass files
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'


//console.log(checkForName);

//alert("I EXIST")
//console.log("CHANGE!!");


export {
    checkForName,
    handleSubmit,
    postApi,
    scoreConverter
   }