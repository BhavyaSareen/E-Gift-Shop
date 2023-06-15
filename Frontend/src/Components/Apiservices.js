import axios from "axios";

const BASE_URL="http://localhost:4000/admin/"
const token=sessionStorage.getItem("token")//convert code to json
const header={
    Accept:"application/json",
    Authorization:token
}
// console.log(token)
export const BASE_URL_IMG="http://localhost:4000/"

class Apiservices{

    //Login API
    login(data){
        return axios.post(BASE_URL+"login",data)
    }

    //Register API
    register(data){
        return axios.post(BASE_URL+"register",data)
    }

    //Dashboard
    Dashboard(data){
        const token=sessionStorage.getItem("token")//convert code to json
        const header={
            Accept:"application/json",
            Authorization:token
        }
        return axios.post(BASE_URL+'Dashboard',data)
    }

    //Category APIs
    addcategory(data){
        const token=sessionStorage.getItem("token")//convert code to json
        const header={
            Accept:"application/json",
            Authorization:token
        }
        return axios.post(BASE_URL+"addcategory",data,{headers:header})
    }

    getallcategory(data){
        const token=sessionStorage.getItem("token")//convert code to json
            const header={
                Accept:"application/json",
                Authorization:token
            }
        return axios.post(BASE_URL+"getallcategory",data,{headers:header})
    }
    getsinglecategory(_id){
        const token=sessionStorage.getItem("token")//convert code to json
        const header={
            Accept:"application/json",
            Authorization:token
        }
        let data={
            _id:_id
        }
        return axios.post(BASE_URL+"getsinglecategory",data,{headers:header})
    }
    updatecategory(data){
        const token=sessionStorage.getItem("token")//convert code to json
            const header={
                Accept:"application/json",
                Authorization:token
            }
        return axios.post(BASE_URL+"updatecategory",data,{headers:header})
    }

    //SubCategory APIs
    addsubcategory(data){
        const token=sessionStorage.getItem("token")//convert code to json
        const header={
            Accept:"application/json",
            Authorization:token
        }
        return axios.post(BASE_URL+"addsubcategory",data,{headers:header})
    }
    getallsubcategory(data){
        const token=sessionStorage.getItem("token")//convert code to json
        const header={
            Accept:"application/json",
            Authorization:token
        }
        return axios.post(BASE_URL+"getallsubcategory",data,{headers:header})
    }
    getsinglesubcategory(_id){
        const token=sessionStorage.getItem("token")//convert code to json
        const header={
            Accept:"application/json",
            Authorization:token
        }
        let data = {
            _id:_id
        }
        return axios.post(BASE_URL+"getsinglesubcategory",data,{headers:header})
    }
    updatesubcategory(data){
        const token=sessionStorage.getItem("token")//convert code to json
        const header={
            Accept:"application/json",
            Authorization:token
        }
        return axios.post(BASE_URL+"updatesubcategory",data,{headers:header})
    }

    //Product APIs
    addproduct(data){
        const token=sessionStorage.getItem("token")//convert code to json
        const header={
            Accept:"application/json",
            Authorization:token
        }
        return axios.post(BASE_URL+"addproduct",data,{headers:header})
    }
    getallproduct(data){
        const token=sessionStorage.getItem("token")//convert code to json
        const header={
            Accept:"application/json",
            Authorization:token
        }
        return axios.post(BASE_URL+"getallproduct",data,{headers:header})
    }
    getsingleproduct(_id){
        const token=sessionStorage.getItem("token")//convert code to json
        const header={
            Accept:"application/json",
            Authorization:token
        }
        let data = {
            _id:_id
        }
        return axios.post(BASE_URL+"getsingleproduct",data,{headers:header})
    }
    updateproduct(data){
        const token=sessionStorage.getItem("token")//convert code to json
        const header={
            Accept:"application/json",
            Authorization:token
        }
        return axios.post(BASE_URL+"updateproduct",data,{headers:header})
    }

    //Order API
    getallorder(data){
        const token=sessionStorage.getItem("token")//convert code to json
        const header={
            Accept:"application/json",
            Authorization:token
        }
        return axios.post(BASE_URL+"getallorder",data,{headers:header})
    }
    addOrder(data){
        const token=sessionStorage.getItem("token")//convert code to json
        const header={
            Accept:"application/json",
            Authorization:token
        }
        return axios.post(BASE_URL+"addorder",data,{headers:header})
    }
    updateOrder(data){
        const token=sessionStorage.getItem("token")//convert code to json
        const header={
            Accept:"application/json",
            Authorization:token
        }
        return axios.post(BASE_URL+"updateorder",data,{headers:header})
    }

    //Enquiry API
    addenquiry(data){
        const token=sessionStorage.getItem("token")//convert code to json
        const header={
            Accept:"application/json",
            Authorization:token
        }
    return axios.post(BASE_URL+"addenquiry",data,{headers:header})
    }
    getallenquiry(data){
        const token=sessionStorage.getItem("token")//convert code to json
        const header={
            Accept:"application/json",
            Authorization:token
        }
        return axios.post(BASE_URL+"getallenquiry",data,{headers:header})
    }
    
}
export default new Apiservices