export default function (state = {}, action) {
  switch (action.type) {
    case "GET_All_TASKS":
      return action.payload;
    case "APPROVE_TASK":
      console.log(action,"action")
      // take the index of the approved 1
      // [1 , 3, 5, 6, 7, 8]

      // --> i want to change element id 5
      // first => element id 5 is in position number 2
      // return [1 , 3, action.payload,  6, 7, 8]

      //const index = state.map(x => x._id).indexOf(action.payload._id)
      const index = state.findIndex((x) => x._id === action.payload._id);
      return  [...state.slice(0, index),action.payload, ...state.slice(index + 1)]  
    case "DELETE_TASK":
      return state.filter((task) => task._id !== action.payload);  
    default:
      return state;
  }
}
