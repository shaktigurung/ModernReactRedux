export default (state=[], action) => {
   //Using if condition
//    if(action.type === 'FETCH_POSTS') {
//        return action.payload
//    }
//    return state;
   //Switch case
   switch(action.type) {
       case 'FETCH_POSTS':
           return action.payload;
       default: 
           return state;
   }

  
}