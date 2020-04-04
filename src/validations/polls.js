const constraints = {
  pollNew: {
    option1: {
      presence: true,
      length: {        
        minimum: 1,
        message: "^Veuillez saisir l'option 1"
      }
    },
    option2: {
      presence: true,
      length: {        
        minimum: 10,
        message: "^Veuillez saisir l'option 2"
      }
    },    
  }  
};

export default constraints;
