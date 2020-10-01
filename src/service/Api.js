const URL = "https://api.myidea.fr/v1/"


export function getNotes(){
    return new Promise((resolve, reject) => {
    window.fetch(URL + 'notes')
    .then(response => response.json())
    .then(result =>{
        console.log('Reponse API getNotes', result)
        resolve(result)
    })
    .catch(error => {
        console.error(error)
        reject(error)
    })
 })
}

export function createNote(note){
    return new Promise((resolve, reject) => {
    if (note.title && note.description){
        var body = {
           title: note.title,
           description: note.description
        }
   
        var params = { 
                  method: 'POST',
                  headers: {'Content-Type': 'application/json; charset=UTF-8'},
                  cache: 'default',
                  body: JSON.stringify(body)
                }

                fetch(URL + 'notes', params)   
                .then(response => console.log(response))  
                 resolve()
                .catch(error => console.log(error))  
                
            } else {
                reject('Infos manquantes')
            }
   })
}


export function deleteNote(noteId){
    
    return new Promise((resolve, reject) => {
        if (noteId){
            var params = { 
                method: 'DELETE',
                headers: {'Content-Type': 'application/json; charset=UTF-8'}, // Force l'api à répondre
                cache: 'default',
              }
        window.fetch(URL + 'notes/'+ noteId, params)
        .then(result =>{
            console.log(result)
            resolve()
        })
        .catch(error => {
            console.error(error)
            reject(error)
        })
    }
   })
}
/*
export function updateNote(noteId){
    return new Promise((resolve, reject) => {
        if (noteId){
            var params = { 
                method: 'UPDATE',
                headers: {'Content-Type': 'application/json; charset=UTF-8'},
                cache: 'default',
                noteId: JSON.stringify(noteId)
              }
        window.fetch(URL + 'notes/', noteId, params)
        .then(result =>{
            console.log('Reponse API getNotes', result)
            resolve()
        })
        .catch(error => {
            console.error(error)
            reject(error)
        })
    }
   })

} 

*/