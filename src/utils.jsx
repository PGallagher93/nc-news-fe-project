import moment from 'moment';

export const timeAgo = (date) => {
     
    return moment(date).fromNow()

}


export const handleLogout = (e) =>{
        
    localStorage.removeItem('username')
    localStorage.removeItem('avatar')
}