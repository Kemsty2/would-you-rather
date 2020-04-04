import {PENDING, SUCCESS, FAIL} from '.'

export function pendingStore(){
    return {
        type: PENDING
    }
}
export function successStore(message){
    return {
        type: SUCCESS,
        message
    }
}
export function failStore(message){
    return {
        type: FAIL,
        message
    }
}