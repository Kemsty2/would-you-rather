const constraints = {
  pollNew: {
    optionOne: {
      presence: true,
      length: {        
        minimum: 1,
        message: "^Veuillez saisir l'option 1"
      }
    },
    optionTwo: {
      presence: true,
      length: {        
        minimum: 1,
        message: "^Veuillez saisir l'option 2"
      }
    },    
  }  
};

export default constraints;
