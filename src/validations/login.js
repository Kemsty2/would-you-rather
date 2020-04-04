const constraints = {
    loginUser: {
      user: {
        presence: true,
        length: {        
          minimum: 1,
          message: "^Veuillez saisir l'option"
        }
      }   
    }  
  };
  
  export default constraints;
  