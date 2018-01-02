import axios from 'axios';

export const GET_FILES = 'GET_FILES';
export const  ADD_FILES = 'ADD_FILES';
export const DELETE_FILES = 'DELETE FILES';



export function addFiles(filepath) {
    axios.post('http://localhost:5000/googleDrive/upload')
        .then((res) => {
            console.log('response..',res);
        });
    return {
        type: ADD_FILES,
        payload: filepath
    }
}


export function getFiles() {
        axios.get('http://localhost:5000/googleDrive/files')
            .then((res) => {
                console.log(res);
        });

    return {
        type: GET_FILES,
        payload: { getFiles : true }
    }
}

export function deleteFile(fileId) {
    return {
        type : DELETE_FILES,
        payload : { fileId }
    }
}