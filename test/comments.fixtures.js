function makeCommentsArray() {
  return [
    {
      id: 1,
      date_commented: '2029-01-22T16:28:32.615Z',
      text: 'First comment',
      article_id: 1,
      user_id: 1,
    },
    {
      id: 2,
      date_commented: '2029-05-22T16:28:32.615Z',
      text: 'Second comment',
      article_id: 1,
      user_id: 2,
    },
    {
      id: 3,
      date_commented: '2029-06-22T16:28:32.615Z',
      text: 'Second comment',
      article_id: 2,
      user_id: 2,
    }
  ]
}

module.exports = {
  makeCommentsArray
}
