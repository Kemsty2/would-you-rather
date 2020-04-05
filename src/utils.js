export const isAnswerPoll = (poll, idUser) => {
  return (
    poll.optionOne.votes.indexOf(idUser) !== -1 ||
    poll.optionTwo.votes.indexOf(idUser) !== -1
  );
};
