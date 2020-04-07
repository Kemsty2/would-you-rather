export const isAnswerPoll = (poll, idUser) => {
  return (
    poll.optionOne.votes.indexOf(idUser) !== -1 ||
    poll.optionTwo.votes.indexOf(idUser) !== -1
  );
};

export const getResult = (question, optionType) => {  
  const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
  const percentage = ((question[optionType].votes.length) / totalVotes) * 100;
  
  const result = {
    numVotes: question[optionType].votes.length,
    percentage: percentage < 50 ? Math.floor(percentage) : Math.ceil(percentage)
  }
  return result;
}

export function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}
