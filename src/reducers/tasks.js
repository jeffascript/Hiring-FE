export default function(state = {}, action) {
    switch (action.type) {
      case "GET_TASKS": 
      return action.payload;
     //   loggedInUser: action.payload
    
      default:
        return state;
    }
  }