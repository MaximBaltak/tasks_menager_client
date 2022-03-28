import { RootState } from "../../store/store"
import {connect} from "react-redux";
import Auth from "./Auth";

const mapStateToProps = (state:RootState)=>{
    return {
        typeForm:state.authorization.typeForm,
        login:state.authorization.login,
        password:state.authorization.password,
        error:state.authorization.error,
    }
}
const AuthContainer=connect(mapStateToProps)(Auth)
export default AuthContainer