import { API_PATH } from "@/constants/api";
import { privateRequest } from "@/utils/request";



export const useProfile = () => {
    privateRequest(API_PATH.AUTH_PROFILE)
    // privateRequest(request, API_PATH.AUTH_PROFILE)
    // // privateRequest.get(API_PATH.AUTH_PROFILE)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    //   console.log('Success:', values);
};
