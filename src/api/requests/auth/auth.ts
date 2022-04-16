import {IAuthRequests, IRefreshTokenBody, IUserAuthBody} from "./types";
import axiosConfig from "./../../axios.config"
class AuthRequests implements IAuthRequests{
   public auth(body: IUserAuthBody): Promise<any> {
        return axiosConfig.post('auth/signin', body)
    }

   public refreshToken(body: IRefreshTokenBody): Promise<any> {
        return axiosConfig.post('refresh',body);
    }

   public registr(body: IUserAuthBody): Promise<any> {
        return axiosConfig.post('auth/signup', body)
    }

}
export default new AuthRequests()