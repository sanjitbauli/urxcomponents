import axios from "axios";
export const fetchUrxForm = (formId: string, lang: string, formStatus: string, onSuccess: any, onError: any) => {

  const options = {
    url: `/account/apis/v2.0/forms/formatted/${formId}/${lang}`,
    method: 'get',
    baseURL: 'https://wwwstage.ibm.com',
    params: {
      formStatus
    }
  }

  axios(options)
    .then((response) => {
      return onSuccess(response.data);
    }).
    catch((error) => {
      return onError(error);
    });
}