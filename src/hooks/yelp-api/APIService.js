


export default class APIService {

    static LoginUser(body) {

        return fetch('http://127.0.0.1:8000/auth/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',
            
            }, 
            body:JSON.stringify(body)

        }).then(resp => resp.json())

    }

    static RegisterUser(body) {

        return fetch('http://127.0.0.1:8000/api/users/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',
            
            }, 
            body:JSON.stringify(body)

        }).then(resp => resp.json())

    }


    static SaveFavoris(body) {

        return fetch('https://hairbypris.herokuapp.com/api/create-favourites/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization':"Token 164db5e00610c5a682f19e61ec0960f656de73b2"
            }, 
            body:JSON.stringify(body)

        }).then(resp => resp.json())

    }

    static DeleteFavourite(id, token) {

        return fetch(`https://hairbypris.herokuapp.com/api/favourites-delete/${id}`, {
            'method':'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Authorization':"Token 164db5e00610c5a682f19e61ec0960f656de73b2"            }
  
        })

    }
}